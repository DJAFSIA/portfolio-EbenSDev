import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]">  
      
      {/* --- HERO SECTION (Ton code précédent) --- */}
      <section className="flex flex-col items-center justify-center px-6 py-20 md:py-32">
        <div className="mb-8 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground font-medium shadow-sm">
          🟢 Disponible pour de nouvelles opportunités
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl tracking-tight leading-tight">
          Du capteur IoT contraint à l'application web scalable.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-center text-muted-foreground max-w-2xl leading-relaxed">
          Ingénieur informatique et chercheur, je conçois des architectures robustes qui font le pont entre le monde physique et le numérique. 
          <br className="hidden md:block" />
          Actuellement Partner & Fullstack Dev chez <span className="text-foreground font-semibold">VIFIC Group</span>.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-base px-8">
            <Link href="#projets">Voir mes projets</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <Link href="#contact">Me contacter</Link>
          </Button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground/70 font-mono">
          <span>Next.js</span><span>•</span><span>TypeScript</span><span>•</span>
          <span>Nest.js</span><span>•</span><span>ESP32 / BLE</span><span>•</span><span>Tailwind CSS</span>
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