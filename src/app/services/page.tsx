import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { DetailedServices } from "@/components/landing/detailed-services";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <DetailedServices />
      </main>
      <Footer />
    </div>
  );
}
