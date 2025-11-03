import { motion } from "framer-motion";

const projects = [
  {
    title: "Kinetic Commerce",
    description:
      "A storefront where micro-interactions guide the journey. Subtle physics and haptics elevate everyday shopping.",
    tags: ["React", "Framer Motion", "Stripe"],
  },
  {
    title: "Spatial Stories",
    description:
      "Narratives mapped in 3D space. Move, reveal, and connect scenes through spatial transitions.",
    tags: ["Three.js", "WebGL", "Story"],
  },
  {
    title: "Quiet Analytics",
    description:
      "Dashboards with calm animation rhythms that keep focus where it belongs—on insight.",
    tags: ["D3", "Next.js", "Design"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
            A few highlights blending product thinking with motion craft.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16, rotateX: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/70 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 backdrop-blur-md"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(244,63,94,0.12),transparent_40%)]" />
              <div
                className="relative"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.parentElement?.style.setProperty("--x", `${x}%`);
                  e.currentTarget.parentElement?.style.setProperty("--y", `${y}%`);
                }}
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-300 ring-1 ring-rose-500/20 px-2.5 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
