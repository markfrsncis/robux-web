'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,121,249,.14),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,.2),transparent_36%),radial-gradient(circle_at_50%_80%,rgba(129,140,248,.16),transparent_45%)]" />
      <motion.div className="absolute -left-20 top-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" animate={{ y: [0, -28, 0], x: [0, 32, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <motion.div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" animate={{ y: [0, 22, 0], x: [0, -28, 0] }} transition={{ duration: 16, repeat: Infinity }} />
    </div>
  );
}
