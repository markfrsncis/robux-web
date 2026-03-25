import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' }
];

export default function Contact() {
  return (
    <div className="space-y-10 pb-10">
      <section className="space-y-3 text-center">
        <h1 className="section-title">Let’s work together</h1>
        <p className="text-slate-700 dark:text-slate-300">Tell me about your idea and I’ll help shape it into a standout digital product.</p>
      </section>

      <section className="mx-auto max-w-2xl glass rounded-3xl p-8">
        <form className="space-y-5">
          {['Name', 'Email'].map((label) => (
            <label key={label} className="block text-sm">
              <span className="mb-2 block text-slate-700 dark:text-slate-300">{label}</span>
              <input
                type={label === 'Email' ? 'email' : 'text'}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-sky-400 focus:shadow-glow"
                placeholder={`Your ${label.toLowerCase()}`}
              />
            </label>
          ))}
          <label className="block text-sm">
            <span className="mb-2 block text-slate-700 dark:text-slate-300">Message</span>
            <textarea
              rows="5"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-fuchsia-400 focus:shadow-glow"
              placeholder="Tell me about your project"
            />
          </label>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <section className="flex justify-center gap-4">
        {socials.map(({ icon: Icon, href, label }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.06 }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-full p-3 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </section>
    </div>
  );
}
