import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
