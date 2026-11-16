"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Zap, Coffee } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "@/lib/data";

const statIcons = [Zap, Briefcase, Coffee, Zap];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-purple absolute -top-20 -left-20 w-[400px] h-[400px] opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="// 01. about"
          title="Who I Am"
          subtitle="A brief introduction to the person behind the code."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Avatar + quick info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl glass silver-border flex items-center justify-center overflow-hidden silver-glow animate-float">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(140,60,220,0.35) 0%, rgba(30,80,220,0.20) 40%, transparent 70%)",
                  }}
                >
                  <span className="font-display text-6xl font-bold silver-text select-none">
                    HS
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 glass silver-border rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-silver/80">Available</span>
              </div>
            </div>

            {/* Location + company */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-silver/60 text-sm">
                <MapPin size={14} className="text-silver/40 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-silver/60 text-sm">
                <Briefcase size={14} className="text-silver/40 flex-shrink-0" />
                <span>
                  {personalInfo.title} at{" "}
                  <span className="text-silver/90 font-semibold">{personalInfo.company}</span>
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {personalInfo.stats.map((stat, i) => {
                const Icon = statIcons[i % statIcons.length];
                return (
                  <div key={stat.label} className="glass silver-border rounded-xl p-4 text-center">
                    <div className="text-2xl font-display font-bold silver-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-silver/50 leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="glass silver-border rounded-2xl p-8 lg:p-10 flex flex-col gap-8"
          >
            <div className="space-y-5">
              {personalInfo.bio.map((para, i) => (
                <p key={i} className="text-silver/70 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="border-t border-silver/10 pt-6">
              <p className="section-label mb-4">// currently focused on</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "LLM Application Architecture",
                  "Multi-Agent Systems",
                  "RAG Engineering",
                  "AI Safety & Eval",
                  "Production LLMOps",
                ].map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#contact" className="btn-primary flex-1 justify-center text-sm py-3">
                Let&apos;s Connect
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1 justify-center text-sm py-3"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
