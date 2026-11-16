"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, Send, MapPin, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "@/lib/data";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/hemanths933",
    handle: "@hemanths933",
    color: "#C0C0C0",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/hemanths933",
    handle: "hemanths933",
    color: "#0A66C2",
  },
  {
    name: "Medium",
    icon: BookOpen,
    href: "https://medium.com/@hemanths933",
    handle: "@hemanths933",
    color: "#E5E5E5",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="orb orb-purple absolute bottom-0 right-1/4 w-[500px] h-[500px] opacity-40" />
      <div className="orb orb-blue absolute top-1/2 left-0 w-[300px] h-[300px] opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          label="// 06. contact"
          title="Let's Work Together"
          subtitle="Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open."
        />

        <div className="grid md:grid-cols-5 gap-6">
          {/* Left: Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-3 glass silver-border rounded-2xl p-8 lg:p-10 flex flex-col gap-8 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(192,192,192,0.3) 0%, transparent 70%)", filter: "blur(30px)" }}
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full glass silver-border text-silver/60 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.availability}
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-bold silver-text mb-3">
                Say Hello
              </h3>
              <p className="text-silver/60 text-sm leading-relaxed mb-8">
                I&apos;m currently open to new roles, freelance AI projects, and interesting conversations
                about what&apos;s possible with LLMs. Drop me a line and I&apos;ll get back to you.
              </p>

              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary inline-flex text-base py-4 px-8 silver-glow"
              >
                <Send size={16} />
                Send an Email
              </a>

              <div className="flex items-center gap-2 mt-6 text-sm text-silver/50">
                <Mail size={13} className="text-silver/40" />
                <span className="font-mono">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-silver/40">
                <MapPin size={13} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <p className="section-label">// find me online</p>

            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  className="group glass glass-hover silver-border rounded-xl p-4 flex items-center gap-4 no-underline"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: `${social.color}15`,
                      border: `1px solid ${social.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: social.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-silver/50 mb-0.5">{social.name}</p>
                    <p className="text-sm font-medium text-silver/90 truncate">{social.handle}</p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-silver/30 group-hover:text-silver/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                  />
                </motion.a>
              );
            })}

            {/* Quick note */}
            <div className="glass silver-border rounded-xl p-4 mt-2">
              <p className="text-xs text-silver/50 leading-relaxed font-mono">
                Response time:{" "}
                <span className="text-silver/80">usually within 24h</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
