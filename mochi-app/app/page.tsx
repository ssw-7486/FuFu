import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OriginStory from "@/components/OriginStory";
import LifeCycle from "@/components/LifeCycle";
import LifeCycleSketch from "@/components/LifeCycleSketch";
import WhyTofu from "@/components/WhyTofu";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OriginStory />

      {/* A/B: Flat version */}
      <section className="py-4 bg-white">
        <div className="max-w-[980px] mx-auto px-5">
          <p className="text-xs font-medium tracking-widest text-brand-primary uppercase mb-2">variant a — flat</p>
        </div>
        <LifeCycle />
      </section>

      {/* A/B: Sketch version */}
      <section className="py-4 bg-white">
        <div className="max-w-[980px] mx-auto px-5">
          <p className="text-xs font-medium tracking-widest text-brand-primary uppercase mb-2">variant b — sketch</p>
        </div>
        <LifeCycleSketch />
      </section>

      <WhyTofu />
      <Testimonials />
      <Footer />
    </main>
  );
}
