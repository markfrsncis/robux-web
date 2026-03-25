import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-100/75 backdrop-blur-xl dark:bg-slate-950/65">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight gradient-text">
          Nova Portfolio
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative px-2 py-1 text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                {link.label}
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-x-1 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400"
                  />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
