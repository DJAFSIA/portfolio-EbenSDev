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
  metadataBase: new URL('https://ebenezer-djafsia-souboura.vercel.app/'),
  title: {
    default: "Ebenezer Djafsia Souboura | Ingénieur Fullstack & IoT",
    template: "%s | Ebenezer Souboura",
  },
  description: "Portfolio de Ebenezer Djafsia Souboura. Ingénieur informatique, développeur Fullstack (Next.js, Nest.js, TypeScript), chercheur en IoT et systèmes embarqués. Publication IET Journal.",
  keywords: [
    "Ebenezer Souboura",
    "Ebenezer Djafsia Souboura",
    "développeur fullstack",
    "ingénieur IoT",
    "Next.js",
    "TypeScript",
    "ESP32",
    "BLE",
    "Cameroun",
    "Ngaoundéré",
    "VIFIC Group",
    "recherche IoT",
    "développeur web Cameroun",
    "ingénieur informatique",
    "FragCast",
  ],
  authors: [{ name: "Ebenezer Djafsia Souboura", url: "https://ebenezer-djafsia-souboura.vercel.app/" }],
  creator: "Ebenezer Djafsia Souboura",
  publisher: "Ebenezer Djafsia Souboura",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ebenezer-djafsia-souboura.vercel.app/",
    title: "Ebenezer Djafsia Souboura | Ingénieur Fullstack & IoT",
    description: "Du capteur IoT contraint à l'application web scalable. Portfolio, projets et publication scientifique.",
    siteName: "Ebenezer Souboura Portfolio",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Ebenezer Djafsia Souboura - Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://ebenezer-djafsia-souboura.vercel.app/",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
   google: "SQL_lIycvHCJIuXJqiM_otk4J3um7WLTSKxYxGOL6fY",
  },
  
  manifest: '/site.webmanifest',
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