import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../components/data';

const filters = ['All', 'Web', 'Apps', 'UI'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-10 pb-10">
      <section className="space-y-5">
        <h1 className="section-title">Projects</h1>
        <p className="max-w-2xl text-slate-700 dark:text-slate-300">
          A curated selection of web builds, app interfaces, and design-forward product work.
        </p>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeFilter === filter ? 'bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white' : 'glass text-slate-700 dark:text-slate-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass max-w-xl rounded-3xl p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{selectedProject.description}</p>
              <p className="mt-4 text-sm text-sky-300">Tech: {selectedProject.tech.join(', ')}</p>
              <button onClick={() => setSelectedProject(null)} className="mt-6 rounded-full border border-white/20 px-4 py-2 text-sm">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
