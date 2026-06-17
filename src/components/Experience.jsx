import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Experience</span>
          <h2 className="section-heading mt-3">Internship case files</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="panel-elevated relative overflow-hidden p-6 sm:p-7"
            >
              <div className="absolute right-0 top-0 rounded-bl-xl border-b border-l border-line bg-surface-card px-3 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-cyan">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-3 pr-20">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-card">
                  <Building2 size={18} className="text-signal-blue" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{exp.company}</h3>
                  <p className="text-xs uppercase tracking-wider text-ink-dim">{exp.role}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-signal-vital" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
