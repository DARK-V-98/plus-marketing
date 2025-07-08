import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Testimonials } from "@/components/landing/testimonials";
import { Portfolio } from "@/components/landing/portfolio";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { OwnerMessage } from "@/components/landing/owner-message";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <OwnerMessage />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
