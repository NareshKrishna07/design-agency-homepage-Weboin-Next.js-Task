import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen mx-auto max-w-7xl px-6 md:px-10">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <Services />
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      >
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}