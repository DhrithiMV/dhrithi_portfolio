"use client";

import { useEffect, useState } from "react";
import { User, Briefcase, Activity, Terminal, Award } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const LINKS = [
  { href: "#about", label: "ABOUT", Icon: User },
  { href: "#work", label: "WORK", Icon: Briefcase },
  { href: "#experience", label: "EXPERIENCE", Icon: Activity },
  { href: "#stack", label: "STACK", Icon: Terminal },
  { href: "#credentials", label: "CREDENTIALS", Icon: Award },
];

export default function SideDock() {
  const [activeSection, setActiveSection] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsAtTop(latest < 250);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    LINKS.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isOpen = isAtTop || isHovered;

  return (
    <div 
      className="fixed top-0 left-0 h-screen z-40 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Invisible Trigger Area / Indicator */}
      <div className={`h-full w-3 bg-transparent transition-colors ${!isOpen ? "hover:bg-model/10" : ""}`} />

      {/* The Sidebar Panel */}
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-fit max-h-[90vh] w-[260px] rounded-r-3xl border-y border-r border-base-border bg-base-panel/80 backdrop-blur-xl p-8 shadow-2xl flex flex-col gap-6"
      >
        <div className="flex flex-col gap-8 py-4">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            const Icon = link.Icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 text-sm font-medium transition-all duration-300 hover:translate-x-2 ${
                  isActive ? "text-model" : "text-ink-muted hover:text-ink hover:dark:text-white"
                }`}
              >
                <Icon size={18} className={isActive ? "text-model" : ""} />
                {link.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
