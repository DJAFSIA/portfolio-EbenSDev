"use client";
import Image from "next/image";
import { Radio, ExternalLink, Music, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Curseurs personnalisés
const cursorMicrocontroller = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%2310b981' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='4' width='16' height='16' rx='2' ry='2'></rect><rect x='9' y='9' width='6' height='6'></rect><line x1='9' y1='1' x2='9' y2='4'></line><line x1='15' y1='1' x2='15' y2='4'></line><line x1='9' y1='20' x2='9' y2='23'></line><line x1='15' y1='20' x2='15' y2='23'></line><line x1='20' y1='9' x2='23' y2='9'></line><line x1='20' y1='14' x2='23' y2='14'></line><line x1='1' y1='9' x2='4' y2='9'></line><line x1='1' y1='14' x2='4' y2='14'></line></svg>"), auto`;

const cursorCode = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg>"), auto`;

// Liste des projets
const projects = [
  {
    title: "FragCast : Framework OTA IoT",
    image: "/images/projects/fragcast.png",
    imageAlt: "FragCast IoT Framework",
    cursor: cursorMicrocontroller,
    mainLink: "https://doi.org/10.1049/wss2.70031",
    badge: { text: "Publication IET Journal", color: "primary" },
    statusBadge: { text: "Publié", color: "green", icon: Star },
    description:
      "Conception d'un protocole de transfert de firmware par fragments via BLE Broadcast pour objets contraints. Ces travaux ont été publiés dans le prestigieux IET Journal et résolvent les problèmes de scalabilité et de consommation énergétique pour les réseaux de capteurs IoT.",
    subtitle:
      '"FragCast: A Scalable BLE-based OTA Framework for Constrained IoT Devices"',
    tags: ["ESP32", "BLE", "C++", "IoT", "OTA"],
    links: [
      {
        label: "Voir la publication",
        href: "https://doi.org/10.1049/wss2.70031",
        type: "external",
      },
    ],
  },
  {
    title: "Plateforme de Concours Universitaire",
    image: "/images/projects/universite-ngaoundere.png",
    imageAlt: "Plateforme Université Ngaoundéré",
    cursor: cursorCode,
    mainLink: "https://inscription-concours-fac-science-un-kappa.vercel.app/",
    badge: { text: "Fullstack", color: "blue" },
    statusBadge: { text: "En ligne", color: "green", icon: Star },
    description:
      "Architecture découplée et scalable pour gérer des milliers d'inscriptions simultanées aux concours universitaires sans temps d'arrêt. Backend robuste avec Nest.js et frontend moderne avec Next.js.",
    tags: ["Next.js", "Nest.js", "TypeScript", "PostgreSQL"],
    links: [
      {
        label: "Voir le site",
        href: "https://inscription-concours-fac-science-un-kappa.vercel.app/",
        type: "external",
      },
    ],
  },
  {
    title: "Site Corporate VIFIC Group",
    image: "/images/projects/vific-group.png",
    imageAlt: "Site VIFIC Group",
    cursor: cursorCode,
    mainLink: "https://www.vific-group.com/",
    badge: { text: "Web / Sécurité", color: "green" },
    description:
      "Digitalisation de l'image de marque de VIFIC Group avec sécurisation avancée des flux de données et des formulaires. Site vitrine moderne, performant et optimisé pour le SEO.",
    tags: ["Next.js", "API", "SEO", "Sécurité"],
    links: [
      { label: "Visiter le site", href: "https://www.vific-group.com/", type: "external" },
    ],
  },
  {
    title: "Application Cantiques MASSA",
    image: "/images/projects/cantiques-massa.png",
    imageAlt: "Application Cantiques MASSA",
    cursor: cursorCode,
    mainLink: "https://github.com/DJAFSIA/cantiques-massa",
    badge: { text: "Mobile / Flutter", color: "orange", icon: Music },
    description:
      "Application mobile Flutter dédiée aux cantiques en langue MASSA. Interface intuitive et gestion d'une bibliothèque musicale complète pour la communauté MASSA.",
    tags: ["Flutter", "Dart", "Mobile", "Audio"],
    links: [
      {
        label: "Code source",
        href: "https://github.com/DJAFSIA/cantiques-massa",
        type: "github",
      },
    ],
  },
];

// Composant réutilisable pour chaque projet
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const BadgeIcon = project.statusBadge?.icon;

  const colorClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  };

  const shadowColor: Record<string, string> = {
    primary: "bg-primary/20",
    blue: "bg-blue-500/20",
    green: "bg-green-500/20",
    orange: "bg-orange-500/20",
  };

  return (
    <div
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-center cursor-pointer"
      style={{ cursor: project.cursor }}
      onClick={() => window.open(project.mainLink, "_blank")}
    >
      {/* Colonne gauche : Image */}
      <div className="md:col-span-5 relative">
        {/* Ombre colorée décalée */}
        <div
          className={`absolute inset-0 rounded-lg transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 ${
            shadowColor[project.badge.color]
          }`}
        />
        {/* Image */}
        <div className="relative rounded-lg overflow-hidden border border-border bg-card">
          <Image
  src={project.image}
  alt={project.imageAlt}
  width={1200}
  height={675}
  className="w-full h-full object-cover aspect-video transition-transform duration-500 group-hover:scale-[1.02]"
  priority={false}
/>
          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>
      </div>

      {/* Colonne droite : Texte */}
      {/* Colonne droite : Texte */}
      <div className="md:col-span-7 space-y-4 pointer-events-none">
        {/* Badge principal */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold font-mono ${
            colorClasses[project.badge.color]
          }`}
        >
          {project.badge.icon && <project.badge.icon className="w-3 h-3 inline mr-1" />}
          {project.badge.text}
        </span>

        {/* Titre */}
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description - Sans bordure, juste fond transparent */}
        <div className="text-muted-foreground leading-relaxed text-sm">
          <p>{project.description}</p>
          {project.subtitle && (
            <p className="mt-3 text-xs font-mono text-foreground/60 italic">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground/80">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        {/* Liens + Badge statut */}
        <div className="flex items-center gap-4 flex-wrap">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {link.type === "github" ? (
                <FaGithub className="w-4 h-4" />
              ) : (
                <ExternalLink className="w-4 h-4" />
              )}
              {link.label}
            </a>
          ))}

          {project.statusBadge && (
            <span
              className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                colorClasses[project.statusBadge.color]
              }`}
            >
              {BadgeIcon && <BadgeIcon className="w-3 h-3" fill="currentColor" />}
              {project.statusBadge.text}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projets" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Titre de la section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          <span className="text-primary font-mono text-2xl mr-2">03.</span>
          Quelques Projets Réalisés
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Une sélection de mes réalisations les plus marquantes, allant de la recherche fondamentale en IoT au déploiement d'applications web et mobile.
        </p>
      </div>

      {/* Liste des projets */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}