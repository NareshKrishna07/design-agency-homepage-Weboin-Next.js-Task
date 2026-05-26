import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/images/ecommerce.png",
    description: "Premium digital shopping experience.",
  },
  {
    title: "Luxury Brand Identity",
    image: "/images/branding.png",
    description: "Modern branding and visual storytelling.",
  },
  {
    title: "Analytics Dashboard",
    image: "/images/dashboard.png",
    description: "Real-time analytics and insights.",
  },
  {
    title: "Mobile Banking UI",
    image: "/images/banking.png",
    description: "Secure fintech experience.",
  },
  {
    title: "SaaS Landing Page",
    image: "/images/saas.png",
    description: "Scalable product-first SaaS UI.",
  },
  {
    title: "Creative Portfolio",
    image: "/images/portfolio.png",
    description: "Elegant premium personal showcase.",
  },
];

export default function Portfolio() {
  return (
    <section className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10">
      {/* Heading */}
      <div className="mb-16 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          OUR WORK
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          Projects That Speak{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            For Themselves
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          A glimpse of premium products, interfaces, and digital
          experiences we’ve built.
        </p>
      </div>

      {/* Wider Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Bigger Width + Same Height */}
            <div className="relative h-[340px] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-3xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                {project.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-gray-400">
                {project.description}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}