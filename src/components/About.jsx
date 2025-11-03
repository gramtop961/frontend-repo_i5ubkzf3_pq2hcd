import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            About
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            I design and build interfaces that feel effortless—where motion clarifies, never distracts.
            My work lives at the intersection of product, brand, and engineering.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3"
        >
          <ul className="space-y-4">
            {[
              "Interaction design with an emphasis on clarity and responsiveness.",
              "Prototyping motion systems that translate into scalable design tokens.",
              "Building accessible, performant experiences that still delight.",
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl bg-white/70 dark:bg-zinc-900/70 ring-1 ring-zinc-200/60 dark:ring-zinc-800/60 p-5"
              >
                <p className="text-sm text-zinc-700 dark:text-zinc-300">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
