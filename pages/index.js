import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../components/data';

export default function Home() {
  return (
    <div className="space-y-24 pb-10">
      <section className="grid min-h-[80vh] place-items-center text-center">
        <div className="space-y-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm uppercase tracking-[0.2em] text-sky-300">
            Creative Developer
          </motion.p>
          <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
            Building <span className="gradient-text">immersive digital experiences</span> that people remember.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-700 dark:text-slate-300">
            I blend frontend engineering, UI motion, and storytelling to craft delightful, premium web products.
          </p>
          <Link href="/projects">
            <Button>Explore My Work</Button>
          </Link>
          <div className="flex justify-center pt-8 text-slate-400">
            <ChevronDown className="animate-bounce" />
          </div>
        </div>
      </section>

      <section className="space-y-6" id="featured">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-8 md:p-12">
        <h2 className="section-title">A quick intro</h2>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          I collaborate with founders and product teams to turn ideas into expressive, scalable interfaces with a strong user-first approach.
        </p>
      </section>
    </div>
  );
}
