import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Heart, Users, Target, Mail, MessageSquare, ArrowRight } from "lucide-react";
import owlMascot from "@/assets/owl-mascot.png";

const values = [
  {
    icon: BookOpen,
    title: "Love of Reading",
    description: "We believe reading is one of life's greatest pleasures and most powerful tools for growth."
  },
  {
    icon: Heart,
    title: "Mindful Reading",
    description: "Quality over quantity - we encourage thoughtful, reflective reading that enriches your life."
  },
  {
    icon: Users,
    title: "Community",
    description: "Reading is better together. We foster connections between passionate readers worldwide."
  },
  {
    icon: Target,
    title: "Personal Growth",
    description: "Every book is an opportunity to learn, grow, and become a better version of yourself."
  }
];

const stats = [
  { label: "Active Readers", value: "50,000+" },
  { label: "Books Tracked", value: "2.5M+" },
  { label: "Reading Hours", value: "1.2M+" },
  { label: "Communities", value: "500+" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Mission Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <BookOpen className="w-4 h-4 mr-2" />
              About Booklings
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We're building the world's most beautiful and thoughtful reading companion - 
              helping millions of readers track their journey, capture insights, and connect with like-minded book lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="gradient-text">Story & Values</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Booklings was born from a simple belief: every reader deserves tools that are as beautiful 
                and thoughtful as the books they love. We started as book lovers frustrated by clunky, 
                feature-heavy reading apps that lost sight of what reading is really about.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to create the most elegant, premium reading companion that helps you build 
                lasting reading habits, capture meaningful insights, and connect with a community of passionate readers.
              </p>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={value.title} className={`flex gap-4 animate-fade-in-up stagger-${index + 1}`}>
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in-up stagger-2">
              <div className="relative w-full max-w-md mx-auto">
                <img 
                  src={owlMascot} 
                  alt="Booklings Owl Mascot" 
                  className="w-full h-auto owl-bounce drop-shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-gold rounded-full blur-xl opacity-50 float-animation"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30 float-animation" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Growing Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of readers who've made Booklings their reading home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={stat.label} className={`card-premium text-center p-8 animate-fade-in-up stagger-${index + 1}`}>
                <CardContent className="p-0">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions, feedback, or just want to say hello? We'd love to hear from you.
              </p>
            </div>

            <Card className="card-premium p-8 animate-fade-in-up stagger-1">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us what's on your mind..." 
                    rows={6}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="hero-button flex-1 text-lg px-8 py-4">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join Discord
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Reading Journey?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join our community of passionate readers and start building the reading habit you've always wanted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                Join Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}