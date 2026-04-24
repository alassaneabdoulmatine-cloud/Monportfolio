"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

/**
 * Hero Section
 * Structure: Centered layout inspired by modern SaaS landing pages
 * Components: Badge, Title, Subtitle, CTAs, and a Dashboard Mockup
 */
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-8 overflow-hidden text-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-muted-foreground text-xs font-medium tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span>Applications métiers</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>SaaS</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Automation</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>IA</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
          Crée des applications métier et SaaS <br />
          <span className="text-gradient italic">sur-mesure pour les PME et les startups</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Spécialisé en <span className="text-white font-medium">Next.js</span> et <span className="text-white font-medium">IA</span>,
          j'aide les entreprises à gagner du temps. Automatisez vos processus et réduisez vos coûts avec des outils métiers performants.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 h-12 text-base gap-3 glow-primary transition-all hover:scale-105">
            <MessageSquare className="w-5 h-5" /> Discuter de votre projet
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base border-white/10 hover:bg-white/5 transition-all group">
            En savoir plus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mockup */}
        <div className="relative pt-12 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="glass rounded-2xl p-2 sm:p-4 border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent opacity-20 rounded-2xl" />
            <img
              src="/hero-dashboard.png"
              alt="Dashboard Mockup"
              className="w-full h-auto rounded-xl shadow-inner border border-white/5"
            />
          </div>

          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
