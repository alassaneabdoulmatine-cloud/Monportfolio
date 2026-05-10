"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-6xl font-bold italic">À propos de moi</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Passionné par la résolution de problèmes complexes, j'accompagne les entreprises dans leur transformation numérique.
              Mon approche combine rigueur technique et vision produit pour délivrer des solutions qui ont un réel impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={h}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{h}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="p-6 glass rounded-2xl space-y-4 border-l-4 border-l-primary"
          >
            <p className="italic text-lg text-muted-foreground">
              "Je ne me contente pas de coder des fonctionnalités, je bâtis des outils robustes qui soutiennent la croissance de votre business."
            </p>
            <p className="font-bold text-white">— Votre Développeur Partenaire</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 relative w-full max-w-[30rem] mx-auto lg:mx-0"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden glass p-4 aspect-[4/5]">
            <Image
              src="/assets/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          {/* Decorative background for the image */}
          <div className="absolute sm:-inset-8 -inset-4 bg-linear-to-tr from-primary/30 to-accent/30 blur-3xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
