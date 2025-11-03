import { motion } from "framer-motion";
import { Rocket, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/50 bg-white/50 dark:bg-zinc-900/50 border-b border-zinc-200/50 dark:border-zinc-800/50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
          <Rocket className="h-5 w-5 text-rose-500" />
          <span>MyPortfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#work" className="hover:text-rose-500 transition-colors">Work</a>
          <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/70 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/60 hover:scale-105 active:scale-95 transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/70 dark:bg-zinc-800/70 border border-zinc-200/60 dark:border-zinc-700/60 hover:scale-105 active:scale-95 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
