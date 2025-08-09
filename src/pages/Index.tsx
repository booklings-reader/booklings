import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Timer,
  Users,
  PenTool,
  Target,
  TrendingUp,
  Star,
  ArrowRight,
  Quote
} from "lucide-react";
import owlMascot from "@/assets/owl-mascot.png";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const features = [
  {
    icon: Timer,
    title: "Reading Timer",
    description: "Track your reading sessions with smart goals and beautiful progress visualization.",
    href: "/personal/timer"
  },
  {
    icon: BookOpen,
    title: "Personal Library",
    description: "Organize your books with custom categories, reading status, and progress tracking.",
    href: "/personal/library"
  },
  {
    icon: PenTool,
    title: "Smart Notes",
    description: "Capture insights with rich text, images, and AI-powered summarization.",
    href: "/personal/notes"
  },
  {
    icon: Users,
    title: "Reading Community",
    description: "Connect with fellow readers, share reflections, and discover new books.",
    href: "/community"
  }
];

const benefits = [
  {
    icon: Target,
    title: "Build Better Habits",
    description: "Achieve your reading goals with personalized tracking and gentle reminders."
  },
  {
    icon: TrendingUp,
    title: "Track Your Growth",
    description: "Visualize your reading journey with detailed analytics and achievements."
  },
  {
    icon: Users,
    title: "Find Your Tribe",
    description: "Connect with readers who share your interests and reading style."
  }
];

const steps = [
  { step: "1", title: "Create Your Profile", description: "Set up your reading preferences and goals in under 2 minutes." },
  { step: "2", title: "Add Your Books", description: "Build your personal library and set reading status for each book." },
  { step: "3", title: "Start Tracking", description: "Use our beautiful timer to track sessions and take notes while reading." },
  { step: "4", title: "Connect & Share", description: "Join the community to share insights and discover new books." }
];

const testimonials = [
  { text: "Booklings transformed my reading habit. I've read more this year than in the past three combined!", author: "Sarah Chen", role: "Product Designer", rating: 5 },
  { text: "The note-taking feature is incredible. I can finally capture and organize all my book insights.", author: "Marcus Rodriguez", role: "Software Engineer", rating: 5 },
  { text: "Love the community aspect. I've discovered so many amazing books through other readers.", author: "Emma Thompson", role: "Teacher", rating: 5 }
];

export default function Index() {
  const navigate = useNavigate();

  // If logged in, redirect Home to Dashboard
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/dashboard", { replace: true });
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge variant="secondary" className="w-fit">✨ Premium Reading Companion</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Read.</span>{" "}
                <span className="gradient-text">Reflect.</span>{" "}
                <span className="gradient-text">Connect.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transform your reading journey with our beautiful, premium app that helps you track books,
                capture insights, and connect with fellow readers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button className="hero-button text-lg px-8 py-6">
                    Join Now - It's Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/personal">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up stagger-2">
              <div className="relative w-full max-w-md mx-auto">
                <img src={owlMascot} alt="Booklings Owl Mascot" className="w-full h-auto owl-bounce drop-shadow-2xl" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-gold rounded-full blur-xl opacity-50 float-animation"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30 float-animation" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Track the books you're reading</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a sustainable reading habit and connect with fellow book lovers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className={`card-premium hover:scale-105 animate-fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Link to={feature.href}>
                    <Button variant="outline" size="sm">Open</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/auth">
              <Button className="gold-button text-lg px-8 py-4">
                Start Tracking Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold">Growth & <span className="gradient-text">Community</span> Awaits</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of readers who've transformed their reading habits and discovered a passionate community of book lovers.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className={`flex gap-4 animate-fade-in-up stagger-${index + 1}`}>
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-up stagger-2">
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-premium"><CardContent className="p-6 text-center"><div className="text-3xl font-bold gradient-text mb-2">12,547</div><p className="text-sm text-muted-foreground">Books Tracked</p></CardContent></Card>
                <Card className="card-premium mt-8"><CardContent className="p-6 text-center"><div className="text-3xl font-bold gradient-text mb-2">1,984</div><p className="text-sm text-muted-foreground">Active Readers</p></CardContent></Card>
                <Card className="card-premium -mt-4"><CardContent className="p-6 text-center"><div className="text-3xl font-bold gradient-text mb-2">4.6★</div><p className="text-sm text-muted-foreground">App Rating</p></CardContent></Card>
                <Card className="card-premium mt-4"><CardContent className="p-6 text-center"><div className="text-3xl font-bold gradient-text mb-2">78%</div><p className="text-sm text-muted-foreground">Goal Success</p></CardContent></Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold">Start Reading Smarter Today</h2>
            <p className="text-xl opacity-90 leading-relaxed">Join thousands of readers who've transformed their reading habits with our premium companion app.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/personal">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get started in minutes and begin your premium reading journey today.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className={`text-center animate-fade-in-up stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">What Readers Say</h2>
            <p className="text-xl text-muted-foreground">Loved by thousands of passionate readers worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`card-premium animate-fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">We're here to help you on your reading journey. Reach out anytime!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community">
                <Button variant="outline" size="lg" className="px-8 py-4">Visit Community</Button>
              </Link>
              <Link to="/personal">
                <Button className="hero-button px-8 py-4">
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}