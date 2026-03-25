'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from '../components/MagneticButton';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projects } from '../components/data';

export default function HomePage() {
  const title = 'A Creative Developer Experience'.split(' ');

  return (
    <div className="space-y-24">
      <section className="relative grid min-h-[82vh] place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
        <motion.div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(56,189,248,.12),rgba(217,70,239,.14),rgba(99,102,241,.15))] bg-[length:180%_180%] animate-gradientShift" />
        <div className="space-y-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Creative Developer
          </motion.p>
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            {title.map((word, index) => (
              <motion.span key={word + index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="mr-3 inline-block">
                {word}
              </motion.span>
            ))}
            <span className="block bg-gradient-to-r from-fuchsia-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">for bold digital brands.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-300">Immersive interfaces with motion, depth, and storytelling that impress in seconds.</p>
          <Link href="/projects">
            <MagneticButton>Explore My Work</MagneticButton>
          </Link>
        </div>
      </section>

      <Reveal>
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <Link href="/projects" className="text-cyan-300">View all →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
