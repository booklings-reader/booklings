import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, Play, Target, TrendingUp, Calendar, Clock, ArrowRight } from "lucide-react";

const timerFeatures = [
  {
    icon: Target,
    title: "Custom Goals",
    description: "Set daily and weekly reading targets that match your lifestyle and schedule."
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Beautiful timer interface with focus modes and distraction-free reading sessions."
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Detailed insights into your reading patterns, streaks, and improvement over time."
  },
  {
    icon: Calendar,
    title: "Session History",
    description: "Review past reading sessions with notes, pages read, and time spent per book."
  }
];

export default function ReadingTimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Timer className="w-4 h-4 mr-2" />
              Reading Timer
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Track Every Reading Moment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Build consistent reading habits with our beautiful timer that tracks your progress, 
              celebrates your achievements, and helps you reach your reading goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-button text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Start Reading Session
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View My Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Timer Works Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How the Reading Timer Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, elegant way to track your reading time and build lasting habits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Book</h3>
              <p className="text-muted-foreground">Select from your library or add a new book to start tracking your reading session.</p>
            </div>
            
            <div className="text-center animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Your Timer</h3>
              <p className="text-muted-foreground">Begin reading with our beautiful, distraction-free timer interface that keeps you focused.</p>
            </div>
            
            <div className="text-center animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-muted-foreground">Automatically save your reading time, pages read, and build your reading streak.</p>
            </div>
          </div>

          <div className="text-center animate-fade-in-up stagger-3">
            <Card className="card-premium inline-block p-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Timer className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-4">Join thousands of readers building better habits with our timer.</p>
                  <Button className="gold-button">
                    Start Your First Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to track and improve your reading habits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {timerFeatures.map((feature, index) => (
              <Card key={feature.title} className={`card-premium animate-fade-in-up stagger-${index + 1}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Start Building Your Reading Habit Today</h3>
              <p className="text-muted-foreground mb-8">
                Research shows that tracking your reading time can increase your reading frequency by up to 40%. 
                Join the thousands of readers who've transformed their habits with Booklings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Start Reading Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}