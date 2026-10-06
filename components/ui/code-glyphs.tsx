"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const GLYPHS = ["{ }", "< />", "=>", "⌘", "λ", "&&", "git"];

export default function CodeGlyphs() {
  const [glyphs, setGlyphs] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      text: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      initialX: Math.random() * 100, // percentage
      initialY: Math.random() * 100,
      duration: 20 + Math.random() * 30, // 20s to 50s duration for very slow drift
    }));
    setGlyphs(generated);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden">
      {glyphs.map((g) => (
        <Glyph key={g.id} data={g} />
      ))}
    </div>
  );
}

function Glyph({ data }: { data: any }) {
  const controls = useAnimation();
  const scatterX = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 50);
  const scatterY = (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 50);

  useEffect(() => {
    controls.start({
      y: ["0vh", "-100vh"],
      rotate: [0, 360],
      transition: {
        y: { duration: data.duration, ease: "linear", repeat: Infinity },
        rotate: { duration: data.duration * 1.5, ease: "linear", repeat: Infinity },
      },
    });
  }, [controls, data.duration]);

  return (
    <motion.div
      className="absolute text-model font-mono text-sm pointer-events-auto cursor-default opacity-[0.12]"
      style={{ left: `${data.initialX}%`, top: `${data.initialY}%` }}
      animate={controls}
      whileHover={{
        x: scatterX,
        y: scatterY,
        opacity: 0,
        transition: { type: "spring", stiffness: 200, damping: 10 },
      }}
    >
      {data.text}
    </motion.div>
  );
}
