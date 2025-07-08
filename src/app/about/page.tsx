import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { About } from "@/components/landing/about";
import { Hero } from "@/components/landing/hero";
import { OwnerMessage } from "@/components/landing/owner-message";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <OwnerMessage />
      </main>
      <Footer />
    </div>
  );
}
