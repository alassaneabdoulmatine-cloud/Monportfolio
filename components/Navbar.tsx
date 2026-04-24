"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Navbar Component
 * Features: Fixed positioning, Glassmorphism design, Responsive mobile menu
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 sm:px-8">
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Terminal className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">AbdoulDev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projets</Link>
          <Link href="#about" className="hover:text-primary transition-colors">À propos</Link>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Me contacter
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          <Link href="#services" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#projects" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>Projets</Link>
          <Link href="#about" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>À propos</Link>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl mt-2">
            Me contacter
          </Button>
        </div>
      )}
    </nav>
  );
}
