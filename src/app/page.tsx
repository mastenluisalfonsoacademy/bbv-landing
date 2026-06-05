import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Pakete from "@/components/Pakete";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BMI from "@/components/BMI";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Strengths />
      <Marquee />
      <Services />
      <Pakete />
      <About />
      <Marquee />
      <Testimonials />
      <BMI />
      <CTA />
      <Footer />
    </main>
  );
}
