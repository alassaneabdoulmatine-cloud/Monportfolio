"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Monitor, AppWindow } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "EcoTrack SaaS",
    category: "app",
    description: "Plateforme de suivi d'empreinte carbone pour PME avec tableaux de bord analytiques en temps réel.",
    tech: ["Next.js", "Supabase", "Prisma"],
    image: "/api/placeholder/600/400",
  },
  {
    title: "Nova AI Agent",
    category: "app",
    description: "Assistant virtuel intelligent capable de gérer le support client via des pipelines RAG personnalisés.",
    tech: ["OpenAI", "Next.js", "PostgreSQL"],
    image: "/api/placeholder/600/400",
  },
  {
    title: "Zenith Real Estate",
    category: "website",
    description: "Landing page haute conversion pour un promoteur immobilier de luxe, optimisée pour le SEO.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/api/placeholder/600/400",
  },
  {
    title: "Fintech Pro",
    category: "app",
    description: "Application de gestion de finances personnelles avec synchronisation bancaire sécurisée.",
    tech: ["Next.js", "Supabase", "Auth.js"],
    image: "/api/placeholder/600/400",
  },
  {
    title: "Creatix Agency",
    category: "website",
    description: "Site vitrine dynamique pour une agence de design, avec des animations fluides et un score PageSpeed de 100.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    image: "/api/placeholder/600/400",
  },
];

/**
 * Portfolio Component
 * Logic: Filtering projects by category (Apps vs Websites)
 * Features: Dynamic grid layout, category filtering buttons, hover overlay effects
 */
export function Portfolio() {
  const [filter, setFilter] = useState<"all" | "app" | "website">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold italic">Mes Projets</h2>
            <p className="text-muted-foreground max-w-xl">
              Une sélection de mes travaux récents, allant d'applications complexes à des sites web performants.
            </p>
          </div>

          <div className="flex gap-2 p-1 glass rounded-xl w-fit">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilter("all")}
              className={`rounded-lg cursor-pointer ${filter === "all" ? "bg-primary text-primary-foreground" : ""}`}
            >
              Tous
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilter("app")}
              className={`rounded-lg gap-2 cursor-pointer ${filter === "app" ? "bg-primary text-primary-foreground" : ""}`}
            >
              <AppWindow className="w-4 h-4" /> Applications
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilter("website")}
              className={`rounded-lg gap-2 cursor-pointer ${filter === "website" ? "bg-primary text-primary-foreground" : ""}`}
            >
              <Monitor className="w-4 h-4" /> Websites
            </Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full bg-white/10 border-white/20 hover:bg-primary transition-colors">
                    <Code className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
