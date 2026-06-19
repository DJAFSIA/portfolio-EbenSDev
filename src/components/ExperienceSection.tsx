import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "Depuis 2026 · En cours",
      title: "Développeur FullStack, Formateur & Consultant IT",
      company: "VIFIC Group, Ngaoundéré, Cameroun",
      icon: Briefcase,
      color: "blue",
      description: [
        "Développement d'applications web modernes et solutions digitales complètes",
        "Développement backend/frontend avec Laravel, Django, PHP et JavaScript",
        "Formation en développement web/mobile et outils bureautiques",
        "Support IT et consulting en transformation digitale",
      ],
      tags: ["Next.js", "Laravel", "Django", "PHP", "JavaScript", "Formation"],
    },
    {
      period: "Jan 2026· En cours",
      title: "Moniteur",
      company: "Académie du Succès, Ngaoundéré",
      icon: GraduationCap,
      color: "green",
      description: [
        "Accompagnement des élèves de Première et Terminale dans leur préparation aux examens",
        "Renforcement des compétences en mathématiques, informatique et méthodologie de travail",
        "Suivi individualisé et soutien pédagogique personnalisé",
      ],
      tags: ["Pédagogie", "Mathématiques", "Informatique", "Mentorat"],
    },
    {
      period: "Mai. 2025 - Oct. 2025 ",
      title: "Stagiaire de Recherche en IoT et Systèmes Embarqués",
      company: "IMT Nord Europe, Lille, France",
      icon: Award,
      color: "purple",
      description: [
        "Conception d'un framework OTA scalable basé sur BLE Broadcast (FragCast)",
        "Développement de prototypes ESP32 pour objets connectés contraints",
        "Recherche sur la fragmentation et retransmission de firmware",
        "Travaux acceptés pour publication dans le IET Journal",
      ],
      tags: ["IoT", "BLE", "OTA", "ESP32", "Recherche", "C++"],
    },
    {
      period: "Février. 2023 - Mai. 2023 ",
      title: "Stagiaire en Développement Web et Mobile",
      company: "CDTIC Université de Ngaoundéré",
      icon: Code2,
      color: "orange",
      description: [
        "Développement d'une plateforme de gestion académique complète",
        "Conception et implémentation du backend avec Laravel",
        "Gestion de bases de données SQL et optimisation des requêtes",
        "Collaboration avec l'équipe pédagogique pour les besoins fonctionnels",
      ],
      tags: ["Laravel", "PHP", "MySQL", "Backend", "Gestion"],
    },
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  };

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      
      {/* Titre de la section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-primary font-mono text-2xl mr-2">02.</span>
          Parcours & Expériences
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Mon évolution professionnelle et académique, de la recherche en IoT au développement d'applications web à grande échelle.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        
        {/* Ligne verticale */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        {/* Liste des expériences */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative flex gap-6 md:gap-12 group">
                
                {/* Icône sur la timeline (desktop) */}
                <div className="hidden md:flex flex-col items-center">
                  <div className={`relative z-10 p-3 rounded-full border-2 ${colorClasses[exp.color as keyof typeof colorClasses]} bg-background group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Contenu de l'expérience */}
                <div className="flex-1 pb-8">
                  
                  {/* Période */}
                  <div className="text-sm font-mono text-muted-foreground mb-2">
                    {exp.period}
                  </div>

                  {/* Titre et entreprise */}
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-4 font-medium">
                    {exp.company}
                  </div>

                  {/* Description (liste à puces) */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags technologiques */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}