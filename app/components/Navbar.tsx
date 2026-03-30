"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "text-slate-100/90 hover:text-slate-100 hover:opacity-100 hover:text-primary transition px-4 py-2";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors backdrop-blur-md border-b border-white/10 ${
        scrolled ? "bg-neutral-950/85 shadow-lg" : "bg-neutral-950/50"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logos/ai-node.svg" className="h-8 w-8 opacity-80" />
          <span className="font-semibold text-lg tracking-wide">
            Bharat Santani
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-2">
          <a href="#hero" className={linkClass}>
            Home
          </a>
          <a href="#about" className={linkClass}>
            About
          </a>
          <a href="#skills" className={linkClass}>
            Skills
          </a>
          <a href="#experience" className={linkClass}>
            Experience
          </a>
          <a href="#accelerators" className={linkClass}>
            AI Accelerators
          </a>
          <a href="#projects" className={linkClass}>
            Projects
          </a>
          <a href="#contact" className={linkClass}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}