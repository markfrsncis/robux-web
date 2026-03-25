'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';
import { skills, timeline } from '../../components/data';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative mx-auto h-72 w-72 rounded-full p-[2px]">
          <div className="absolute inset-0 animate-spin rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 [animation-duration:12s]" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10">
            <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80" alt="Profile" fill className="object-cover" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="text-slate-300">I design and build interactive experiences where visual storytelling meets scalable engineering.</p>
        </div>
      </section>

      <Reveal>
        <section>
          <h2 className="mb-6 text-3xl font-bold text-white">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-1 flex justify-between text-sm text-slate-200"><span>{skill.name}</span><span>{skill.value}%</span></div>
                <div className="h-2 rounded-full bg-white/10">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08 }} className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="mb-6 text-3xl font-bold text-white">Timeline</h2>
          <div className="space-y-3">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-cyan-300">{item.year}</p>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
