"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ContactButton } from "./ContactButton";
import { motion } from "motion/react";

/**
 * ContactCTA Section
 * High-impact final call-to-action with social proof metrics
 */
export function ContactCTA() {
  return (
    <section className="py-24 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto glass rounded-3xl p-8 sm:p-20 text-center space-y-12 relative overflow-hidden group border border-white/10"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-accent/10 opacity-50 transition-opacity group-hover:opacity-70" />

        <div className="relative space-y-6">
          <h2 className="text-4xl sm:text-7xl font-bold tracking-tight">
            Prêt à lancer votre <br />
            <span className="text-gradient italic">prochain projet ?</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Qu'il s'agisse d'une application métier complexe ou d'une landing page haute performance,
            discutons de la manière dont je peux vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
          <ContactButton size="lg" showIcon className="rounded-xl px-10 h-14 text-lg glow-primary">
            Parlons-en
          </ContactButton>
          <Button size="lg" variant="outline" className="rounded-xl px-10 h-14 text-lg gap-3 border-white/10 hover:bg-white/5 transition-all" >
            <Mail className="w-6 h-6" /> Me contacter par email
          </Button>
        </div>

        <div className="relative pt-12 flex items-center justify-center gap-12 text-muted-foreground border-t border-white/5">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">12h</span>
            <span className="text-xs uppercase tracking-widest font-semibold mt-1">Temps de réponse</span>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white">100%</span>
            <span className="text-xs uppercase tracking-widest font-semibold mt-1">Satisfaction</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
