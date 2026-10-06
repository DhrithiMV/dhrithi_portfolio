export default function PipelineDivider({ label }: { label?: string }) {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-data" />
      <svg
        className="h-3 w-full flex-1"
        preserveAspectRatio="none"
        viewBox="0 0 100 12"
      >
        <line
          x1="0"
          y1="6"
          x2="100"
          y2="6"
          className="pipeline-edge"
          stroke="#232E3D"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
          {label}
        </span>
      )}
      <span className="h-1.5 w-1.5 rounded-full bg-model" />
    </div>
  );
}
