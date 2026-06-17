import { Linkedin, Github, Globe, Mail } from 'lucide-react';
import { profile, navLinks } from '../data/portfolioData.js';
import VitalTrace from './VitalTrace.jsx';

const socials = [
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { icon: Linkedin, href: profile.links.linkedin, label: 'LinkedIn' },
  { icon: Github, href: profile.links.github, label: 'GitHub' },
  { icon: Globe, href: profile.links.portfolio, label: 'Portfolio' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-line bg-surface/60">
      <VitalTrace color="#1c2738" height={36} strokeWidth={1.5} glow={false} speed="10s" />

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-medium text-ink">{profile.name}</p>
            <p className="mt-1 max-w-xs text-sm text-ink-muted">
              Biomedical engineering meets artificial intelligence — building toward accessible
              healthcare.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-signal-cyan"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-all hover:border-signal-cyan/50 hover:text-signal-cyan"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] text-ink-dim">
            &copy; {year} {profile.name}. System status: <span className="text-signal-vital">stable</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
