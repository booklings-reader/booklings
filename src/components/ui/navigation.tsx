import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const baseNavItems = [
  { label: "Home", href: "/" },
  { label: "Personal", href: "/personal" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) setIsAuthed(!!session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setIsAuthed(!!session);
    });
    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const navItems = isAuthed
    ? baseNavItems.filter((n) => n.label !== "Home" && n.label !== "About")
    : baseNavItems;

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(isAuthed ? "/dashboard" : "/");
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">Booklings</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors font-medium",
                  location.pathname === item.href && "text-primary font-semibold"
                )}
              >
                {item.label}
              </Link>
            ))}

            {isAuthed ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="ml-4">Dashboard</Button>
                </Link>
                <Button className="hero-button" size="sm" onClick={handleSignOut}>Sign Out</Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="ml-4">Login</Button>
                </Link>
                <Link to="/auth">
                  <Button className="hero-button" size="sm">Join Now</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-foreground/80 hover:text-foreground transition-colors font-medium px-2 py-1",
                    location.pathname === item.href && "text-primary font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                {isAuthed ? (
                  <>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm">Dashboard</Button>
                    </Link>
                    <Button className="hero-button" size="sm" onClick={handleSignOut}>Sign Out</Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm">Login</Button>
                    </Link>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button className="hero-button" size="sm">Join Now</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}