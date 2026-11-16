"use client";
import { motion } from "framer-motion";
import { GraduationCap, Telescope } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, affiliations } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-16 lg:py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          label="// 05. beyond work"
          title="Education & Interests"
          subtitle="Where I studied, and what I do outside the day job."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass silver-border rounded-2xl p-7"
          >
            <div className="flex items-center gap-2 text-silver/50 text-xs font-mono mb-4">
              <GraduationCap size={14} /> Education
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-1">{education.degree}</h3>
            <p className="text-sm text-silver/60">{education.school}</p>
            <p className="text-xs font-mono text-silver/40 mt-1">{education.years}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass silver-border rounded-2xl p-7"
          >
            <div className="flex items-center gap-2 text-silver/50 text-xs font-mono mb-4">
              <Telescope size={14} /> Affiliations &amp; Hobbies
            </div>
            <div className="flex flex-wrap gap-2">
              {affiliations.map((a) => (
                <span key={a} className="tag">{a}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
