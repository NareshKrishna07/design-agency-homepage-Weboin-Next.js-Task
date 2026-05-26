export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Crafting intuitive and visually stunning interfaces that improve user experience and engagement.",
    },
    {
      icon: "💻",
      title: "Web Development",
      desc: "Building fast, scalable, and responsive websites tailored for modern digital businesses.",
    },
    {
      icon: "🚀",
      title: "Branding",
      desc: "Creating memorable brand identities that help businesses stand out in competitive markets.",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      desc: "Driving growth with strategy-focused campaigns, visibility optimization, and engagement tactics.",
    },
  ];

  return (
    <section className="relative">
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-300">
          OUR SERVICES
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Creative Solutions That{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Drive Growth
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
          We blend creativity, technology, and strategy to deliver digital
          experiences that help businesses grow stronger and faster.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-purple-400/20 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]"
          >
            {/* Glow Background */}
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-3xl backdrop-blur-md border border-white/10">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-semibold text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed text-gray-300">
              {service.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}