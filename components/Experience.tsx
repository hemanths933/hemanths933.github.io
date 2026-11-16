"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2, CalendarDays } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="orb orb-blue absolute top-0 right-0 w-[500px] h-[500px] opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          label="// 02. experience"
          title="Where I've Worked"
          subtitle="My journey building AI-powered systems in production."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-silver/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 hidden md:flex items-center justify-center w-px"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full border-2 border-silver/30"
                    style={{
                      background: exp.current ? exp.accentColor : "rgba(192,192,192,0.15)",
                      boxShadow: exp.current ? `0 0 12px ${exp.accentColor}` : "none",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass glass-hover silver-border rounded-2xl p-7 lg:p-8 relative overflow-hidden"
                  style={{
                    borderLeftColor: exp.current ? exp.accentColor : undefined,
                    borderLeftWidth: "2px",
                  }}
                >
                  {/* Accent glow */}
                  {exp.current && (
                    <div
                      className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${exp.accentColor} 0%, transparent 70%)`,
                        filter: "blur(30px)",
                        opacity: 0.25,
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={13} className="text-silver/40" />
                          <span className="text-sm font-medium text-silver/80">{exp.company}</span>
                          <span className="text-silver/30">·</span>
                          <span className="text-xs text-silver/50">{exp.type}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-silver/50">
                          <CalendarDays size={12} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-silver/40">
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-silver/60 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-silver/70">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: exp.accentColor }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
