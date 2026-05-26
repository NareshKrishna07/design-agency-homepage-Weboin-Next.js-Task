"use client";

import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-5 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Astra
          </span>
          <span className="text-white"> Studio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-gray-300 transition duration-300 hover:text-white"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-purple-500/30 md:block"
        >
          Let’s Talk
        </Link>

        {/* Mobile Menu Icon */}
        <button className="flex flex-col gap-1 md:hidden">
          <span className="h-[2px] w-6 bg-white rounded-full" />
          <span className="h-[2px] w-6 bg-white rounded-full" />
          <span className="h-[2px] w-6 bg-white rounded-full" />
        </button>
      </nav>
    </header>
  );
}