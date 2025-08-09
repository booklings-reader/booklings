import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { 
  BookOpen, 
  Target, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Timer,
  PenTool,
  Trophy,
  Flame,
  Clock
} from "lucide-react";
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  full_name: string;
  username: string;
  reading_goal_daily: number;
  reading_goal_weekly: number;
}

interface ReadingStreak {
  current_streak: number;
  longest_streak: number;
}

interface UserBook {
  id: string;
  status: string;
  current_page: number;
  progress_percentage: number;
  books: {
    title: string;
    author: string;
    page_count: number;
  };
}

interface ReadingSession {
  duration_minutes: number;
  session_date: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [streak, setStreak] = useState<ReadingStreak | null>(null);
  const [currentBooks, setCurrentBooks] = useState<UserBook[]>([]);
  const [todayReading, setTodayReading] = useState(0);
  const [weeklyReading, setWeeklyReading] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);
      await loadDashboardData(session.user.id);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          navigate("/auth");
        } else if (session?.user) {
          setUser(session.user);
          loadDashboardData(session.user.id);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const loadDashboardData = async (authId: string) => {
    try {
      // Get user profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('auth_id', authId)
        .single();

      if (profileData) {
        setProfile(profileData);

        // Get reading streak
        const { data: streakData } = await supabase
          .from('reading_streaks')
          .select('*')
          .eq('user_id', profileData.id)
          .single();

        setStreak(streakData);

        // Get currently reading books
        const { data: booksData } = await supabase
          .from('user_books')
          .select(`
            id,
            status,
            current_page,
            progress_percentage,
            books (
              title,
              author,
              page_count
            )
          `)
          .eq('user_id', profileData.id)
          .eq('status', 'currently_reading');

        setCurrentBooks(booksData || []);

        // Get today's reading time
        const today = new Date().toISOString().split('T')[0];
        const { data: todayData } = await supabase
          .from('reading_sessions')
          .select('duration_minutes')
          .eq('user_id', profileData.id)
          .eq('session_date', today);

        const todayTotal = todayData?.reduce((sum, session) => sum + session.duration_minutes, 0) || 0;
        setTodayReading(todayTotal);

        // Get this week's reading time
        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const { data: weekData } = await supabase
          .from('reading_sessions')
          .select('duration_minutes')
          .eq('user_id', profileData.id)
          .gte('session_date', weekStart.toISOString().split('T')[0]);

        const weekTotal = weekData?.reduce((sum, session) => sum + session.duration_minutes, 0) || 0;
        setWeeklyReading(weekTotal);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-primary-foreground animate-pulse" />
          </div>
          <p className="text-muted-foreground">Loading your reading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="card-premium p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Profile Setup Required</h3>
          <p className="text-muted-foreground mb-4">Please complete your profile setup to continue.</p>
          <Button onClick={() => navigate("/auth")}>Return to Login</Button>
        </Card>
      </div>
    );
  }

  const dailyProgress = Math.min((todayReading / profile.reading_goal_daily) * 100, 100);
  const weeklyProgress = Math.min((weeklyReading / profile.reading_goal_weekly) * 100, 100);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                Welcome back, {profile.full_name?.split(' ')[0] || profile.username}!
              </h1>
              <p className="text-muted-foreground">Ready to continue your reading journey?</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-premium">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reading Streak</CardTitle>
                <Flame className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{streak?.current_streak || 0} days</div>
                <p className="text-xs text-muted-foreground">
                  Best: {streak?.longest_streak || 0} days
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Reading</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayReading} min</div>
                <Progress value={dailyProgress} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Goal: {profile.reading_goal_daily} min
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weeklyReading} min</div>
                <Progress value={weeklyProgress} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  Goal: {profile.reading_goal_weekly} min
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Currently Reading</CardTitle>
                <BookOpen className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentBooks.length}</div>
                <p className="text-xs text-muted-foreground">
                  {currentBooks.length === 1 ? 'book' : 'books'} in progress
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="card-premium hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate("/personal/timer")}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Start Reading Session</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Track your reading time with our beautiful timer</p>
                <Button className="gold-button w-full">Start Timer</Button>
              </CardContent>
            </Card>

            <Card className="card-premium hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate("/personal/library")}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle>Manage Library</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Add books and track your reading progress</p>
                <Button className="hero-button w-full">Open Library</Button>
              </CardContent>
            </Card>

            <Card className="card-premium hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => navigate("/personal/notes")}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle>Write Notes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Capture insights and thoughts from your reading</p>
                <Button variant="secondary" className="w-full">Take Notes</Button>
              </CardContent>
            </Card>
          </div>

          {/* Currently Reading Books */}
          {currentBooks.length > 0 && (
            <Card className="card-premium mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Currently Reading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentBooks.map((userBook) => (
                    <div key={userBook.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{userBook.books.title}</h4>
                        <p className="text-sm text-muted-foreground">by {userBook.books.author}</p>
                        <div className="mt-2">
                          <Progress value={userBook.progress_percentage || 0} className="w-full" />
                          <p className="text-xs text-muted-foreground mt-1">
                            Page {userBook.current_page} of {userBook.books.page_count} 
                            ({Math.round(userBook.progress_percentage || 0)}%)
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => navigate("/personal/timer")}>
                        Continue Reading
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Empty State */}
          {currentBooks.length === 0 && (
            <Card className="card-premium text-center py-12">
              <CardContent>
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Plus className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to start reading?</h3>
                <p className="text-muted-foreground mb-6">
                  Add your first book to your library and begin tracking your reading journey.
                </p>
                <Button className="gold-button" onClick={() => navigate("/personal/library")}>
                  Add Your First Book
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}