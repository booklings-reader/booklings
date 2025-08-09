-- Profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  reading_goal_daily INTEGER DEFAULT 30,
  reading_goal_weekly INTEGER DEFAULT 210,
  wants_ai_feature BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Books table
CREATE TABLE public.books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  isbn TEXT UNIQUE,
  cover_url TEXT,
  description TEXT,
  page_count INTEGER,
  genre TEXT,
  published_year INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- User Books table
CREATE TABLE public.user_books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  book_id UUID REFERENCES public.books(id),
  status TEXT CHECK (status IN ('want_to_read','currently_reading','completed','paused')),
  current_page INTEGER DEFAULT 0,
  progress_percentage NUMERIC,
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Reading Sessions table
CREATE TABLE public.reading_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  book_id UUID REFERENCES public.books(id),
  duration_minutes INTEGER NOT NULL,
  pages_read INTEGER,
  session_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Notes table
CREATE TABLE public.notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  book_id UUID REFERENCES public.books(id),
  title TEXT,
  content TEXT NOT NULL,
  page_reference INTEGER,
  is_key_insight BOOLEAN DEFAULT false,
  tags TEXT[],
  emojis TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Achievements table
CREATE TABLE public.achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  criteria_type TEXT CHECK (criteria_type IN ('streak','books_read','time_read','notes_created')),
  criteria_value INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- User Achievements table
CREATE TABLE public.user_achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  achievement_id UUID REFERENCES public.achievements(id),
  earned_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Reading Streaks table
CREATE TABLE public.reading_streaks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id),
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_reading_date DATE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reading_streaks ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = auth_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = auth_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = auth_id);

-- RLS Policies for books (public read access)
CREATE POLICY "Anyone can view books" ON public.books FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert books" ON public.books FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- RLS Policies for user_books
CREATE POLICY "Users can manage their own books" ON public.user_books FOR ALL USING (user_id IN (SELECT id FROM public.profiles WHERE auth_id = auth.uid()));

-- RLS Policies for reading_sessions
CREATE POLICY "Users can manage their own reading sessions" ON public.reading_sessions FOR ALL USING (user_id IN (SELECT id FROM public.profiles WHERE auth_id = auth.uid()));

-- RLS Policies for notes
CREATE POLICY "Users can manage their own notes" ON public.notes FOR ALL USING (user_id IN (SELECT id FROM public.profiles WHERE auth_id = auth.uid()));

-- RLS Policies for achievements (public read access)
CREATE POLICY "Anyone can view achievements" ON public.achievements FOR SELECT USING (true);

-- RLS Policies for user_achievements
CREATE POLICY "Users can view their own achievements" ON public.user_achievements FOR SELECT USING (user_id IN (SELECT id FROM public.profiles WHERE auth_id = auth.uid()));
CREATE POLICY "Users can insert their own achievements" ON public.user_achievements FOR INSERT WITH CHECK (user_id IN (SELECT id FROM public.profiles WHERE auth_id = auth.uid()));

-- RLS Policies for reading_streaks
CREATE POLICY "Users can manage their own reading streaks" ON public.reading_streaks FOR ALL USING (user_id IN (SELECT id FROM public.profiles WHERE auth_id = auth.uid()));

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_user_books_updated_at BEFORE UPDATE ON public.user_books FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_notes_updated_at BEFORE UPDATE ON public.notes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_reading_streaks_updated_at BEFORE UPDATE ON public.reading_streaks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (auth_id, full_name, username)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'username'
  );
  
  -- Initialize reading streak
  INSERT INTO public.reading_streaks (user_id, current_streak, longest_streak)
  VALUES (
    (SELECT id FROM public.profiles WHERE auth_id = NEW.id),
    0,
    0
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert sample achievements
INSERT INTO public.achievements (title, description, icon, criteria_type, criteria_value) VALUES
('First Book', 'Complete your first book', '📖', 'books_read', 1),
('Bookworm', 'Read 10 books', '🐛', 'books_read', 10),
('Library Master', 'Read 50 books', '📚', 'books_read', 50),
('Reading Streak', 'Read for 7 days in a row', '🔥', 'streak', 7),
('Dedication', 'Read for 30 days in a row', '💪', 'streak', 30),
('Note Taker', 'Create 50 notes', '📝', 'notes_created', 50),
('Speed Reader', 'Read for 100 hours total', '⚡', 'time_read', 6000);