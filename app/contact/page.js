'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import MagneticButton from '../../components/MagneticButton';

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3 text-center">
        <h1 className="text-4xl font-bold text-white">Let’s build something unforgettable.</h1>
        <p className="text-slate-300">Tell me your vision and I’ll shape it into a standout digital experience.</p>
      </section>

      <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <form className="space-y-4">
          <input className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400" placeholder="Name" />
          <input className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-fuchsia-400" placeholder="Email" type="email" />
          <textarea className="w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-indigo-400" rows={5} placeholder="Message" />
          <MagneticButton type="submit">Send Message</MagneticButton>
        </form>
      </section>

      <section className="flex justify-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-200 transition hover:-translate-y-1 hover:text-cyan-300">
            <Icon size={20} />
          </a>
        ))}
      </section>
    </div>
  );
}
