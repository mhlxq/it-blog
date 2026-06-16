import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-900 pb-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center font-bold text-white text-sm">
              IT
            </div>
            <span className="text-base font-semibold tracking-tight text-white">
              IT Blog<span className="text-indigo-500">.</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/" className="text-zinc-400 hover:text-white transition-colors">Головна</a>
            <a href="/#articles" className="text-zinc-400 hover:text-white transition-colors">Статті</a>
            <a href="/about" className="text-zinc-400 hover:text-white transition-colors">Про нас</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} IT Blog. Всі права захищено.</span>
          <div className="flex items-center gap-6">
            <span>Побудовано на Next.js App Router (SSR) & Express</span>
            <span>Курс "SEO та пошукова оптимізація"</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
