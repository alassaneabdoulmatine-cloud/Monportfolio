"use client";

import { CheckCircle2 } from "lucide-react";

/**
 * About Section
 * Structure: Personal bio, highlights list, and a featured quote
 */
export function About() {
  const highlights = [
    "Maîtrise de Next.js & React",
    "Maîtrise de l'écosystème Supabase & Prisma",
    "Conception d'architectures scalables",
    "Intégration poussée d'Intelligence Artificielle",
    "Optimisation SEO & Performance (Core Web Vitals)",
    "Engagement pour un code propre et maintenable",
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-black/20 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full max-w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold italic">À propos de moi</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par la résolution de problèmes complexes, j'accompagne les entreprises dans leur transformation numérique.
              Mon approche combine rigueur technique et vision produit pour délivrer des solutions qui ont un réel impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{h}</span>
              </div>
            ))}
          </div>

          <div className="p-6 glass rounded-xl space-y-4 border-l-4 border-l-primary">
            <p className="italic text-muted-foreground">
              "Je ne me contente pas de coder des fonctionnalités, je bâtis des outils robustes qui soutiennent la croissance de votre business."
            </p>
            <p className="font-bold">— Votre Développeur Partenaire</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative w-full max-w-[30rem] mx-auto lg:mx-0">
          <div className="relative z-10 rounded-2xl overflow-hidden glass p-4 aspect-[4/5]">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Decorative background for the image */}
          <div className="absolute sm:-inset-4 -inset-2 bg-linear-to-tr from-primary/20 to-accent/20 blur-2xl -z-10 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
