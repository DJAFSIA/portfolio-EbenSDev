import { Radio, Globe, Shield, GraduationCap, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projets" className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Titre de la section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Études de Cas & Projets
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Une sélection de mes réalisations les plus marquantes, allant de la recherche fondamentale en IoT au déploiement d'applications web à fort trafic.
        </p>
      </div>

      {/* La Grille Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 🌟 CARTE 1 : FRAGCAST (Projet Phare - R&D) */}
        <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl border bg-gradient-to-br from-primary/5 to-transparent p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">R&D / Publication IET</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">FragCast : Framework OTA IoT</h3>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Conception d'un protocole de transfert de firmware par fragments via BLE Broadcast pour objets contraints. Résout les problèmes de scalabilité et de consommation énergétique pour les réseaux de capteurs.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">ESP32</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">BLE</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">C++</span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">IoT</span>
          </div>

          {/* Petite flèche en haut à droite */}
          <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* 💻 CARTE 2 : UNIVERSITÉ DE NGAOUNDÉRÉ */}
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-500">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fullstack</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Plateforme de Concours</h3>
            <p className="text-sm text-muted-foreground">
              Architecture découplée et scalable pour gérer des milliers d'inscriptions simultanées sans temps d'arrêt.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground">Next.js</span>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground">Nest.js</span>
          </div>
          <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />
        </div>

        {/* 🏢 CARTE 3 : VIFIC GROUP */}
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-md bg-green-500/10 text-green-500">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Web / Sécurité</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Site Corporate VIFIC</h3>
            <p className="text-sm text-muted-foreground">
              Digitalisation de l'image de marque avec sécurisation avancée des flux de données et formulaires.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground">Next.js</span>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground">API</span>
          </div>
          <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />
        </div>

        {/* 🏫 CARTE 4 : COMPLEXE LA VICTOIRE */}
        <div className="group relative overflow-hidden rounded-xl border bg-card p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-500">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Frontend</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Portail Éducatif</h3>
            <p className="text-sm text-muted-foreground">
              Site vitrine et portail d'information optimisé pour l'expérience utilisateur d'un établissement complexe.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground">Next.js</span>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground">UI/UX</span>
          </div>
          <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />
        </div>

      </div>
    </section>
  );
}