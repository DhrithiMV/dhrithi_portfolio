"use client";

import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, SPRING_SLIDE_LEFT_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

const ROLES: {
  period: string;
  title: string;
  org: string;
  bullets: ReactNode[];
}[] = [
  {
    period: "Apr 2026 — May 2026",
    title: "AI Engineering Intern",
    org: "Talencia Global — RADIX Program",
    bullets: [
      <>
        Owned the full SDLC for an <strong className="font-semibold text-ink">enterprise AI feature</strong> — requirements, design, build, test, and deployment — across a 6-week production sprint.
      </>,
      <>
        Built <strong className="font-semibold text-ink">agentic retrieval workflows</strong> on <strong className="font-semibold text-ink">vector databases</strong> and embeddings, powering semantic search over unstructured data.
      </>,
      <>
        Normalized <strong className="font-semibold text-ink">relational schemas</strong> and parameter-driven data models to keep 3+ downstream services maintainable at scale.
      </>,
      <>
        Set up metadata-driven <strong className="font-semibold text-ink">test suites and CI/CD checks</strong>, cutting manual QA passes before each release.
      </>,
    ],
  },
  {
    period: "Mar 2026 — Apr 2026",
    title: "Machine Learning Intern",
    org: "CodeAlpha",
    bullets: [
      <>
        Trained and benchmarked <strong className="font-semibold text-ink">supervised ML models</strong> on real datasets, iterating on <strong className="font-semibold text-ink">feature engineering</strong> to improve validation accuracy.
      </>,
      <>
        Documented experiments and results to keep model comparisons <strong className="font-semibold text-ink">reproducible</strong> across runs.
      </>,
    ],
  },
  {
    period: "Dec 2024 — Present",
    title: "Student Innovation Lead",
    org: "Institution's Innovation Council (IIC), PES College of Engineering",
    bullets: [
      <>
        Lead a student innovation cell, organizing <strong className="font-semibold text-ink">ideathons and technical workshops</strong> in collaboration with faculty and IIC volunteers.
      </>,
      <>
        Recognized Innovator at the <strong className="font-semibold text-ink">IIC Regional Meet 2025</strong> (YIC/APF Round-2 Ideathon).
      </>,
    ],
  },
  {
    period: "Sep 2024 — Present",
    title: "Technical Team Member (prev. Graphic Team)",
    org: "GDG on Campus, PES College of Engineering",
    bullets: [
      <>
        Delivered <strong className="font-semibold text-ink">hands-on technical workshops</strong> to 60+ students alongside GDG volunteers and faculty.
      </>,
      <>
        Moved from the graphic design team into the technical team, taking on <strong className="font-semibold text-ink">Google-tools-based build sessions</strong>.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full relative">
      <Reveal>
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="text-sm font-mono text-ink-faint mb-8">// 02_EXPERIENCE</div>
        <h2 className="mt-4 font-display text-[32px] sm:text-[36px] lg:text-[42px] font-semibold text-ink">
          Where I've been shipping
        </h2>

        <motion.div 
          variants={STAGGER_CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="mt-12 relative ml-3 md:ml-6 space-y-12"
        >
          {/* Animated Timeline Border */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 top-2 bottom-0 w-px bg-base-border origin-top"
          />

          {ROLES.map((r) => (
            <motion.div variants={SPRING_SLIDE_LEFT_VARIANTS} key={r.title + r.period} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-model ring-4 ring-base z-10" />
              
              {/* Card Container */}
              <div className="ml-8 md:ml-12 group relative flex flex-col rounded-2xl border border-transparent hover:border-base-border hover:bg-base-panel/50 p-4 md:p-6 transition-all duration-300">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {r.title}
                  </h3>
                  <span className="text-sm font-mono text-ink-faint">
                    {r.period}
                  </span>
                </div>
                
                {/* Organization Badge */}
                <div className="mt-2 self-start inline-flex items-center rounded-md bg-base-panel border border-base-border px-2 py-1 text-xs font-medium text-ink-muted">
                  {r.org}
                </div>
                
                {/* Bullets */}
                <ul className="mt-6 space-y-3">
                  {r.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 text-base text-ink-muted leading-relaxed">
                      <TerminalIcon className="mt-1 h-4 w-4 shrink-0 text-ink-faint group-hover:text-model transition-colors duration-300" />
                      <div>{b}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </Reveal>
    </section>
  );
}
