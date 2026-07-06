import { Code2, Cpu, Database, Globe, Radio, Server } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Titre de la section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="text-primary font-mono text-2xl mr-2">01.</span>
          À propos de moi
        </h2>
      </div>

      {/* Grille en deux colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Colonne gauche : Le storytelling */}
        <div className="space-y-6">
            {/* Photo de profil */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 blur-xl" />

<Image
  src="/images/profil.png"
  alt="Ebenezer Souboura"
  width={400}
  height={400}
  className="relative w-full h-full object-cover rounded-2xl border-2 border-border shadow-lg"
  priority={true}
/>
    </div>
  {/* Texte */}
  <div className="space-y-6 text-muted-foreground leading-relaxed">
    <p>
      Bonjour ! Je suis <span className="text-foreground font-semibold">Ebenezer</span>, ingénieur informatique passionné par la conception de systèmes qui font le pont entre le monde physique et le numérique.
    </p>
          
          <p>
            Mon parcours m'a amené à explorer deux domaines qui semblent opposés mais qui sont profondément complémentaires : les <span className="text-foreground">systèmes embarqués contraints</span> et le <span className="text-foreground">développement web moderne</span>. Cette double compétence me permet de concevoir des architectures complètes, du capteur IoT jusqu'à l'application cloud.
          </p>

          <p>
            Pendant mon Master en Systèmes Logiciels Distribués et IoT, j'ai développé <span className="text-foreground font-semibold">FragCast</span>, un framework de mise à jour OTA scalable via BLE pour objets connectés à ressources limitées. Ces travaux ont été acceptés pour publication dans le prestigieux <span className="text-foreground">IET Journal</span>.
          </p>

          <p>
            Aujourd'hui, en tant que Partner et Développeur Fullstack chez <span className="text-foreground font-semibold">VIFIC Group</span>, je mets cette expertise au service de projets concrets : plateformes d'inscription à fort trafic, sites corporate sécurisés, et architectures web performantes.
          </p>

          <p>
            Ce qui me motive ? Résoudre des problèmes complexes avec élégance, qu'il s'agisse d'optimiser un protocole BLE ou d'architecturer une application  scalable.
          </p>
        </div>
        </div>
        

        {/* Colonne droite : Les compétences techniques */}
        <div className="space-y-6">
          
          {/* Carte : IoT & Systèmes Embarqués */}
          <div className="rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">IoT & Embarqué</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">ESP32</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Arduino</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">BLE</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">OTA</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">C/C++</span>
            </div>
          </div>

          {/* Carte : Développement Web */}
          <div className="rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Web Fullstack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Next.js</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Nest.js</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">TypeScript</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Laravel</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Django</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">React</span>
            </div>
          </div>

          {/* Carte : Bases de données */}
          <div className="rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Bases de données</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">PostgreSQL</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">MySQL</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Firebase</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">SQLite</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">MongoDB</span>
            </div>
          </div>

          {/* Carte : Recherche & Méthodologie */}
          <div className="rounded-xl border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold">Recherche & Architecture</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Systèmes distribués</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Protocoles IoT</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Rédaction scientifique</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">Architecture logicielle</span>
            </div>
          </div>

        </div>
      </div>

      {/* Stats rapides (optionnel, en bas) */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 rounded-xl border bg-card">
          <div className="text-3xl font-bold text-primary mb-1">1</div>
          <div className="text-sm text-muted-foreground">Publication IET</div>
        </div>
        <div className="text-center p-6 rounded-xl border bg-card">
          <div className="text-3xl font-bold text-primary mb-1">5+</div>
          <div className="text-sm text-muted-foreground">Projets Fullstack</div>
        </div>
        <div className="text-center p-6 rounded-xl border bg-card">
          <div className="text-3xl font-bold text-primary mb-1">5</div>
          <div className="text-sm text-muted-foreground">Années d'expérience</div>
        </div>
        <div className="text-center p-6 rounded-xl border bg-card">
          <div className="text-3xl font-bold text-primary mb-1">∞</div>
          <div className="text-sm text-muted-foreground">Curiosité technique</div>
        </div>
      </div>

    </section>
  );
}