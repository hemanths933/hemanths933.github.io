"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="orb orb-purple absolute top-20 right-0 w-[450px] h-[450px] opacity-40" />
      <div className="orb orb-teal absolute bottom-20 left-0 w-[350px] h-[350px] opacity-35" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="// 04. projects"
          title="Things I've Built"
          subtitle="Side projects I build in the open."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="group glass glass-hover silver-border rounded-2xl overflow-hidden flex flex-col relative"
            >
              {/* Project visual header */}
              <div
                className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Glowing orb in card header */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor}60 0%, transparent 60%)`,
                  }}
                />
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative z-10 font-display text-4xl font-bold opacity-20 select-none"
                  style={{ color: project.accentColor }}>
                  {project.id.toString().padStart(2, "0")}
                </div>

                {/* Featured badge */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full glass border border-silver/20 text-silver/70">
                    <Star size={10} className="fill-current text-amber-400" />
                    Featured
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.accentColor}20`,
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-silver/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-silver/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="btn-ghost flex-1 justify-center text-xs py-2.5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                  {project.links.live && (
                  <a
                    href={project.links.live}
                    className="btn-primary flex-1 justify-center text-xs py-2.5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}10)`,
                      borderColor: `${project.accentColor}40`,
                    }}
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Rest of projects — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 empty:hidden">
          {rest.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.07 }}
              className="group glass glass-hover silver-border rounded-xl p-5 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Mini accent glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${project.glowColor} 0%, transparent 70%)`,
                  filter: "blur(15px)",
                }}
              />

              <div className="relative z-10 flex flex-col gap-3 flex-1">
                {/* Category + number */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-mono"
                    style={{ color: project.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-silver/20 font-bold">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-sm font-bold text-white leading-snug group-hover:text-silver/90 transition-colors">
                  {project.title}
                </h3>

                <p className="text-silver/55 text-xs leading-relaxed flex-1">
                  {project.description.slice(0, 100)}...
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tag text-xs">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="flex gap-2 pt-1">
                  <a
                    href={project.links.github}
                    className="text-silver/40 hover:text-silver/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub — ${project.title}`}
                  >
                    <Github size={15} />
                  </a>
                  <a
                    href={project.links.live}
                    className="text-silver/40 hover:text-silver/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo — ${project.title}`}
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
