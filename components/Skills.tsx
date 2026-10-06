"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { BADGE_CONTAINER_VARIANTS, BADGE_ITEM_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";
import { 
  BrainCircuit, 
  MessageSquare, 
  Bot, 
  Layers, 
  Network, 
  Code, 
  Sparkles,
  Wrench,
  Search,
  TrendingUp,
  BarChart2,
  PieChart,
  FileSpreadsheet,
  GitMerge,
  Terminal,
  Database,
  FileCode2,
  LayoutTemplate,
  Globe,
  Palette,
  GitBranch,
  Repeat,
  Box,
  Code2,
  Laptop
} from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "AI, ML & APIs",
    skills: [
      { name: "Machine Learning", Icon: BrainCircuit },
      { name: "NLP", Icon: MessageSquare },
      { name: "Agentic Workflows", Icon: Bot },
      { name: "Vector Databases", Icon: Layers },
      { name: "Embeddings", Icon: Network },
      { name: "OpenAI API", Icon: Code },
      { name: "Google Gemini API", Icon: Sparkles },
    ]
  },
  {
    category: "Data Analytics & Visualization",
    skills: [
      { name: "Data Cleaning", Icon: Wrench },
      { name: "EDA", Icon: Search },
      { name: "KPI Analysis", Icon: TrendingUp },
      { name: "Power BI", Icon: BarChart2 },
      { name: "Tableau", Icon: PieChart },
      { name: "Microsoft Excel", Icon: FileSpreadsheet },
      { name: "Knime", Icon: GitMerge },
    ]
  },
  {
    category: "Languages & Web",
    skills: [
      { name: "Python", Icon: Terminal },
      { name: "MySQL", Icon: Database },
      { name: "JavaScript", Icon: FileCode2 },
      { name: "Angular", Icon: LayoutTemplate },
      { name: "HTML5 / CSS3", Icon: Globe },
      { name: "Bootstrap", Icon: Palette },
    ]
  },
  {
    category: "Tools, DevOps & Infrastructure",
    skills: [
      { name: "Git / GitHub", Icon: GitBranch },
      { name: "CI/CD Pipelines", Icon: Repeat },
      { name: "Containerized Services", Icon: Box },
      { name: "VS Code", Icon: Code2 },
      { name: "PyCharm", Icon: Laptop },
    ]
  }
];

export default function Skills() {
  return (
    <section id="stack" className="w-full relative">
      <Reveal>
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-sm font-mono text-ink-faint mb-8">// 03_STACK</div>
          <div className="flex flex-col gap-10 mt-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="flex flex-col items-center">
              <h3 className="text-[11px] font-mono uppercase tracking-widest text-ink-faint mb-4 text-center">
                {group.category}
              </h3>
              <motion.div 
                variants={BADGE_CONTAINER_VARIANTS}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {group.skills.map((tech) => {
                  const Icon = tech.Icon;
                  return (
                    <motion.span
                      key={tech.name}
                      variants={BADGE_ITEM_VARIANTS}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full border border-base-border bg-base-panel px-3 py-1.5 text-xs font-medium text-ink-muted shadow-sm cursor-default hover:border-ink-muted hover:text-ink transition-colors duration-300"
                    >
                      <Icon size={14} className="text-model/80" />
                      {tech.name}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>
          ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
