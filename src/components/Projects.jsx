import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectFilters } from '../data/portfolioData.js';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Projects</span>
          <h2 className="section-heading mt-3">Builds &amp; diagnostics</h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                filter === f.id
                  ? 'border-signal-cyan bg-signal-cyan/10 text-signal-cyan'
                  : 'border-line text-ink-muted hover:border-ink-dim hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group panel relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-cyan/50 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-signal-blue via-signal-cyan to-signal-vital opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-medium leading-tight text-ink">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-ink-dim transition-colors duration-300 group-hover:text-signal-cyan"
                  />
                </div>

                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-signal-cyan/80">
                  {project.subtitle}
                </p>

                <p className="flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
