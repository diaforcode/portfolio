// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-zinc-700 dark:text-white/80">
          &copy; {new Date().getFullYear()} Diyaa Zehana. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-zinc-500 dark:text-white/40">
          Built with Next.js, Tailwind CSS & Three.js
        </p>
      </div>
    </footer>
  );
}
