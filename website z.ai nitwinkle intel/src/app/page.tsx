import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Services } from "@/components/sections/services";
import { Outcomes } from "@/components/sections/outcomes";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyNitwinkle } from "@/components/sections/why-nitwinkle";
import { Industries } from "@/components/sections/industries";
import { CTASection } from "@/components/sections/cta";
import { About } from "@/components/sections/about";
import { Insights } from "@/components/sections/insights";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Skip to content: accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <Services />
        <Outcomes />
        <HowWeWork />
        <WhyNitwinkle />
        <Industries />
        <CTASection />
        <About />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
