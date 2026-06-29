import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">  
      
     {/* Hero Section avec background image floutée */}
<section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
  
  {/* Background image floutée */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url('/images/hero-image.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'blur("10px)',
      transform: 'scale(1.1)',
    }}
  />
  
  {/* Overlay sombre pour lisibilité */}
  <div className="absolute inset-0 z-10 bg-background/80 dark:bg-background/90 backdrop-blur-sm" />

  {/* Contenu par-dessus */}
  <div className="relative z-20 max-w-6xl mx-auto w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Colonne gauche : Texte */}
      <div className="space-y-8">
        {/* Badge */}
        <div className="inline-flex px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground font-medium shadow-sm">
          🟢 Disponible pour de nouvelles opportunités
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Du capteur IoT contraint à l'application web scalable.
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Ingénieur informatique et chercheur, je conçois des architectures robustes qui font le pont entre le monde physique et le numérique.
          <br className="hidden md:block" />
          Actuellement Partner & Fullstack Dev chez <span className="text-foreground font-semibold">VIFIC Group</span>.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-base px-8">
            <Link href="#projets">Voir mes projets</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <Link href="#contact">Me contacter</Link>
          </Button>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground/70 font-mono">
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
          <span>•</span>
          <span>Nest.js</span>
          <span>•</span>
          <span>ESP32 / BLE</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>
      </div>

      {/* Colonne droite : Espace vide */}
      <div className="hidden lg:block" />

    </div>
  </div>
</section>
       <AboutSection />
       <ExperienceSection />

      {/* --- NOUVELLE SECTION PROJETS --- */}
      <ProjectsSection />
      <ContactSection />

    </main>
  );
}