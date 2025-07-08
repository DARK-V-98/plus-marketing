import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Services } from "@/components/landing/services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <Header />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
