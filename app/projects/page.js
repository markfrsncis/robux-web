'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../components/data';

const filters = ['All', 'Web', 'Apps', 'UI'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => (active === 'All' ? projects : projects.filter((project) => project.category === active)), [active]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActive(filter)} className={`rounded-full px-4 py-2 text-sm ${active === filter ? 'bg-cyan-400 text-slate-900' : 'border border-white/20 text-slate-200'}`}>
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
              <ProjectCard project={project} onClick={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="max-w-lg rounded-3xl border border-white/10 bg-slate-900/95 p-6" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-semibold text-white">{selected.title}</h3>
              <p className="mt-2 text-slate-300">{selected.description}</p>
              <p className="mt-4 text-sm text-cyan-300">{selected.tech.join(' • ')}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
