"use client";

import { motion } from "motion/react";

const techStack = [
  { name: "Next.js", level: "Maîtrisé" },
  { name: "React", level: "Maîtrisé" },
  { name: "Supabase", level: "Maîtrisé" },
  { name: "Prisma", level: "Maîtrisé" },
  { name: "PostgreSQL", level: "Maîtrisé" },
  { name: "TypeScript", level: "Maîtrisé" },
  { name: "Tailwind CSS", level: "Maîtrisé" },
  { name: "OpenAI API", level: "Advanced" },
  { name: "TanStack Query", level: "Maîtrisé" },
  { name: "shadcn/ui", level: "Maîtrisé" },
  { name: "Lucide React", level: "Maîtrisé" },
  { name: "Radix UI", level: "Maîtrisé" },
];

/**
 * Stack Section
 * High-level overview of technical mastery and tools used
 */
export function Stack() {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 sm:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 text-center lg:text-left max-w-md">
              <h2 className="text-3xl sm:text-5xl font-bold italic">Ma Stack Technique</h2>
              <p className="text-muted-foreground text-lg">Les outils que j'utilise pour bâtir des produits d'exception, performants et évolutifs.</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                    },
                  }}
                  className="px-6 py-5 glass rounded-2xl text-center group hover:bg-primary/5 transition-all duration-300 border border-white/5 hover:border-primary/20"
                >
                  <p className="font-bold whitespace-nowrap text-white">{tech.name}</p>
                  <p className="text-[10px] text-primary uppercase tracking-widest mt-1.5 font-semibold opacity-80">{tech.level}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
