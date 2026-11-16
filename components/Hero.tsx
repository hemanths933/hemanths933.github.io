"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

const TITLES = ["Lead Data Science Engineer", "Agentic Systems Builder", "RAG & Knowledge Graphs", "AI Team Lead"];

function useTypewriter(words: string[], typingSpeed = 90, deleteSpeed = 50, pauseMs = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = words[wordIdx];

    if (!deleting && display === current) {
      timeout.current = setTimeout(() => setDeleting(true), pauseMs);
      return;
    }
    if (deleting && display === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
      return;
    }

    timeout.current = setTimeout(
      () => {
        setDisplay(deleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1));
      },
      deleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout.current);
  }, [display, deleting, wordIdx, words, typingSpeed, deleteSpeed, pauseMs]);

  return display;
}

export default function Hero() {
  const title = useTypewriter(TITLES);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(192,192,192,0.04) 0%, rgba(192,192,192,0.01) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass silver-border text-xs font-mono text-silver/70">
          <Sparkles size={12} className="text-silver/60" />
          Available for new opportunities
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </span>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          <span className="silver-text">{personalInfo.firstName}</span>
          <br />
          <span
            className="silver-text-bright"
            style={{ backgroundSize: "200% auto" }}
          >
            {personalInfo.lastName}
          </span>
        </h1>
      </motion.div>

      {/* Typewriter role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <span className="section-label">// currently</span>
        <div className="h-px w-8 bg-silver/20" />
        <div className="text-lg sm:text-xl font-mono font-medium text-silver/90 min-w-[200px] text-left">
          {title}
          <span className="cursor-blink" />
        </div>
      </motion.div>

      {/* Company */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="text-sm font-mono text-silver/50 mb-8"
      >
        @ <span className="text-silver/80 font-semibold">{personalInfo.company}</span>
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="max-w-xl text-base sm:text-lg text-silver/50 leading-relaxed mb-10 font-light"
      >
        {personalInfo.tagline}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 mb-14"
      >
        <a href="#projects" className="btn-primary">
          <Sparkles size={15} />
          View My Work
        </a>
        <a href="#contact" className="btn-ghost">
          <Mail size={15} />
          Get in Touch
        </a>
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="flex items-center gap-5 mb-16"
      >
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver/40 hover:text-silver/90 transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <div className="w-px h-4 bg-silver/15" />
        <a
          href={personalInfo.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver/40 hover:text-silver/90 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <div className="w-px h-4 bg-silver/15" />
        <a
          href={personalInfo.socials.email}
          className="text-silver/40 hover:text-silver/90 transition-colors duration-200"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver/30"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
