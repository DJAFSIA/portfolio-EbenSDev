"use client";

import { useEffect, useState } from "react";

export default function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const titles: Record<string, string> = {
              "apropos": "À propos",
              "experience": "Expérience",
              "projets": "Projets",
              "contact": "Contact",
            };
            
            if (id && titles[id]) {
              setCurrentSection(titles[id]);
              setIsVisible(true);
              
              // Masquer après 2 secondes
              setTimeout(() => setIsVisible(false), 2000);
            }
          }
        });
      },
      {
        threshold: 0.3, // Déclencher quand 30% de la section est visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-[15vw] md:text-[12vw] font-bold text-foreground/5 dark:text-foreground/3 select-none whitespace-nowrap">
        {currentSection}
      </h2>
    </div>
  );
}