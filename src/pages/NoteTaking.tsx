import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, Image, Sparkles, Tags, Search, BookOpen, ArrowRight, Plus } from "lucide-react";

export default function NoteTaking() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <PenTool className="w-4 h-4 mr-2" />
              Note-taking
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Capture Every Insight
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Transform your reading experience with intelligent note-taking that helps you capture, 
              organize, and rediscover the best insights from every book you read.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-button text-lg px-8 py-4">
                <Plus className="mr-2 h-5 w-5" />
                Create My First Note
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold">
                Add <span className="gradient-text">Text & Images</span> While Reading
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Never lose a brilliant thought again. Our note-taking system lets you capture 
                quotes, insights, and visual references in real-time as you read, creating a 
                rich knowledge base that grows with every book.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <PenTool className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rich Text Editor</h3>
                    <p className="text-muted-foreground">Format your notes with headers, lists, quotes, and styling to organize your thoughts perfectly.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Image className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visual References</h3>
                    <p className="text-muted-foreground">Add images, diagrams, and visual cues to make your notes more memorable and comprehensive.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Tags className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Organization</h3>
                    <p className="text-muted-foreground">Tag notes by theme, page reference, or importance to create your personal knowledge system.</p>
                  </div>
                </div>
              </div>

              <Button className="gold-button text-lg px-8 py-4">
                Start Taking Notes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative animate-fade-in-up stagger-2">
              <Card className="card-premium p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">The Psychology of Money - Page 47</span>
                  </div>
                  
                  <div className="bg-cream-warm p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm italic">"Getting money requires taking risks, being optimistic, and putting yourself out there. But keeping money requires the opposite..."</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">💡 Key Insight</h4>
                    <p className="text-sm text-muted-foreground">The skills needed to acquire wealth are different from those needed to preserve it. This explains why many people struggle with long-term financial success.</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">wealth-building</Badge>
                    <Badge variant="outline" className="text-xs">psychology</Badge>
                    <Badge variant="outline" className="text-xs">key-insight</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Summarization Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-up">
              <Card className="card-premium p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">AI Summary Generated</span>
                    <Badge className="bg-gradient-gold text-accent-foreground text-xs">Premium</Badge>
                  </div>
                  
                  <h4 className="font-semibold">📚 Chapter Summary</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Based on your 7 notes from this chapter, the main themes include risk management in investing, 
                    the importance of time horizon in wealth building, and behavioral psychology factors that influence financial decisions.
                  </p>
                  
                  <div className="bg-cream p-4 rounded-lg">
                    <h5 className="text-sm font-medium mb-2">🎯 Your Key Takeaways:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wealth preservation requires different skills than wealth creation</li>
                      <li>• Time is the most powerful factor in compound growth</li>
                      <li>• Emotional control is crucial for long-term success</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-8 animate-fade-in-up stagger-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                AI-Powered <span className="gradient-text">Summarization</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your notes into powerful insights with AI that understands your reading patterns, 
                identifies key themes, and creates personalized summaries that help you remember and apply what you've learned.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Summaries</h3>
                    <p className="text-muted-foreground">AI analyzes your notes to create chapter and book summaries that highlight your most important insights.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Search</h3>
                    <p className="text-muted-foreground">Find any note instantly with AI-powered search that understands context and concepts, not just keywords.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cross-Book Insights</h3>
                    <p className="text-muted-foreground">Discover connections between books and ideas across your entire reading library.</p>
                  </div>
                </div>
              </div>

              <Button className="hero-button text-lg px-8 py-4">
                Try AI Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Capturing Better Insights Today
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of readers who've transformed their note-taking and never forget 
              an important insight again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
                <Plus className="mr-2 h-5 w-5" />
                Start Taking Notes
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