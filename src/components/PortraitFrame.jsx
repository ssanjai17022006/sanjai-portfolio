import { motion } from 'framer-motion';

/**
 * Frames the profile photo like a diagnostic scan readout: corner reticle
 * brackets, a slow scan-line sweep, and a small live-status tag — continuing
 * the medical-monitor visual language used elsewhere on the site, rather
 * than a plain photo crop.
 */
export default function PortraitFrame({ src, alt, size = 'lg' }) {
  const dims = size === 'lg' ? 'h-72 w-60 sm:h-80 sm:w-64' : 'h-40 w-40';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative inline-block"
    >
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-signal-blue/15 blur-2xl" />

      <div
        className={`relative ${dims} overflow-hidden rounded-[1.75rem] border border-signal-cyan/30 bg-surface-card shadow-glow`}
      >
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" />

        {/* Scan-line sweep */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-signal-cyan/25 to-transparent mix-blend-screen"
          initial={{ top: '-20%' }}
          animate={{ top: '110%' }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
        />

        {/* Vignette so the corner brackets read clearly over any photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-void/10" />

        {/* Corner reticle brackets */}
        <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-signal-cyan/70" />
        <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-signal-cyan/70" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-signal-cyan/70" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-signal-cyan/70" />

        {/* ID tag */}
        <span className="absolute left-3 top-3 translate-x-1.5 translate-y-7 font-mono text-[9px] uppercase tracking-[0.2em] text-signal-cyan/90">
          ID // SS&ndash;01
        </span>

        {/* Live status tag */}
        <span className="absolute bottom-3 right-3 flex translate-x-[-6px] translate-y-[-7px] items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-signal-vital">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-vital shadow-glow-vital animate-pulse-soft" />
          Live
        </span>
      </div>
    </motion.div>
  );
}
