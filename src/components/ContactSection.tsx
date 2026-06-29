import { Mail, MapPin, FileText, ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      
      {/* Titre de la section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-primary font-mono text-2xl mr-2">04.</span>
          Prenons contact
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
          Que ce soit pour discuter d'un projet IoT innovant, architecturer une application web complexe, 
          ou échanger sur la recherche en systèmes distribués, je serais ravi d'échanger avec vous.
        </p>
      </div>

      {/* Grille de contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Carte Email */}
        <a 
          href="mailto:ebenezerdjafsiasb@gmail.com" 
          className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
        >
          <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
            <p className="text-sm text-muted-foreground">ebenezerdjafsiasb@gmail.com</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
        </a>

        {/* Carte Localisation */}
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Localisation</h3>
            <p className="text-sm text-muted-foreground">Ngaoundéré, Cameroun</p>
            <p className="text-xs text-muted-foreground mt-1">Disponible pour le remote international</p>
          </div>
        </div>

        {/* Carte GitHub */}
        <a 
          href="https://github.com/DJAFSIA" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
        >
          <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 flex-shrink-0">
            <FaGithub className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">GitHub</h3>
            <p className="text-sm text-muted-foreground">@DJAFSIA</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
        </a>

        {/* Carte LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/ebenezer-djafsia-souboura" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:border-primary/50 transition-all duration-300 flex items-start gap-4"
        >
          <div className="p-3 rounded-lg bg-blue-600/10 text-blue-600 flex-shrink-0">
            <FaLinkedin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Ebenezer Djafsia Souboura</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
        </a>

      </div>

      
       {/* CTA Principal : M'envoyer un email (centré) */}
      <div className="text-center py-12 rounded-xl border bg-card">
        <h3 className="text-2xl font-bold mb-4">Travaillons ensemble</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Vous avez un projet en tête ou souhaitez échanger sur mes compétences ? N'hésitez pas à me contacter directement.
        </p>
        <Button asChild size="lg" className="text-base px-8">
          <a href="mailto:ebenezerdjafsiasb@gmail.com">
            <Send className="w-4 h-4 mr-2" />
            M'envoyer un email
          </a>
        </Button>
      </div>

    </section>
  );
}