import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Fixed star field canvas */}
      <StarField />

      {/* Noise grain texture */}
      <div className="noise" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-silver/8 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-silver/35">
            © {new Date().getFullYear()} Hemanth Sharma. Built with Next.js &amp; Tailwind.
          </p>
          <p className="text-xs font-mono text-silver/25">
            Designed in the stars ✦
          </p>
        </div>
      </footer>
    </>
  );
}
