import { skills, timeline } from '../components/data';

export default function About() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="max-w-3xl text-slate-600">
          I’m a frontend developer focused on building clear interfaces and practical user experiences.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill.name} className="rounded-md border border-slate-200 bg-white p-3 text-sm">
              {skill.name} — {skill.value}%
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Timeline</h2>
        <ul className="space-y-2">
          {timeline.map((item) => (
            <li key={item.year} className="rounded-md border border-slate-200 bg-white p-3">
              <p className="text-sm text-slate-500">{item.year}</p>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-slate-600">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
