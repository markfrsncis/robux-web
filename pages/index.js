import Link from 'next/link';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../components/data';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Hi, I’m Alex.</h1>
        <p className="max-w-2xl text-slate-600">Creative Developer building clean, user-friendly web experiences.</p>
        <Link href="/projects">
          <Button>Explore My Work</Button>
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
