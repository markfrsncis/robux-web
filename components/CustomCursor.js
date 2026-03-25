'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/90 mix-blend-screen md:block"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="pointer-events-none fixed z-[99] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-2xl md:block"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
