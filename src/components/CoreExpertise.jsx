import { motion } from 'framer-motion';
import { BrainCircuit, Stethoscope, Cpu, Wrench } from 'lucide-react';
import { coreExpertise } from '../data/portfolioData.js';

const icons = { BrainCircuit, Stethoscope, Cpu, Wrench };

export default function CoreExpertise() {
  return (
    <section id="expertise" className="relative bg-surface/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Core Expertise</span>
          <h2 className="section-heading mt-3">Where the work concentrates</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreExpertise.map((group, i) => {
            const Icon = icons[group.icon] ?? Wrench;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="panel p-6 transition-colors duration-300 hover:border-signal-cyan/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal-blue/30 bg-surface-card">
                  <Icon size={20} className="text-signal-blue" />
                </span>
                <h3 className="mt-4 font-display text-base font-medium text-ink">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
