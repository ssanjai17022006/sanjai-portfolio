import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/portfolioData.js';

const contactCards = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: profile.links.linkedin },
  { icon: Github, label: 'GitHub', href: profile.links.github },
  { icon: Globe, label: 'Portfolio', href: profile.links.portfolio },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="readout-label">Contact</span>
          <h2 className="section-heading mt-3">Open a channel</h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Have a project, internship, or collaboration in mind? Reach out — every message gets a
            response.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="panel flex items-center gap-4 p-5 transition-colors duration-300 hover:border-signal-cyan/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-card">
                    <Icon size={18} className="text-signal-blue" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-dim">{card.label}</p>
                    <p className="text-sm text-ink">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href}>
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-card text-ink-muted transition-all duration-300 hover:border-signal-cyan/50 hover:text-signal-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="panel-elevated space-y-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-ink-dim">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-line bg-surface-card px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal-cyan"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-ink-dim">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-line bg-surface-card px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal-cyan"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-ink-dim">
                Message
              </label>
              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-line bg-surface-card px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-signal-cyan"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              {sent ? (
                <>
                  <CheckCircle2 size={17} /> Opening mail client...
                </>
              ) : (
                <>
                  <Send size={17} /> Send Message
                </>
              )}
            </button>
            <p className="text-xs text-ink-dim">
              Submitting opens your default email client with this message pre-filled, addressed to{' '}
              {profile.email}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
