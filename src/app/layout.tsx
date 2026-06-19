import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 👈 Import de la Navbar

// Polices : Inter pour le texte, JetBrains Mono pour le côté "Tech"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ebenezer Souboura | Ingénieur Fullstack & IoT",
  description: "Portfolio de Ebenezer Djafsia Souboura. Développeur Fullstack, Ingénieur IoT et Chercheur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark"> {/* On force le mode sombre par défaut, très "Brittany" */}
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        
        {/* La Navbar est ici, elle sera sur toutes les pages */}
        <Navbar />
        
        {/* Le contenu de tes pages (page.tsx) s'insère ici */}
        <main className="pt-20"> {/* pt-20 pour éviter que le contenu ne soit caché sous la navbar fixe */}
          {children}
        </main>

      </body>
    </html>
  );
}