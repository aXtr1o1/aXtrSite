import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Services";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { LogoTicker2 } from "@/sections/LogoTicker2";
import { Reviews } from "@/sections/Reviews";
import { CaseStudy } from "@/sections/CaseStudy";

export default function Home() {
  return (
    <div >
      <Header />
      <section id="hero"></section>
      <Hero />
      <section id="services"></section>
      <LogoTicker2 />
      <ProductShowcase />
      <LogoTicker />
      <Testimonials />
      {/*<CaseStudy />*/}
      <section id="testimonials"></section>
      <section className="reviews ">
        {/*<Reviews />*/}
        </section>
      <CallToAction />
      <Footer />
    </div>
  );
}
