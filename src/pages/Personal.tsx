import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Timer, Library, PenTool, Target, ArrowRight, BookOpen } from "lucide-react";

const personalFeatures = [
  {
    icon: Timer,
    title: "Reading Timer",
    description: "Track your reading sessions with smart goals and beautiful progress visualization.",
    href: "/personal/timer",
    color: "bg-gradient-primary"
  },
  {
    icon: Library,
    title: "Personal Library",
    description: "Organize your books with custom categories, reading status, and progress tracking.",
    href: "/personal/library",
    color: "bg-gradient-gold"
  },
  {
    icon: PenTool,
    title: "Note-taking",
    description: "Capture insights with rich text, images, and AI-powered summarization.",
    href: "/personal/notes",
    color: "bg-secondary"
  }
];

export default function Personal() {
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
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Your Personal Reading Hub
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Everything you need to track your reading journey, organize your library, 
              and capture valuable insights from every book you read.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Track the books you're reading
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the tool that fits your current reading goals and get started immediately.
            </p>
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
                  <Link to={feature.href}>
                    <Button className="gold-button w-full group-hover:shadow-gold">
                      Start {feature.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
              <Link to="/personal/timer">
                <Button className="hero-button ml-4">
                  Start Tracking
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