import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo et copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors font-mono">
              &lt;SDEv /&gt;
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Ebenezer Djafsia Souboura. Tous droits réservés.
            </p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/DJAFSIA" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ebenezer-djafsia-souboura" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ebenezerdjafsiasb@gmail.com" 
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Petit texte en bas */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}