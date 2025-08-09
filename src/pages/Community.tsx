import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Heart, MessageCircle, Share2, UserPlus, BookOpen, ArrowRight, Star } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { checkSupabaseConnection } from "@/integrations/supabase/health";

const communityFeatures = [
  { icon: Heart, title: "Share Reflections", description: "Post your thoughts, favorite quotes, and book insights with a community that values thoughtful discussion.", href: "/community/reflections" },
  { icon: Users, title: "Connect with Readers", description: "Find people who share your reading interests and discover new perspectives on books you love.", href: "/community" },
  { icon: MessageCircle, title: "Join Reading Groups", description: "Participate in book clubs, genre discussions, and themed reading challenges with like-minded readers.", href: "/community" },
];

export default function Community() {
  const { toast } = useToast();

  useEffect(() => {
    checkSupabaseConnection().then((ok) => {
      if (!ok) {
        toast({ title: "Database connection issue", description: "Could not reach Supabase. Check your keys or network.", variant: "destructive" });
      }
    });
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto"><Users className="w-4 h-4 mr-2" />Reading Community</Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">Connect with Fellow Book Lovers</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Join a vibrant community of passionate readers who love to share insights, discover new books, and celebrate the joy of reading together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community/reflections">
                <Button className="hero-button text-lg px-8 py-4">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Start Sharing
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Connect, Share, Discover</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to be part of a thriving reading community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {communityFeatures.map((feature, index) => (
              <Card key={feature.title} className={`card-premium text-center hover:scale-105 animate-fade-in-up stagger-${index + 1}`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Link to={feature.href}><Button variant="outline" size="sm">Open</Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <Card className="card-premium inline-block p-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">50,000+ Active Readers</h3>
                  <p className="text-muted-foreground mb-4">Join our growing community of passionate book lovers from around the world.</p>
                  <Link to="/community/reflections">
                    <Button className="gold-button">Join the Community<ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Thoughts Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold">Share <span className="gradient-text">Thoughts & Reflections</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Turn your reading insights into meaningful conversations. Share your favorite quotes, thoughtful reflections, and book recommendations with readers who truly understand the magic of a great book.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0"><Share2 className="h-6 w-6 text-accent-foreground" /></div>
                  <div><h3 className="text-xl font-semibold mb-2">Post Reflections</h3><p className="text-muted-foreground">Share your thoughts on books you're reading with rich text, quotes, and images.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0"><Heart className="h-6 w-6 text-accent-foreground" /></div>
                  <div><h3 className="text-xl font-semibold mb-2">Engage & Connect</h3><p className="text-muted-foreground">Like, comment, and start conversations with fellow readers about books you love.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0"><BookOpen className="h-6 w-6 text-accent-foreground" /></div>
                  <div><h3 className="text-xl font-semibold mb-2">Discover Books</h3><p className="text-muted-foreground">Find your next favorite read through recommendations from readers with similar tastes.</p></div>
                </div>
              </div>
              <Link to="/community/reflections">
                <Button className="hero-button text-lg px-8 py-4">Start Sharing<ArrowRight className="ml-2 h-5 w-5" /></Button>
              </Link>
            </div>

            <div className="space-y-4 animate-fade-in-up stagger-2">
              <Card className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center"><Users className="h-6 w-6 text-primary-foreground" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2"><span className="font-semibold">Sarah Chen</span><Badge variant="secondary" className="text-xs">Avid Reader</Badge></div>
                    <p className="text-sm text-muted-foreground mb-3">"Just finished 'The Seven Husbands of Evelyn Hugo' and I'm completely blown away. The storytelling is masterful and the characters feel so real. Has anyone else read this? Would love to discuss! ✨"</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Heart className="h-3 w-3" />24 likes</span><span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" />8 comments</span></div>
                  </div>
                </div>
              </Card>
              <Card className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center"><Star className="h-6 w-6 text-accent-foreground" /></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2"><span className="font-semibold">Marcus Rodriguez</span><Badge variant="secondary" className="text-xs">Book Club Host</Badge></div>
                    <p className="text-sm text-muted-foreground mb-3">"📚 Starting a new sci-fi book club next month! We'll be reading 'Project Hail Mary' by Andy Weir. If you love space adventures with heart, join us! Limited spots available."</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Heart className="h-3 w-3" />18 likes</span><span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" />12 comments</span></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">Your Reading Journey is Better Together</h2>
            <p className="text-xl opacity-90 leading-relaxed">Join thousands of passionate readers who've found their book-loving community. Share insights, discover new favorites, and celebrate the joy of reading.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community/reflections">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4"><UserPlus className="mr-2 h-5 w-5" />Join Community</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}