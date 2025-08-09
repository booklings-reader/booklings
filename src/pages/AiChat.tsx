import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Sparkles, BookOpen, MessageCircle, ArrowLeft, Bell, Lightbulb, Search, Brain } from "lucide-react";
import owlMascot from "@/assets/owl-mascot.png";

export default function AiChat() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Coming Soon Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
            {/* Back to Dashboard Link */}
            <div className="flex justify-center">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            {/* Owl Mascot with Animation */}
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src={owlMascot} 
                alt="Booklings Owl Mascot" 
                className="w-full h-auto owl-bounce drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-gold rounded-full blur-xl opacity-50 float-animation"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-30 float-animation" style={{ animationDelay: '1s' }}></div>
              
              {/* Floating sparkles */}
              <div className="absolute top-8 left-8 animate-pulse">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <div className="absolute top-16 right-12 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <div className="absolute bottom-20 left-16 animate-pulse" style={{ animationDelay: '1s' }}>
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit mx-auto text-lg px-6 py-2">
                <Sparkles className="w-5 h-5 mr-2" />
                AI Book Chat
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                AI Book Chat — Coming Soon!
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Ask your books anything. Get instant summaries, deep insights, and personalized answers 
                from your entire reading library with our intelligent AI companion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                What You'll Be Able to Do
              </h2>
              <p className="text-xl text-muted-foreground">
                Imagine having a conversation with every book you've ever read
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-premium p-6 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Summaries</h3>
                <p className="text-muted-foreground">
                  "Summarize the key points from Atomic Habits about building lasting habits"
                </p>
              </Card>

              <Card className="card-premium p-6 text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cross-Book Insights</h3>
                <p className="text-muted-foreground">
                  "What do Atomic Habits and The Power of Now say about mindfulness?"
                </p>
              </Card>

              <Card className="card-premium p-6 text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Insights</h3>
                <p className="text-muted-foreground">
                  "Based on my reading history, what book should I read next?"
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Chat Interface */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Preview: Chat Interface
              </h2>
              <p className="text-muted-foreground">
                Here's what the AI chat experience will look like
              </p>
            </div>

            <Card className="card-premium overflow-hidden">
              <div className="bg-gradient-primary text-primary-foreground p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Booklings AI</h3>
                  <p className="text-sm opacity-80">Your reading companion</p>
                </div>
                <Badge variant="secondary" className="ml-auto">Coming Soon</Badge>
              </div>
              
              <CardContent className="p-6 space-y-4 max-h-96 overflow-y-auto bg-cream-warm">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-lg px-4 py-3 max-w-[80%]">
                    <p className="text-sm">Can you summarize the main ideas from "The Psychology of Money"?</p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-bl-lg px-4 py-3 flex-1">
                    <p className="text-sm text-muted-foreground mb-2">Based on your notes and highlights from "The Psychology of Money":</p>
                    <div className="text-sm space-y-2">
                      <p><strong>🎯 Key Insight:</strong> Wealth building and wealth preservation require different mindsets</p>
                      <p><strong>⏰ Time Factor:</strong> Compounding is the most powerful force in building wealth</p>
                      <p><strong>🧠 Psychology:</strong> Your emotions and behavior matter more than your intelligence</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Based on 12 of your notes from this book</p>
                  </div>
                </div>

                {/* System Message */}
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    This is a preview - actual AI responses will be even more personalized
                  </Badge>
                </div>
              </CardContent>
              
              <div className="p-4 border-t bg-background">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Ask anything about your books..." 
                    className="flex-1"
                    disabled
                  />
                  <Button disabled className="opacity-50">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Be the First to Experience AI Book Chat
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join our early access list and we'll notify you the moment AI Book Chat becomes available. 
              Plus, get exclusive early access and special pricing.
            </p>
            
            <Card className="card-premium p-8 bg-background text-foreground">
              <div className="max-w-md mx-auto space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center">
                    <Bell className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Get Notified</h3>
                  <p className="text-muted-foreground">
                    Be among the first to chat with your books using AI
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="text-center"
                  />
                  <Button className="gold-button w-full text-lg py-4">
                    <Bell className="mr-2 h-5 w-5" />
                    Notify Me When Ready
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  We'll only email you about AI Chat updates. No spam, unsubscribe anytime.
                </p>
              </div>
            </Card>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/personal">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Reading
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