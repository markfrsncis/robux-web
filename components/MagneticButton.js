'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({ children, className = '', ...props }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 14 });
  const y = useSpring(my, { stiffness: 180, damping: 14 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    my.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  return (
    <motion.button
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-neon ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
