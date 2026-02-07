import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Flowcharts from "../components/Flowcharts";
import Metrics from "../components/Metrics";
import Logos from "../components/Logos";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="text-[var(--text-dark)]">
      <Navbar />
      <Hero />
      <Flowcharts />
      <Metrics />
      <Logos />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

