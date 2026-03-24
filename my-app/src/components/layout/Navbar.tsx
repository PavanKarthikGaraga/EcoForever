"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart, Search, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartSheet } from "@/components/cart/CartSheet";
import { useAuthStore } from "@/store/useAuthStore";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Check session on mount
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-semibold text-primary-accent hover:text-primary-accent transition-colors shrink-0"
          >
            EcoForever
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 bg-white/50 focus:bg-white transition-colors border-primary-accent/20 focus:border-primary-accent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* Profile/auth/login Button */}
            {isAuthenticated ? (
              <Button variant="ghost" asChild className="hover:bg-primary">
                <Link href="/profile">
                  <User className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
              </Button>
            ) : (
              <Button variant="ghost" asChild className="hover:bg-primary">
                <Link href="/auth/login">
                  <LogIn className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Sign In</span>
                </Link>
              </Button>
            )}

            {/* Cart Drawer */}
            <CartSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
