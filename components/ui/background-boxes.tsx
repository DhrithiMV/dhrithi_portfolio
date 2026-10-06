"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(40).fill(1);
  
  // Subtle teal/amber colors for the pulse effect
  const colors = [
    "rgba(79, 209, 197, 0.15)", // Teal
    "rgba(245, 166, 35, 0.1)",  // Amber
    "rgba(79, 209, 197, 0.05)", // Faint Teal
  ];

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-25",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-base-border/50 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              animate={{
                backgroundColor: (i * 3 + j * 7) % 19 === 0 
                  ? ["rgba(0,0,0,0)", colors[(i + j) % colors.length], "rgba(0,0,0,0)"] 
                  : "rgba(0,0,0,0)"
              }}
              transition={{
                duration: 6 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (j % 5) * 0.4,
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-base-border/50 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-base-border opacity-50 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
