import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Testimonials } from "@/components/landing/testimonials";
import { AddReviewForm } from "@/components/landing/add-review-form";

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <Header />
      <main className="flex-1">
        <Testimonials />
        <AddReviewForm />
      </main>
      <Footer />
    </div>
  );
}
