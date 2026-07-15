import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCloud from "./components/LogoCloud";
import MobileApp from "./components/MobileApp";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Integrations from "./components/Integrations";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <LogoCloud />
      <MobileApp />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <Integrations />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}