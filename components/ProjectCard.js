'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      whileHover={{ rotateX: 4, rotateY: -4, y: -10 }}
      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
      onClick={() => onClick?.(project)}
    >
      <div className="relative h-56">
        <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.description}</p>
        <p className="text-xs text-cyan-300">{project.tech.join(' • ')}</p>
      </div>
    </motion.article>
  );
}
