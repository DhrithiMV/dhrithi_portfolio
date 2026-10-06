import Link from 'next/link';
import { Boxes } from '@/components/ui/background-boxes';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-base text-ink px-6">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(transparent_5%,white_60%,transparent_100%)]">
        <Boxes />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-model/30 bg-model/10 px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-model" />
          <span className="font-mono text-[11px] lg:text-[12px] uppercase tracking-[0.2em] text-model">
            Error 404
          </span>
        </div>
        
        <h1 className="font-display text-[80px] sm:text-[120px] font-bold leading-none text-ink tracking-tight">
          404
        </h1>
        
        <h2 className="mt-4 font-mono text-[16px] sm:text-[20px] text-ink-muted uppercase tracking-widest">
          Directory Not Found
        </h2>
        
        <p className="mt-6 max-w-md text-ink-faint text-[14px] sm:text-[16px] leading-relaxed">
          The route you are looking for has been dropped from the vector store or does not exist in the current environment.
        </p>
        
        <Link 
          href="/" 
          className="mt-10 inline-block rounded border border-base-border bg-base-panel/50 px-8 py-4 font-mono text-[13px] sm:text-[14px] text-ink transition-all duration-200 hover:border-model hover:text-model hover:bg-base-panel hover:scale-105"
        >
          cd ~/home
        </Link>
      </div>
    </main>
  );
}
