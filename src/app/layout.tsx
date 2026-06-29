import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";
import SectionIndicator from "@/components/SectionIndicator";
import LoadingScreen from "@/components/LoadingScreen"; 
import Footer from "@/components/Footer";

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
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <LoadingScreen /> {/* 👈 Ajout du loading screen */}
        <Navbar />
        <MouseGlow />
        <SectionIndicator />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}