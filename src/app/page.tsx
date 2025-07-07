import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Portfolio } from "@/components/landing/portfolio";
import { Testimonials } from "@/components/landing/testimonials";
import { Clients } from "@/components/landing/blog";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
