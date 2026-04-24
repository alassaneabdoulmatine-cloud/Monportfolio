"use client";

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
    <section className="px-4 sm:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl -z-10" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold italic">Ma Stack Technique</h2>
              <p className="text-muted-foreground">Les outils que j'utilise pour bâtir des produits d'exception.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
              {techStack.map((tech) => (
                <div key={tech.name} className="px-6 py-4 glass rounded-xl text-center group hover:bg-primary/5 transition-colors">
                  <p className="font-bold whitespace-nowrap">{tech.name}</p>
                  <p className="text-[10px] text-primary uppercase tracking-widest mt-1 opacity-70">{tech.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
