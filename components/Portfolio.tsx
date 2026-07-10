"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Monitor, AppWindow } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: 1,
    title: "project-management",
    category: "app",
    description: "Application de gestion de projet pour les équipes. Permet de suivre les tâches, les échéances et les progrès de l'équipe.",
    tech: ["Next.js", "postgresql", "Prisma", "tanstack query"],
    image: "/assets/project-management.png",
    link: "https://project-management-gs.vercel.app/",
  },

  {
    id: 2,
    title: "quickcart",
    category: "app",
    description: "Plateforme de e-commerce pour les entreprises. Permet de vendre des produits en ligne.",
    tech: ["Next.js", "postgresql", "Prisma", "tanstack query"],
    image: "/assets/quickcart.png",
    link: "https://quickcart.greatstack.in/",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-6xl font-bold italic">Mes Projets</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
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
        </motion.div>

        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="glass rounded-2xl overflow-hidden group"
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
