"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marc",
    role: "Entrepreneur",
    content: "Il a automatisé toute notre gestion de commandes avec une app sur-mesure. On gagne un temps fou chaque jour sur les tâches répétitives.",
  },
  {
    name: "Céline",
    role: "Responsable Marketing",
    content: "La landing page qu'il a créée convertit deux fois plus que l'ancienne. Le design est propre et les performances sont au rendez-vous.",
  },
  {
    name: "Jean-Philippe",
    role: "Fondateur SaaS",
    content: "Mon application web est ultra rapide et s'affiche parfaitement sur tous les supports. L'architecture est solide et facile à maintenir.",
  },
  {
    name: "Amélie",
    role: "Directrice d'agence",
    content: "L'outil interne avec IA qu'il a développé pour nous aide l'équipe à traiter les demandes clients beaucoup plus efficacement.",
  },
];

/**
 * Testimonials Section
 * Animation: Infinite marquee scrolling effect
 * Content: Success stories focused on business impact and problem solving
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 text-center space-y-4">
        <h2 className="text-3xl sm:text-5xl font-bold italic">Résultats concrets</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Je ne livre pas seulement du code, je résous des problématiques business.
        </p>
      </div>

      <div className="relative flex">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div 
              key={index} 
              className="w-[350px] sm:w-[450px] glass p-8 rounded-2xl space-y-4 shrink-0 whitespace-normal group hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
              <p className="text-lg leading-relaxed italic text-muted-foreground">
                "{t.content}"
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
