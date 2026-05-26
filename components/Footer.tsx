import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-center">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Astra
              </span>{" "}
              <span className="text-white">Studio</span>
            </h2>

            <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
              Building premium digital experiences through creative design,
              modern development, and meaningful brand strategy.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-start gap-6 md:justify-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition duration-300 hover:text-cyan-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Small CTA / Status */}
          <div className="md:text-right">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              ✨ Open for Projects
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Astra Studio. All rights reserved.</p>

          <p className="text-gray-500">
            Crafted with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}