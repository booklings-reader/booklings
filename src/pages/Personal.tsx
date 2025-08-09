import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Timer, Library, PenTool, Target, ArrowRight, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface NoteItem {
  id: string;
  title: string | null;
  content: string;
  created_at: string;
}

const personalFeatures = [
  { icon: Timer, title: "Reading Timer", description: "Track your reading sessions with smart goals and beautiful progress visualization.", href: "/personal/timer", color: "bg-gradient-primary" },
  { icon: Library, title: "Personal Library", description: "Organize your books with custom categories, reading status, and progress tracking.", href: "/personal/library", color: "bg-gradient-gold" },
  { icon: PenTool, title: "Note-taking", description: "Capture insights with rich text, images, and AI-powered summarization.", href: "/personal/notes", color: "bg-secondary" }
];

export default function Personal() {
  const [notes, setNotes] = useState<NoteItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          setNotes([]);
          setLoading(false);
          return;
        }
        const authId = session.user.id;
        const { data: profile } = await (supabase as any)
          .from('profiles')
          .select('id')
          .eq('auth_id', authId)
          .single();
        if (!profile) {
          setNotes([]);
        } else {
          const { data, error } = await (supabase as any)
            .from('notes')
            .select('id, title, content, created_at')
            .eq('user_id', profile.id)
            .order('created_at', { ascending: false })
            .limit(10);
          if (error) throw error;
          setNotes(data || []);
        }
      } catch (e) {
        console.error(e);
        toast({ title: 'Failed to load notes', description: 'Please try again later.', variant: 'destructive' });
        setNotes([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <BookOpen className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">Your Personal Reading Hub</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Everything you need to track your reading journey, organize your library,
              and capture valuable insights from every book you read.
            </p>
          </div>
        </div>
      </section>

      {/* Your Notes Preview */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Your recent notes</h2>
          {loading ? (
            <p className="text-muted-foreground">Loading notes…</p>
          ) : notes && notes.length > 0 ? (
            <div className="space-y-3">
              {notes.map((n) => (
                <Card key={n.id} className="card-premium">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{n.title || 'Untitled note'}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{n.content}</p>
                    <p className="text-xs text-muted-foreground mt-2">{new Date(n.created_at).toLocaleString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="card-premium">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground mb-4">No notes yet.</p>
                <Link to="/personal/notes"><Button className="hero-button">Create your first note</Button></Link>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Track the books you're reading</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the tool that fits your current reading goals and get started immediately.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {personalFeatures.map((feature, index) => (
              <Card key={feature.title} className={`card-premium hover:scale-105 animate-fade-in-up stagger-${index + 1} group`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Link to={feature.href}><Button className="gold-button w-full group-hover:shadow-gold">Start {feature.title}<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center gap-4 p-6 bg-card rounded-2xl shadow-soft">
              <Target className="h-8 w-8 text-accent" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Ready to start tracking?</h3>
                <p className="text-muted-foreground">Begin with our reading timer and build your habit today.</p>
              </div>
              <Link to="/personal/timer"><Button className="hero-button ml-4">Start Tracking</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}