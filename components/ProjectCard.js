import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-card backdrop-blur-md"
    >
      <div className="relative h-56">
        <Image src={project.image} alt={project.title} fill className="object-cover" loading="lazy" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.tech.join(' • ')}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 transition duration-300 group-hover:opacity-100">
        <button
          onClick={() => onSelect?.(project)}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}
