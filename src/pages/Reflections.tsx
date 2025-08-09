import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, PenTool, Heart, Share2, Plus, ArrowRight } from "lucide-react";

export default function Reflections() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <MessageCircle className="w-4 h-4 mr-2" />
              Reflections
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Share Your Reading Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Transform your reading insights into meaningful conversations. Share reflections, 
              discover new perspectives, and connect with readers who understand your passion for books.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-button text-lg px-8 py-4">
                <Plus className="mr-2 h-5 w-5" />
                Write Reflection
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Browse Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Write Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How to Write & Post Reflections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your thoughts, insights, and favorite moments from your reading journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Book</h3>
              <p className="text-muted-foreground">Select a book from your library or add a new one to reflect on your reading experience.</p>
            </div>
            
            <div className="text-center animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Write Your Thoughts</h3>
              <p className="text-muted-foreground">Share quotes, insights, emotions, or questions that the book sparked in your mind.</p>
            </div>
            
            <div className="text-center animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Share & Connect</h3>
              <p className="text-muted-foreground">Post your reflection to connect with other readers and start meaningful conversations.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in-up stagger-3">
            <Card className="card-premium p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <PenTool className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">What makes a great reflection?</h3>
                    <p className="text-muted-foreground">Tips for writing reflections that spark great conversations</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-accent">✨ Include</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Specific quotes that moved you</li>
                      <li>• Personal connections to the story</li>
                      <li>• Questions the book raised</li>
                      <li>• Emotional reactions to characters or events</li>
                      <li>• How the book changed your perspective</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-destructive">🚫 Avoid</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Major spoilers without warnings</li>
                      <li>• Simple "good book" statements</li>
                      <li>• Overly long plot summaries</li>
                      <li>• Negative comments about other readers</li>
                      <li>• Off-topic discussions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button className="gold-button text-lg px-8 py-4">
                    Start Writing Your Reflection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Reflections Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Recent Community Reflections
            </h2>
            <p className="text-xl text-muted-foreground">
              See how other readers are sharing their insights and discoveries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-premium p-6 animate-fade-in-up">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    SC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">Sarah Chen</span>
                      <Badge variant="secondary" className="text-xs">Avid Reader</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Reflecting on "The Seven Husbands of Evelyn Hugo"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-cream-warm p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm italic">"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for."</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    This quote hit me so hard. Evelyn's journey through love and loss made me think about my own relationships 
                    and how we choose who gets to matter in our lives. The way Reid crafted each relationship with such depth... 
                    I'm still processing all the emotions. Has anyone else felt completely changed by this book? 💕
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      24 likes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      8 replies
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      3 shares
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium p-6 animate-fade-in-up stagger-1">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                    MR
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">Marcus Rodriguez</span>
                      <Badge variant="secondary" className="text-xs">Book Club Host</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Thoughts on "Project Hail Mary"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    🚀 WOW. Just finished this absolute masterpiece and I'm emotionally exhausted in the best way possible. 
                    Weir's ability to blend hard science with genuine emotion and humor is unmatched. The friendship between 
                    Grace and Rocky had me in tears (no spoilers!). 
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    If you love stories about human resilience, unlikely friendships, and the power of science to save the day, 
                    this is YOUR book. Who else has read this? I need to talk about THAT ending! 🤯
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      31 likes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      15 replies
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      7 shares
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 animate-fade-in-up stagger-2">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Share Your Insights?</h3>
              <p className="text-muted-foreground mb-8">
                Join the conversation and connect with readers who share your passion for great books. 
                Your reflections might just help someone discover their next favorite read.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button text-lg px-8 py-4">
                  <Plus className="mr-2 h-5 w-5" />
                  Write My First Reflection
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Browse All Reflections
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