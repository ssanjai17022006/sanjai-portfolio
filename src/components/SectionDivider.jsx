export default function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="flex items-center gap-3 py-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent" />
        <div className="flex gap-1">
          <span className="h-1 w-1 rounded-full bg-signal-blue/60" />
          <span className="h-1 w-1 rounded-full bg-signal-cyan/60" />
          <span className="h-1 w-1 rounded-full bg-signal-vital/60" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>
    </div>
  );
}
