import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolioData.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2.5 font-mono text-sm text-ink"
          aria-label="Go to top"
        >
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-signal-cyan/40 bg-surface-card">
            <img src={profile.photo} alt="" className="h-full w-full object-cover object-top" />
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-signal-vital shadow-glow-vital animate-pulse-soft" />
          </span>
          <span className="hidden sm:inline tracking-wide">
            {profile.name} <span className="text-ink-dim">// PORTFOLIO</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                  activeId === link.id ? 'text-signal-cyan' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-signal-cyan shadow-glow"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeFile}
          download
          className="hidden rounded-lg border border-signal-cyan/40 px-4 py-2 font-mono text-xs uppercase tracking-wider text-signal-cyan transition-all hover:bg-signal-cyan/10 lg:inline-flex"
        >
          Resume
        </a>

        <button
          className="text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-void/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`block w-full py-3 text-left font-mono text-sm uppercase tracking-wider ${
                      activeId === link.id ? 'text-signal-cyan' : 'text-ink-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.resumeFile}
                  download
                  className="block w-full rounded-lg border border-signal-cyan/40 px-4 py-3 text-center font-mono text-xs uppercase tracking-wider text-signal-cyan"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
