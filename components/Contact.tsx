export default function Contact() {
  return (
    <section className="relative flex justify-center px-6 py-16 md:px-10">
      <div className="w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-pink-300">
          CONTACT US
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Exceptional
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
          Have an idea, product, or brand vision? Reach out and let’s create a
          digital experience that stands out.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid gap-10 justify-center md:grid-cols-2">
        {/* LEFT INFO PANEL */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          
          {/* Glow */}
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative space-y-8">
            <h3 className="text-3xl font-bold text-white">
              Start Your Next Project
            </h3>

            <p className="leading-relaxed text-gray-300">
              Whether it’s web development, branding, or digital strategy,
              Astra Studio helps transform ideas into polished digital
              experiences.
            </p>

            {/* Contact cards */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Email</p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  hello@astrastudio.com
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Phone</p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  +91 98765 43210
                </h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400">Response Time</p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  Usually within 24 Hours
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl md:p-10">
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-400 placeholder:opacity-80 placeholder:text-base focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 leading-6 min-h-[3.5rem]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-400 placeholder:opacity-80 placeholder:text-base focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 leading-6 min-h-[3.5rem]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                rows={6}
                required
                placeholder="Tell us about your project..."
                className="w-full appearance-none resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-400 placeholder:opacity-80 placeholder:text-base focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 leading-6 min-h-[14rem]"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-purple-500/30"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-gray-400">
              We usually respond within one business day.
            </p>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}