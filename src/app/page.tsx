import Header from "@/components/Header";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:border focus:border-accent focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Contact />
    </>
  );
}
