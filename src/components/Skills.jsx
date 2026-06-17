import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolioData.js';

function SkillBar({ skill, delay }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-ink">{skill.name}</span>
        <span className="font-mono text-xs text-signal-cyan">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-card">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-signal-blue to-signal-cyan"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Skills</span>
          <h2 className="section-heading mt-3">Calibrated capabilities</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="panel p-6"
            >
              <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
                <h3 className="font-display text-base font-medium text-ink">{group.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                  {group.readout}
                </span>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} delay={si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
