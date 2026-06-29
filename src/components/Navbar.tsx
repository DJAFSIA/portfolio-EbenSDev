"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/app/MobileMenu"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Initiales */}
        <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors font-mono">
          &lt;SDEv /&gt;
        </Link>

        {/* Liens de navigation desktop (cachés sur mobile) */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          <li>
            <Link href="#apropos" className="hover:text-primary transition-colors">
              <span className="text-primary mr-1">01.</span>À propos
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-primary transition-colors">
              <span className="text-primary mr-1">02.</span>Expérience
            </Link>
          </li>
          <li>
            <Link href="#projets" className="hover:text-primary transition-colors">
              <span className="text-primary mr-1">03.</span>Projets
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-primary transition-colors">
              <span className="text-primary mr-1">04.</span>Contact
            </Link>
          </li>
        </ul>

        {/* Groupe droite : Bouton CV + Menu mobile */}
        <div className="flex items-center gap-4">
          {/* Bouton CV desktop */}
          <Button 
            asChild 
            size="sm" 
            variant="outline" 
            className="hidden md:flex font-mono border-primary text-primary hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
          >
            <a href="mailto:ebenezerdjafsiasb@gmail.com?subject=Demande de CV">
              Demander mon CV
            </a>
          </Button>

          {/* Menu mobile hamburger */}
          <MobileMenu />
        </div>

      </nav>
    </header>
  );
}