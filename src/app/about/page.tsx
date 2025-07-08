import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { About } from "@/components/landing/about";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
