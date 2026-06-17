import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderGit2, Send } from 'lucide-react';
import { profile, stats } from '../data/portfolioData.js';
import { useTypewriter } from '../hooks/useTypewriter.js';
import { useCountUp } from '../hooks/useCountUp.js';
import ParticleBackground from './ParticleBackground.jsx';
import VitalTrace from './VitalTrace.jsx';
import PortraitFrame from './PortraitFrame.jsx';

function ReadoutStat({ stat, started }) {
  const isCount = stat.type === 'count';
  const value = useCountUp(isCount ? stat.value : 0, started && isCount, 1500);

  return (
    <div className="panel flex flex-col items-center px-4 py-4 sm:px-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-dim">{stat.unit}</span>
      {isCount ? (
        <span className="mt-1 font-mono text-2xl font-semibold text-signal-cyan sm:text-3xl">
          {value}
          {stat.suffix}
        </span>
      ) : (
        <span className="mt-1 flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-signal-vital sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-vital shadow-glow-vital animate-pulse-soft" />
          Active
        </span>
      )}
      <span className="mt-1 text-center text-[11px] text-ink-muted">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles, { pause: 1800 });
  const [started] = useState(true);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-void pt-28 pb-20"
    >
      <div className="absolute inset-0 grid-backdrop opacity-60" />
      <div className="absolute inset-0">
        <ParticleBackground density={50} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-signal-cyan/30 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-signal-blue/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="readout-label mb-6"
            >
              Live Status &mdash; Online
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-signal-blue via-signal-cyan to-signal-vital bg-clip-text text-transparent">
                Sanjai S
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 h-8 font-mono text-lg text-signal-cyan sm:text-xl"
            >
              <span>{typed}</span>
              <span className="animate-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-2xl text-balance text-base text-ink-muted sm:text-lg"
            >
              {profile.heroSummary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href={profile.resumeFile} download className="btn-primary">
                <Download size={17} /> Download Resume
              </a>
              <button onClick={scrollToProjects} className="btn-secondary">
                <FolderGit2 size={17} /> View Projects
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                <Send size={17} /> Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-14"
            >
              <div className="mb-3">
                <VitalTrace color="#3b82f6" height={56} strokeWidth={2} speed="6s" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <ReadoutStat key={stat.label} stat={stat} started={started} />
                ))}
              </div>
            </motion.div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <PortraitFrame src={profile.photo} alt={`${profile.name} — portrait`} />
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-dim transition-colors hover:text-signal-cyan"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
