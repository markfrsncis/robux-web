import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="relative h-40 w-full">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-semibold text-slate-900">{project.title}</h3>
        <p className="text-sm text-slate-600">{project.description}</p>
        <p className="text-xs text-slate-500">{project.tech.join(', ')}</p>
      </div>
    </article>
  );
}
