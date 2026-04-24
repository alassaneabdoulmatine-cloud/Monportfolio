"use client";

import { Layout, Smartphone, Globe, Bot, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Applications Web & SaaS",
    description: "Conception de plateformes complexes et scalables utilisant Next.js et des architectures serverless.",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Intégration d'IA",
    description: "Automatisation et intelligence métier via l'intégration d'OpenAI, Anthropic ou LLMs locaux.",
    icon: Bot,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Landing Pages & SEO",
    description: "Pages de capture ultra-rapides optimisées pour la conversion et le référencement naturel.",
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Systèmes de Gestion (CRM)",
    description: "Solutions internes sur mesure connectées à vos bases de données via Prisma & Supabase.",
    icon: Smartphone,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    title: "Performance & Sécurité",
    description: "Audit et optimisation de vos applications existantes pour une rapidité et sécurité maximale.",
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    title: "Déploiement Continu",
    description: "Mise en place de pipelines CI/CD pour des déploiements fluides et sans interruption.",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

/**
 * Services Section
 * Grid display of 6 expertise areas with custom styling and iconography
 */
export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold">Mes Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des solutions techniques de pointe pour propulser votre entreprise dans l'ère numérique.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
