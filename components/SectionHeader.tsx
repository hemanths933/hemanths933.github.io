"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16 lg:mb-20"
    >
      <p className="section-label mb-4">{label}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold silver-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-silver/50 text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="silver-divider mx-auto mt-6" />
    </motion.div>
  );
}
