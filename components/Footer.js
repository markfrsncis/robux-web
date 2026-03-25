export default function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-6xl border-t border-white/10 px-6 py-8 text-sm text-slate-600 dark:text-slate-400">
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <p>© {new Date().getFullYear()} Nova Portfolio. Crafted with intent.</p>
        <p>Designed for modern, premium web experiences.</p>
      </div>
    </footer>
  );
}
