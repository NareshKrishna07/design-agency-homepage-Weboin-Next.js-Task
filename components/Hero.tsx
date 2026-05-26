import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 py-16 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
            ✨ Creative Digital Agency
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            We Build{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Bold Digital
            </span>{" "}
            Experiences
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Astra Studio crafts premium websites, brand identities, and
            interactive experiences that help businesses stand out.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#portfolio"
              className="rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-4 font-semibold text-white"
            >
              View Work
            </Link>

            <Link
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative h-[350px] w-[350px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_rgba(124,58,237,0.16)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
            <Image
              src="/images/body.png"
              alt="Illustration of digital workspace"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute -bottom-8 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}