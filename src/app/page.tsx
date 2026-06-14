import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutCard } from "@/components/AboutCard";
import { BentoGrid } from "@/components/BentoGrid";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-[var(--color-neon-green)] selection:text-black">
      <CustomCursor />
      <MouseSpotlight />
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <AboutCard />
        <BentoGrid />
      </div>
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
