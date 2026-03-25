'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">Nova Atelier</Link>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative px-2 py-1 text-sm text-slate-300 hover:text-white">
              {pathname === link.href && <motion.span layoutId="active" className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-cyan-300" />}
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
