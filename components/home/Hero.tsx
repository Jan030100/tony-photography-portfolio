"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax — image moves slower than scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        {/* Placeholder — replace src with a real photo later */}
        <div className="w-full h-full bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-accent text-xs tracking-[0.4em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Photography Portfolio
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="font-display text-display-xl text-foreground leading-none tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Capturing
          <br />
          <span className="italic text-accent">moments</span>
          <br />
          that last
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Portrait, street, and editorial photography
          based in Syria.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/portfolio"
            className="group relative px-8 py-3 bg-accent text-background text-sm tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:bg-foreground"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-border text-foreground text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity }}
      >
        <span className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-linear-to-b from-accent to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}