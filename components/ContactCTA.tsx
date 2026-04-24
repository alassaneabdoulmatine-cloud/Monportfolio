"use client";

import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

/**
 * ContactCTA Section
 * High-impact final call-to-action with social proof metrics
 */
export function ContactCTA() {
  return (
    <section className="py-12 px-4 sm:px-8 rounded-md">
      <div className="max-w-5xl mx-auto glass rounded-lg p-8 sm:p-16 text-center space-y-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-accent/10 opacity-50" />

        <div className="relative space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Prêt à lancer votre <br />
            <span className="text-gradient italic">prochain projet ?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Qu'il s'agisse d'une application métier complexe ou d'une landing page haute performance,
            discutons de la manière dont je peux vous aider.
          </p>
        </div>

        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-10 text-base gap-3 glow-primary transition-all hover:scale-105">
            <MessageSquare className="w-6 h-6" /> Parlons-en
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 h-10 text-base gap-3" >
            <Mail className="w-6 h-6" /> Me contacter par email
          </Button>
        </div>

        <div className="relative pt-8 flex items-center justify-center gap-8 text-muted-foreground border-t border-white/5">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">12h</span>
            <span className="text-xs uppercase tracking-widest">Temps de réponse</span>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-xs uppercase tracking-widest">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
