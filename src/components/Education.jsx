import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <section id="education" className="relative bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Education</span>
          <h2 className="section-heading mt-3">Academic timeline</h2>
        </motion.div>

        <div className="relative mt-14 pl-8 sm:pl-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-cyan via-line to-transparent sm:left-[11px]" />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-12 ${
                    item.status === 'current'
                      ? 'border-signal-cyan bg-signal-cyan/20 shadow-glow animate-pulse-soft'
                      : 'border-line bg-surface-card'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      item.status === 'current' ? 'bg-signal-cyan' : 'bg-ink-dim'
                    }`}
                  />
                </span>

                <div className="panel p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={17} className="text-signal-blue" />
                      <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="chip">{item.period}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-signal-cyan/90">{item.institution}</p>
                  <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
