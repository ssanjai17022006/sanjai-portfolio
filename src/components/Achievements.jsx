import { motion } from 'framer-motion';
import { Stethoscope, BrainCircuit, Radio, HeartPulse, ScanEye } from 'lucide-react';
import { achievements } from '../data/portfolioData.js';

const icons = {
  'ach-1': Stethoscope,
  'ach-2': BrainCircuit,
  'ach-3': Radio,
  'ach-4': HeartPulse,
  'ach-5': ScanEye,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Achievements</span>
          <h2 className="section-heading mt-3">Markers on the record</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {achievements.map((ach, i) => {
            const Icon = icons[ach.id] ?? Stethoscope;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="panel flex flex-col items-center p-6 text-center transition-colors duration-300 hover:border-signal-cyan/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-signal-cyan/30 bg-surface-card shadow-glow">
                  <Icon size={22} className="text-signal-cyan" />
                </span>
                <h3 className="mt-4 font-display text-sm font-medium text-ink">{ach.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{ach.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
