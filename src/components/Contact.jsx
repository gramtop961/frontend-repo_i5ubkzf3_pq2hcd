import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Let's build something quietly extraordinary
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 text-zinc-600 dark:text-zinc-300"
        >
          Open to collaborations, product design roles, and experimental projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 hover:-translate-y-0.5 active:translate-y-0 transition"
          >
            <Mail className="h-4 w-4" />
            hello@example.com
          </a>
        </motion.div>
        <p className="mt-10 text-xs text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
