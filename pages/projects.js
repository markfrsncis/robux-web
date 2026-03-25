import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../components/data';

const filters = ['All', 'Web', 'Apps', 'UI'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-md px-3 py-2 text-sm ${activeFilter === filter ? 'bg-blue-600 text-white' : 'border border-slate-300 bg-white text-slate-700'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
