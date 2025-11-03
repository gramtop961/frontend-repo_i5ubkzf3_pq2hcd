import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient edges to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.5),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,0.3),transparent_40%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.45),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent_40%)]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-7"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 ring-1 ring-inset ring-zinc-200/60 dark:ring-zinc-800/60 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Interactive • Minimal • Modern
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              A portfolio with motion you haven't felt before
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
              Clean aesthetics meet playful physics. Explore my work through a tactile, living interface
              that responds to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-rose-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 hover:-translate-y-0.5 active:translate-y-0 transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-white px-5 py-3 text-sm font-semibold ring-1 ring-zinc-200/80 dark:ring-zinc-800/80 hover:-translate-y-0.5 active:translate-y-0 transition"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex items-end lg:items-center"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          >
            <div className="w-full rounded-2xl backdrop-blur-md bg-white/40 dark:bg-zinc-900/40 ring-1 ring-inset ring-white/40 dark:ring-zinc-800/60 p-6">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Hover, click, and drag across the cubes. The surface ripples in soft red—
                a subtle, responsive effect that bridges art and interface.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
