import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          DEFAULT: "#C0C0C0",
          50:  "#F8F8F8",
          100: "#F0F0F0",
          200: "#E0E0E0",
          300: "#C8C8C8",
          400: "#A8A8A8",
          500: "#888888",
          600: "#686868",
          700: "#484848",
          800: "#282828",
          900: "#181818",
        },
        platinum: "#E5E4E2",
        space: {
          DEFAULT: "#00000E",
          100: "#0A0A1A",
          200: "#080812",
          300: "#060610",
        },
        nebula: {
          purple: "#7C3AED",
          blue:   "#2563EB",
          teal:   "#0891B2",
          rose:   "#BE185D",
        },
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono:  ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 10s ease-in-out infinite",
        "glow-pulse":   "glowPulse 3s ease-in-out infinite",
        "shimmer":      "shimmer 2.5s linear infinite",
        "spin-slow":    "spin 20s linear infinite",
        "twinkle":      "twinkle 4s ease-in-out infinite",
        "bounce-slow":  "bounce 2.5s infinite",
        "fade-in":      "fadeIn 0.6s ease forwards",
        "slide-up":     "slideUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(192,192,192,0.15), 0 0 60px rgba(192,192,192,0.05)" },
          "50%":      { boxShadow: "0 0 40px rgba(192,192,192,0.30), 0 0 80px rgba(192,192,192,0.12)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%":      { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "silver-gradient": "linear-gradient(135deg, #FFFFFF 0%, #C0C0C0 40%, #808080 100%)",
        "silver-shimmer":  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)",
        "glass-gradient":  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
      },
      backdropBlur: {
        xs: "4px",
      },
      boxShadow: {
        glass:      "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-lg": "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        silver:     "0 0 20px rgba(192,192,192,0.2), 0 0 60px rgba(192,192,192,0.06)",
        "silver-lg":"0 0 40px rgba(192,192,192,0.3), 0 0 100px rgba(192,192,192,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
