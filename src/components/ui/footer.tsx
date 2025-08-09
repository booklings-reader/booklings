import { Link } from "react-router-dom";
import { BookOpen, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">Booklings</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your premium reading companion. Track books, take notes, and connect with fellow readers.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <div className="space-y-2 text-sm">
              <Link to="/personal" className="block hover:text-accent transition-colors">
                Reading Timer
              </Link>
              <Link to="/personal/library" className="block hover:text-accent transition-colors">
                Library
              </Link>
              <Link to="/personal/notes" className="block hover:text-accent transition-colors">
                Note-taking
              </Link>
              <Link to="/ai-chat" className="block hover:text-accent transition-colors">
                AI Chat
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Community</h3>
            <div className="space-y-2 text-sm">
              <Link to="/community" className="block hover:text-accent transition-colors">
                Connect
              </Link>
              <Link to="/community/reflections" className="block hover:text-accent transition-colors">
                Reflections
              </Link>
              <Link to="/community/profile" className="block hover:text-accent transition-colors">
                Profile
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="#" className="block hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="block hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 Booklings. All rights reserved. Read. Reflect. Connect.</p>
        </div>
      </div>
    </footer>
  );
}