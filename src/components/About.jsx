import { motion } from 'framer-motion';
import { MapPin, Stethoscope, Cpu, BrainCircuit } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

const focusAreas = [
  { icon: Stethoscope, label: 'Medical Instrumentation' },
  { icon: BrainCircuit, label: 'AI in Healthcare' },
  { icon: Cpu, label: 'Embedded Systems' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">About</span>
          <h2 className="section-heading mt-3">The engineer behind the build</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="panel-elevated p-6"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-dim">
                Spec Sheet
              </span>
              <span className="h-2 w-2 rounded-full bg-signal-vital shadow-glow-vital animate-pulse-soft" />
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-signal-cyan" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-dim">Location</p>
                  <p className="text-sm text-ink">{profile.location}</p>
                </div>
              </div>

              <div className="border-t border-line pt-4">
                <p className="mb-3 text-xs uppercase tracking-wider text-ink-dim">Focus Areas</p>
                <div className="space-y-3">
                  {focusAreas.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-card">
                        <Icon size={15} className="text-signal-blue" />
                      </span>
                      <span className="text-sm text-ink">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
