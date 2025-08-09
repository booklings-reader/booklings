-- Fix security warnings by updating functions with proper search_path

-- Update the update_updated_at_column function with proper search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Update the handle_new_user function with proper search_path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = ''
AS $$
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
$$;