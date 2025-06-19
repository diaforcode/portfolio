// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="relative text-white text-center py-16 mt-24 overflow-hidden">
      <div className="relative z-10">
        <p className="text-white/80 text-sm">
          &copy; {new Date().getFullYear()} Diyaa Zehana. All rights reserved.
        </p>
        <p className="mt-2 text-white/40 text-xs">
          Built with Next.js, Tailwind CSS & Three.js
        </p>
      </div>
    </footer>
  );
}
