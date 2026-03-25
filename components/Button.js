import { motion } from 'framer-motion';

export default function Button({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
