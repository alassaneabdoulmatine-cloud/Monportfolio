"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactButton } from "./ContactButton";
import { motion } from "motion/react";

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

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-muted-foreground text-xs font-medium tracking-wide"
        >
          <span>Applications métiers</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>SaaS</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>Automation</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span>IA</span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
            Crée des applications métier et SaaS <br />
            <span className="text-gradient italic">sur-mesure pour les PME et les startups</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-md max-sm:text-xs sm:text-md text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Spécialisé en <span className="text-white font-medium">Next.js</span> et <span className="text-white font-medium">IA</span>,
            j'aide les entreprises à gagner du temps. Automatisez vos processus et réduisez vos coûts avec des outils métiers performants.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactButton size="lg" showIcon className="rounded-xl px-8 h-12 text-base glow-primary">
              Discuter de votre projet
            </ContactButton>
            <Button size="lg" variant="outline" className="rounded-xl px-8 h-12 text-base border-white/10 hover:bg-white/5 transition-all group">
              <a href="#services" className="flex flex-row justify-center items-center gap-4">
                En savoir plus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>

      </div>

      {/* Mockup - Animated first as requested */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="max-w-6xl mx-auto mt-12 relative"
      >
        <div className="glass rounded-3xl p-2 sm:p-4 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent opacity-20" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto rounded-2xl shadow-inner border border-white/5 object-cover relative z-10"
          >
            <source src="/assets/video_portfolio.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
      </motion.div>
    </section>
  );
}
