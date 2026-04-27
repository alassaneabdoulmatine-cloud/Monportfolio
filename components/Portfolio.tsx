"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Monitor, AppWindow } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Nexus CRM",
    category: "app",
    description: "CRM de gestion de contact pour PME avec tableaux de bord analytiques en temps réel.",
    tech: ["Next.js", "Supabase", "Prisma", "tanstack query"],
    image: "/assets/nexuscrm.png",
    link: "https://crm-gestion-de-contact.vercel.app",
  },

  {
    id: 2,
    title: "enord",
    category: "website",
    description: "Site web d'une agence vidéo qui répond à vos enjeux business.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/enord.png",
    link: "https://enord.fr",
  },
  {
    id: 3,
    title: "lawlyfy",
    category: "website",
    description: "Site vitrine dynamique pour une plateforme Des agents IA spécialisés, formés au droit kényan, pour vous aider dans vos démarches. Appréciés par plus de 500 avocats et cabinets juridiques utilisant nativement l’IA.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    image: "/assets/lawlyfy.png",
    link: "https://lawlyfy.ai",
  },
  {
    id: 4,
    title: "Mon Portfolio",
    category: "website",
    description: "Portfolio personnel de presentation de mes services et mes projets. ",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/assets/portfolio.png",
    link: "https://monportfolio-ruddy.vercel.app",
  }
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
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass rounded-2xl overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-full px-6 bg-primary hover:bg-primary/90 transition-all scale-90 group-hover:scale-100 duration-300 cursor-pointer">
                      Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
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
