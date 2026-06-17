import { motion } from 'framer-motion';
import { Microscope } from 'lucide-react';
import { researchInterests } from '../data/portfolioData.js';

export default function ResearchInterests() {
  return (
    <section id="research" className="relative bg-void py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label justify-center">Research Interests</span>
          <h2 className="section-heading mt-3">Questions worth chasing next</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {researchInterests.map((interest, i) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-card px-4 py-2 text-sm text-ink-muted transition-colors duration-300 hover:border-signal-cyan/50 hover:text-signal-cyan"
            >
              <Microscope size={14} className="text-signal-blue" />
              {interest}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
