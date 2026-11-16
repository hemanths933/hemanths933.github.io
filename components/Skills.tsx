"use client";
import { motion } from "framer-motion";
import { Brain, Code2, Layers, Cpu } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Brain,
  Code2,
  Layers,
  Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="orb orb-teal absolute bottom-0 left-1/4 w-[400px] h-[400px] opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="// 03. skills"
          title="What I Work With"
          subtitle="Tools and technologies I use to build AI-powered systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Brain;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="glass glass-hover silver-border rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden group"
              >
                {/* Accent glow */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${cat.accentColor}40 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Icon + category */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${cat.accentColor}18`,
                      border: `1px solid ${cat.accentColor}30`,
                    }}
                  >
                    <Icon size={17} style={{ color: cat.accentColor }} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-silver/90 leading-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag cursor-default"
                      style={{
                        ["--hover-color" as string]: cat.accentColor,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional visual: horizontal skill display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 glass silver-border rounded-2xl p-6 lg:p-8"
        >
          <p className="section-label mb-5">// core proficiencies</p>
          <div className="flex flex-wrap gap-3">
            {[
              "Retrieval-Augmented Generation",
              "Multi-Agent Orchestration",
              "LLM Fine-tuning",
              "Prompt Engineering",
              "Vector Search",
              "AI Evaluation Frameworks",
              "Production LLMOps",
              "Tool Use & Function Calling",
              "Agentic Workflows",
              "AI-Powered Test Automation",
              "NLP Pipelines",
              "Semantic Search",
            ].map((skill) => (
              <span key={skill} className="tag text-sm py-2 px-3">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
