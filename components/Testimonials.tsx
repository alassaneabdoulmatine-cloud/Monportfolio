"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

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
 * Animation: Infinite marquee scrolling effect + Scroll entrance
 */
export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-black/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 mb-20 text-center space-y-4"
      >
        <h2 className="text-3xl sm:text-6xl font-bold italic">Résultats concrets</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Je ne livre pas seulement du code, je résous des problématiques business.
        </p>
      </motion.div>

      <div className="relative flex">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="w-[350px] sm:w-[450px] glass p-8 rounded-3xl space-y-6 shrink-0 whitespace-normal group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/40 group-hover:text-primary transition-colors" />
              <p className="text-xl leading-relaxed italic text-muted-foreground">
                "{t.content}"
              </p>
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{t.name}</p>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
