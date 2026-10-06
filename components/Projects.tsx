"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    name: "Misinfo Shield",
    description:
      "Developed a web application detecting fake news through Machine Learning and NLP techniques for content classification. Tested and debugged modules to improve system reliability.",
    stack: ["Python", "Deep Learning", "NLP", "Data Preprocessing"],
    liveUrl: "https://ai-misinformation-platform-impl.onrender.com/",
  },
  {
    id: "02",
    name: "Restaurant Operations System (ROS)",
    description:
      "Engineered ETL workflows for extracting and validating operational data. Built structured MySQL databases feeding into interactive Power BI business monitoring reports.",
    stack: ["Power BI", "MySQL", "ETL workflows", "Data Analytics"],
    liveUrl: "https://github.com/DhrithiMV/ROS_project/blob/main/README.md",
  },
  {
    id: "03",
    name: "Grain Guard",
    description:
      "Agentic AI platform connecting farmers to verified storage providers. Features 4 specialized AI agents for storage recommendation, environmental monitoring, and fraud detection, integrated into a complete book-to-pay digital workflow.",
    stack: ["Python", "Agentic AI", "Multi-Agent Systems", "APIs", "Database Management"],
    liveUrl: "",
  },
  {
    id: "04",
    name: "MovieLens 20M — PySpark Analytics",
    description:
      "Distributed analytics pipeline built with PySpark for large-scale movie data. Processed 20M+ ratings to generate 4 analytical reports covering producer, director, genre-market, and hidden-gem analysis.",
    stack: ["Python", "PySpark", "Apache Spark", "Spark SQL", "Data Engineering"],
    liveUrl: "",
  },
];

const ArrowUpRight = ({ className }: { className?: string }) => (
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
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export default function Projects() {
  return (
    <section id="work" className="w-full relative">
      <Reveal>
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-sm font-mono text-ink-faint mb-8">// 01_FEATURED_WORK</div>
          <h2 className="mt-4 font-display text-[32px] sm:text-[36px] lg:text-[42px] font-semibold text-ink">
            Systems I built end to end
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] lg:text-[18px] leading-[1.6] text-ink-muted">
            Not demos — full pipelines, from raw source to something a person
            actually uses.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {PROJECTS.map((p) => {
              const hasLink = Boolean(p.liveUrl && p.liveUrl !== "#");
              const CardWrapper = hasLink ? motion.a : motion.div;
              const wrapperProps = hasLink
                ? {
                    href: p.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                  }
                : {};

              return (
                <CardWrapper
                  key={p.id}
                  {...wrapperProps}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-base-border bg-base-panel/50 p-6 sm:p-8 transition-colors duration-300 ${
                    hasLink
                      ? "hover:shadow-[0_0_15px_-3px_rgba(236,161,166,0.15)] hover:border-model/50 cursor-pointer"
                      : ""
                  }`}
                >
                  {/* Subtle background gradient on hover */}
                  {hasLink && (
                    <div className="absolute inset-0 bg-gradient-to-br from-model/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[11px] lg:text-[12px] uppercase tracking-widest text-ink-faint">
                        {p.id}
                      </span>
                      {hasLink && (
                        <ArrowUpRight className="h-5 w-5 text-ink-faint transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-model" />
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-[22px] sm:text-[24px] lg:text-[28px] font-semibold text-ink">
                      {p.name}
                    </h3>
                    
                    <p className="mt-4 text-[16px] lg:text-[17px] leading-[1.6] text-ink-muted">
                      {p.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full bg-base border border-base-border px-2.5 py-0.5 text-xs font-semibold text-ink-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
