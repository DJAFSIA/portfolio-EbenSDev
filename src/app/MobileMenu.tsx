"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton hamburger (visible uniquement sur mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu overlay plein écran */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden animate-in fade-in duration-200">
    <div className="flex flex-col items-center justify-center h-full space-y-8">
            
            {/* Liens de navigation */}
            <nav className="flex flex-col items-center space-y-6">
              <Link
                href="#apropos"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">01.</span>À propos
              </Link>
              <Link
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">02.</span>Expérience
              </Link>
              <Link
                href="#projets"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">03.</span>Projets
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary mr-2">04.</span>Contact
              </Link>
            </nav>

            {/* Bouton CV */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-mono border-primary text-primary hover:bg-primary/10"
            >
              <a
                href="mailto:ebenezer.souboura@email.com?subject=Demande de CV"
                onClick={() => setIsOpen(false)}
              >
                CV.pdf
              </a>
            </Button>

          </div>
        </div>
      )}
    </>
  );
}