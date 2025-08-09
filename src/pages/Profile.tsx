import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Edit3, BookOpen, Clock, Target, Star, Settings, Camera } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Profile Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-cream-warm to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Card className="card-premium p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Picture & Basic Info */}
                <div className="flex flex-col items-center text-center md:text-left">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-4xl font-bold">
                      SC
                    </div>
                    <button className="absolute bottom-2 right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Camera className="h-5 w-5 text-accent-foreground" />
                    </button>
                  </div>
                  <Button variant="outline" size="sm" className="mb-4">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                {/* Profile Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Sarah Chen</h1>
                    <p className="text-muted-foreground mb-4">
                      Passionate reader who loves literary fiction, psychology, and personal development. 
                      Always looking for books that challenge perspectives and touch the heart. 📚✨
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Literary Fiction</Badge>
                      <Badge variant="secondary">Psychology</Badge>
                      <Badge variant="secondary">Personal Development</Badge>
                      <Badge variant="secondary">Sci-Fi</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl font-bold gradient-text">47</div>
                      <div className="text-sm text-muted-foreground">Books Read</div>
                    </div>
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl font-bold gradient-text">156h</div>
                      <div className="text-sm text-muted-foreground">Reading Time</div>
                    </div>
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl font-bold gradient-text">23</div>
                      <div className="text-sm text-muted-foreground">Day Streak</div>
                    </div>
                    <div className="text-center p-4 bg-cream rounded-lg">
                      <div className="text-2xl font-bold gradient-text">4.2</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Reading & Progress Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold gradient-text">Current Reading</h2>
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                View All Books
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Currently Reading Book */}
              <Card className="card-premium p-6 animate-fade-in-up">
                <div className="flex gap-4">
                  <div className="w-20 h-28 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">The Seven Husbands of Evelyn Hugo</h3>
                    <p className="text-muted-foreground text-sm mb-3">by Taylor Jenkins Reid</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>68% (204/300 pages)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-gold h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        2h 15m today
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        Goal: 50 pages
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reading Goals */}
              <Card className="card-premium p-6 animate-fade-in-up stagger-1">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Reading Goals
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Daily Goal: 30 minutes</span>
                      <span className="text-accent font-medium">Achieved! 🎉</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-gold h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Weekly Goal: 3.5 hours</span>
                      <span>2.2h / 3.5h</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '63%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Goal: 4 books</span>
                      <span>2 / 4 books</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Settings className="w-4 h-4 mr-2" />
                  Adjust Goals
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity & Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold gradient-text mb-8 animate-fade-in-up">Recent Activity</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Recently Completed */}
              <Card className="card-premium p-6 animate-fade-in-up">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-accent" />
                  Recently Completed
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-12 h-16 bg-gradient-primary rounded flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">Atomic Habits</h4>
                      <p className="text-xs text-muted-foreground mb-1">James Clear</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="w-12 h-16 bg-gradient-gold rounded flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">The Psychology of Money</h4>
                      <p className="text-xs text-muted-foreground mb-1">Morgan Housel</p>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                        <Star className="h-3 w-3 text-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Achievements */}
              <Card className="card-premium p-6 animate-fade-in-up stagger-1">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  Recent Achievements
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <p className="font-medium text-sm">Week Warrior</p>
                      <p className="text-xs text-muted-foreground">7-day reading streak</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                    <div className="text-2xl">📚</div>
                    <div>
                      <p className="font-medium text-sm">Genre Explorer</p>
                      <p className="text-xs text-muted-foreground">Read 5 different genres</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                    <div className="text-2xl">⭐</div>
                    <div>
                      <p className="font-medium text-sm">Thoughtful Reader</p>
                      <p className="text-xs text-muted-foreground">50 notes created</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reading Insights */}
              <Card className="card-premium p-6 animate-fade-in-up stagger-2">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  This Month's Insights
                </h3>
                
                <div className="space-y-4">
                  <div className="text-center p-3 bg-cream rounded-lg">
                    <div className="text-xl font-bold gradient-text">12.5h</div>
                    <p className="text-xs text-muted-foreground">Total reading time</p>
                  </div>
                  
                  <div className="text-center p-3 bg-cream rounded-lg">
                    <div className="text-xl font-bold gradient-text">486</div>
                    <p className="text-xs text-muted-foreground">Pages read</p>
                  </div>
                  
                  <div className="text-center p-3 bg-cream rounded-lg">
                    <div className="text-xl font-bold gradient-text">Fiction</div>
                    <p className="text-xs text-muted-foreground">Favorite genre</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}