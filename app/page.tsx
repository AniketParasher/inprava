import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import WhyInprava from "./components/WhyInprava";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5064D6] via-[#6B73E8] to-[#C18BEA]">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute right-0 top-40 w-[600px] h-[600px] rounded-full bg-pink-300/20 blur-3xl" />
          <div className="absolute left-1/2 bottom-0 w-[500px] h-[500px] -translate-x-1/2 rounded-full bg-purple-300/10 blur-3xl" />
        </div>

        <Navbar />
        <Hero />
      </section>

      <ServicesGrid />
      <WhyInprava />
      <CTABanner />
      <Footer />
    </main>
  );
}
