import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";


export const metadata: Metadata = {
  title: "Développeur Full-Stack Next.js & Solutions IA | Portfolio Premium",
  description: "Développeur spécialisé en Next.js, React, Supabase et Prisma. Création d'applications web scalables, landing pages performantes et intégration d'IA sur mesure.",
  keywords: ["Développeur Full-Stack", "Next.js", "React", "Supabase", "Prisma", "Solutions IA", "Portfolio"],
  openGraph: {
    title: "Développement Web & Solutions IA",
    description: "Transformez vos idées en solutions numériques d'exception.",
    type: "website",
  },
};

/**
 * Home Page
 * Structure: Modular components representing sections of the portfolio
 * SEO: Custom metadata for search engines and social sharing
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      {/* Navigation and Main Sections */}
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Stack />
      <About />
      <Testimonials />
      <ContactCTA />


      {/* Footer simple */}
      <footer className="py-12 px-4 sm:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} AbdoulDev. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/abdou-matinou-alassane-267516400/" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/alassaneabdoulmatine-cloud" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.facebook.com/abdoul.matine.346727/" className="hover:text-primary transition-colors">facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

