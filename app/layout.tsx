import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hemanth Sharma — Lead Data Science Engineer",
  description:
    "Lead Data Science Engineer at Qyrus. Building agentic systems, RAG pipelines, knowledge graphs and AI-driven test automation.",
  keywords: ["Lead Data Science Engineer", "Agentic AI", "RAG", "Knowledge Graphs", "MCP", "Python", "Qyrus"],
  authors: [{ name: "Hemanth Sharma" }],
  openGraph: {
    title: "Hemanth Sharma — Lead Data Science Engineer",
    description: "Building intelligent systems that redefine software quality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-space text-silver-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
