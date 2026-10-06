"use client";

import { motion } from "framer-motion";

export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-40 pointer-events-none">
      {/* Logo */}
      <motion.a 
        href="#" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto flex items-center gap-1 font-mono text-[16px] lg:text-[20px] font-bold text-ink cursor-pointer transition-colors duration-300 group"
      >
        <span className="text-ink-muted transition-colors duration-300 group-hover:text-model">{"{"}</span>
        <span className="tracking-tighter"> d.mv </span>
        <span className="text-ink-muted transition-colors duration-300 group-hover:text-model">{"}"}</span>
      </motion.a>

    </header>
  );
}
