import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Portfolio } from "@/components/landing/portfolio";
import { BriefOptimizer } from "@/components/landing/brief-optimizer";
import { Testimonials } from "@/components/landing/testimonials";
import { Blog } from "@/components/landing/blog";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <BriefOptimizer />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
