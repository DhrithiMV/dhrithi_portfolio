"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Cloud, 
  ShieldCheck, 
  Terminal, 
  BrainCircuit 
} from "lucide-react";

const CREDENTIALS = [
  {
    title: "Recognized Innovator",
    issuer: "IIC Regional Meet 2025",
    Icon: Sparkles,
  },
  {
    title: "AWS Academy Graduate (Data Engineering)",
    issuer: "AWS",
    Icon: Cloud,
  },
  {
    title: "XPM 4.0 Fundamentals",
    issuer: "XPM",
    Icon: ShieldCheck,
  },
  {
    title: "Programming Foundation with Python",
    issuer: "Certification",
    Icon: Terminal,
  },
  {
    title: "Generative AI Virtual Internship",
    issuer: "Certification",
    Icon: BrainCircuit,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 300, damping: 24 } 
  }
};

export default function Recognition() {
  return (
    <section id="credentials" className="w-full relative">
      <Reveal>
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-sm font-mono text-ink-faint mb-8">// 04_CREDENTIALS</div>
          <h2 className="mt-4 font-display text-[32px] sm:text-[36px] lg:text-[42px] font-semibold text-ink">
            Awards &amp; Certifications
          </h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12"
          >
            {CREDENTIALS.map((c, i) => {
              const Icon = c.Icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="group relative flex flex-col p-6 rounded-2xl border border-base-border bg-base-panel/50 backdrop-blur-sm cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_15px_-3px_rgba(236,161,166,0.15)] hover:border-model/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-model/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 transition-transform duration-300 group-hover:scale-110 text-ink-muted group-hover:text-model">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-medium text-ink leading-snug">
                        {c.title}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-ink-faint ml-9">
                      {c.issuer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
