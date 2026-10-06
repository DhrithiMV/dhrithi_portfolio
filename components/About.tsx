import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="w-full relative">
      <Reveal>
        <div className="mx-auto max-w-[1240px] px-6">
        <div className="text-sm font-mono text-ink-faint mb-8">// 00_ABOUT</div>
        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold tracking-tight mb-6 text-ink">
              I don't just train models in a vacuum. I build the messy pipelines that feed them.
            </h3>
            <div className="text-lg text-ink-muted space-y-4">
              <p>
                I'm an AI & ML undergrad at PES College of Engineering, but most of my real learning happens outside the classroom. Whether I'm organizing ideathons as the Innovation Lead for IIC, or delivering tech workshops for our GDG campus chapter, I'm obsessed with how things actually work in production.
              </p>
              <p>
                My recent work at Talencia Global pushed me deep into <code className="bg-base-panel border border-base-border px-1.5 py-0.5 rounded text-sm font-mono text-ink">agentic workflows</code> and <code className="bg-base-panel border border-base-border px-1.5 py-0.5 rounded text-sm font-mono text-ink">vector databases</code>. I spend my time writing Python, normalizing MySQL schemas, and wiring up ETL pipelines so that when an AI makes a decision, the underlying data can actually be trusted.
              </p>
            </div>
          </div>

          <div className="w-full bg-[#0d1117] rounded-xl overflow-hidden shadow-xl border border-neutral-800 flex flex-col self-start transition-transform duration-300 hover:-translate-y-1">
            {/* Fake Window Header */}
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-neutral-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs font-mono text-neutral-500">dhrithi.json</div>
            </div>
            
            {/* JSON Content */}
            <div className="p-6 text-sm md:text-base font-mono leading-relaxed overflow-x-auto">
              <div>
                <span className="text-neutral-400">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-300">"developer"</span><span className="text-neutral-400">: </span><span className="text-emerald-300">"Dhrithi MV"</span><span className="text-neutral-400">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-300">"education"</span><span className="text-neutral-400">: </span><span className="text-emerald-300">"B.E. CSE (AI & ML) - Class of '27"</span><span className="text-neutral-400">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-300">"location"</span><span className="text-neutral-400">: </span><span className="text-emerald-300">"Mandya, India"</span><span className="text-neutral-400">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-300">"current_focus"</span><span className="text-neutral-400">: [</span>
              </div>
              <div className="pl-8">
                <span className="text-emerald-300">"Retrieval-based AI"</span><span className="text-neutral-400">,</span>
              </div>
              <div className="pl-8">
                <span className="text-emerald-300">"Data Analytics & ETL"</span><span className="text-neutral-400">,</span>
              </div>
              <div className="pl-8">
                <span className="text-emerald-300">"Machine Learning & NLP"</span>
              </div>
              <div className="pl-4">
                <span className="text-neutral-400">],</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-300">"leadership"</span><span className="text-neutral-400">: </span><span className="text-emerald-300">"Social Innovation Team Lead @ IIC"</span>
              </div>
              <div>
                <span className="text-neutral-400">{'}'}</span>
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </Reveal>
    </section>
  );
}
