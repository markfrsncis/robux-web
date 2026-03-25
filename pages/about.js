import Image from 'next/image';
import { motion } from 'framer-motion';
import { skills, timeline } from '../components/data';

export default function About() {
  return (
    <div className="space-y-16 pb-10">
      <section className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-fuchsia-400/30 shadow-glow">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80"
            alt="Profile"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="section-title">About Me</h1>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            I’m a multidisciplinary creator focused on polished interfaces, thoughtful UX, and meaningful interaction design.
            My process combines research, rapid prototyping, and animation craft to bring brands to life.
          </p>
        </div>
      </section>

      <section>
        <h2 className="section-title">Skills</h2>
        <div className="mt-8 space-y-5">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Timeline</h2>
        <div className="mt-8 space-y-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="glass rounded-2xl p-5"
            >
              <p className="text-sm text-sky-300">{item.year}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
