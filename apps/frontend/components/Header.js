import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-white text-lg tracking-wider">IT</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors duration-200">
              Blog<span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Головна</a>
            <a href="/#articles" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Статті</a>
            <a href="/about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Про нас</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Input (Visual Placeholder) */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Пошук статей..."
              className="w-60 h-9 pl-9 pr-4 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder:text-zinc-500"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Admin Panel Button */}
          <a
            href="/admin"
            className="px-4 h-9 flex items-center justify-center rounded-lg border border-zinc-800 text-xs font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all"
          >
            Адмін Панель
          </a>
        </div>
      </div>
    </header>
  );
}
