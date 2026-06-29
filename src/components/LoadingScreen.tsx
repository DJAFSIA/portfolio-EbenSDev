"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      {/* Container principal */}
      <div className="flex flex-col items-center space-y-8">
        
        {/* Logo SDEv animé */}
        <div className="relative">
          {/* Halo lumineux */}
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse" />
          
          {/* Logo text */}
          <div className="relative text-6xl md:text-8xl font-bold font-mono">
            <span className="text-primary animate-pulse">SDEv</span>
          </div>

          {/* Cercle animé autour */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" 
               style={{ animation: 'spin 3s linear infinite', width: '200px', height: '200px', top: '-50px', left: '-50px' }} />
        </div>

        {/* Texte de chargement */}
        <div className="text-center space-y-2">
          <p className="text-lg text-muted-foreground font-mono">
            Ebenezer Souboura
          </p>
          <p className="text-sm text-muted-foreground/70">
            Ingénieur Fullstack & IoT
          </p>
        </div>

        {/* Barre de chargement */}
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-loading" 
               style={{ 
                 width: '100%',
                 animation: 'loading 0.5s ease-in-out'
               }} 
          />
        </div>

      </div>

      {/* CSS pour les animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}