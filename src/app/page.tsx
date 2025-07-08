import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Testimonials } from "@/components/landing/testimonials";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { About } from "@/components/landing/about";
import { AddReviewForm } from "@/components/landing/add-review-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <AddReviewForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
