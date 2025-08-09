import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Library as LibraryIcon, BookOpen, Filter, Search, Star, Plus, ArrowRight } from "lucide-react";

const libraryFeatures = [
  {
    icon: BookOpen,
    title: "Organize by Categories",
    description: "Create custom genres, reading lists, and collections that make sense for your reading style."
  },
  {
    icon: Star,
    title: "Track Progress",
    description: "Monitor reading status, completion percentage, and set reading goals for each book."
  },
  {
    icon: Search,
    title: "Smart Search & Filter",
    description: "Find any book instantly with powerful search and filter options by status, genre, author, and more."
  }
];

export default function Library() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="w-fit mx-auto">
              <LibraryIcon className="w-4 h-4 mr-2" />
              Personal Library
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Your Books, Beautifully Organized
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Build your personal reading library with smart organization, progress tracking, 
              and beautiful book displays that make managing your reading list a joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="hero-button text-lg px-8 py-4">
                <Plus className="mr-2 h-5 w-5" />
                Add Your First Book
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Explore Features
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
                Build a <span className="gradient-text">Wishlist Library</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Never lose track of books you want to read again. Create a beautiful, 
                organized library that grows with your reading journey and helps you 
                discover your next favorite book.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="font-medium">Add books from any source - ISBN, manual entry, or search</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Star className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="font-medium">Track reading status and progress for every book</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Filter className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="font-medium">Organize with custom categories and smart filters</span>
                </div>
              </div>

              <Button className="gold-button text-lg px-8 py-4">
                Start Building Library
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative animate-fade-in-up stagger-2">
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-premium">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-gradient-primary rounded-lg mb-3 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">The Midnight Library</h4>
                    <p className="text-xs text-muted-foreground mb-2">Matt Haig</p>
                    <Badge variant="secondary" className="text-xs">Currently Reading</Badge>
                  </CardContent>
                </Card>
                
                <Card className="card-premium mt-8">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-gradient-gold rounded-lg mb-3 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Atomic Habits</h4>
                    <p className="text-xs text-muted-foreground mb-2">James Clear</p>
                    <Badge className="bg-green-100 text-green-800 text-xs">Completed</Badge>
                  </CardContent>
                </Card>
                
                <Card className="card-premium -mt-4">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-secondary rounded-lg mb-3 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">Dune</h4>
                    <p className="text-xs text-muted-foreground mb-2">Frank Herbert</p>
                    <Badge variant="outline" className="text-xs">Want to Read</Badge>
                  </CardContent>
                </Card>
                
                <Card className="card-premium mt-4">
                  <CardContent className="p-4">
                    <div className="aspect-[3/4] bg-gradient-primary rounded-lg mb-3 flex items-center justify-center">
                      <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-1">The Psychology of Money</h4>
                    <p className="text-xs text-muted-foreground mb-2">Morgan Housel</p>
                    <Badge variant="secondary" className="text-xs">In Progress</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Powerful Library Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to organize and track your reading collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {libraryFeatures.map((feature, index) => (
              <Card key={feature.title} className={`card-premium text-center animate-fade-in-up stagger-${index + 1}`}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Organize Your Books?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Transform your reading experience with a beautifully organized library that grows with you. 
                Add your first book and start building the reading collection you've always wanted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="hero-button text-lg px-8 py-4">
                  <Plus className="mr-2 h-5 w-5" />
                  Start My Library
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  View Demo
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