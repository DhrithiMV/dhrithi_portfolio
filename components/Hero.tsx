"use client";

import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from "@/lib/animations";

export default function Hero() {

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center overflow-hidden w-full"
    >




      <div className="relative z-10 mx-auto flex flex-col items-center justify-center text-center max-w-3xl w-full px-6 py-16 before:absolute before:inset-[-100px] before:bg-[radial-gradient(ellipse_at_center,rgba(17,17,22,0.9)_0%,transparent_70%)] before:-z-10 before:pointer-events-none">
        <motion.div 
          className="flex flex-col items-center"
          variants={STAGGER_CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-panel/60 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-model" />
            <span className="font-mono text-[11px] lg:text-[12px] uppercase tracking-[0.2em] text-ink-muted">
              open to AI/ML · DATA · APPLIED AI
            </span>
          </motion.div>

          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
            Hi, I'm Dhrithi. I build reliable AI and data systems.
          </motion.h1>

          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-lg text-ink-muted mt-6 max-w-2xl">
            I'm an AI & ML Engineering undergrad at PES College of Engineering. I specialize in building retrieval-based AI workflows, NLP models, and scalable data pipelines.
          </motion.p>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="rounded-md border border-base-border px-6 py-3 text-center font-mono text-[13px] lg:text-[14px] text-ink hover:bg-base-panel hover:border-model hover:text-model transition-colors duration-300"
            >
              [ view_work() ]
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:dhrithimalyav@gmail.com"
              className="rounded-md border border-base-border px-6 py-3 text-center font-mono text-[13px] lg:text-[14px] text-ink hover:bg-base-panel hover:border-model hover:text-model transition-colors duration-300"
            >
              [ get_in_touch() ]
            </motion.a>
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-base-border pt-8 w-full max-w-2xl">
            <div className="flex flex-col gap-1 items-center">
              <span className="font-display text-[28px] font-semibold leading-none text-ink">
                02
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Industry Internships
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <span className="font-display text-[28px] font-semibold leading-none text-ink">
                60+
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Students Mentored
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <span className="font-display text-[28px] font-semibold leading-none text-ink">
                AWS
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Data Engineering
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
