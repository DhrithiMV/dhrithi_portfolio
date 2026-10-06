"use client";

import { useState, useEffect, useRef } from "react";

const COMMANDS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/Dhrithi_MV_Resume.pdf", external: true },
  { label: "GitHub", href: "https://github.com/DhrithiMV", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhrithi-mv", external: true },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleExecute = (href: string, external?: boolean) => {
    setIsOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href === "#") {
      // Do nothing, file doesn't exist yet
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", href);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filteredCommands[selectedIndex];
      if (cmd) {
        handleExecute(cmd.href, cmd.external);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-[15vh] sm:p-6">
      <div 
        className="absolute inset-0 bg-base/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />
      <div className="reveal relative w-full max-w-lg overflow-hidden rounded-xl border border-base-border bg-base-panel shadow-2xl">
        <div className="flex items-center border-b border-base-border px-5">
          <span className="font-mono text-[14px] text-ink-muted">~/</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search portfolio..."
            className="w-full bg-transparent py-5 pl-3 font-mono text-[14px] text-ink outline-none placeholder:text-ink-faint"
          />
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center font-mono text-[13px] text-ink-faint">
              No matching commands.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => (
              <button
                key={cmd.label}
                onClick={() => handleExecute(cmd.href, cmd.external)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-mono text-[13px] transition-colors ${
                  index === selectedIndex
                    ? "bg-model/10 text-model"
                    : "text-ink-muted hover:bg-base/50"
                }`}
              >
                <span className={index === selectedIndex ? "opacity-100" : "opacity-40"}>→</span>
                {cmd.label}
              </button>
            ))
          )}
        </div>
        <div className="hidden items-center justify-between border-t border-base-border bg-base/50 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint sm:flex">
          <span>Navigate with ↑↓</span>
          <span>Enter to select</span>
          <span>Esc to dismiss</span>
        </div>
      </div>
    </div>
  );
}
