import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Newspaper } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <Newspaper className="h-16 w-16 text-primary" />
                    <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
                    <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Insights and stories from the world of digital marketing. Coming Soon!
                    </p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
