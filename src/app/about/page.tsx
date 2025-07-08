import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                 A Managing Director's Message
                </h1>
                <p className="text-primary font-semibold">A WORD FROM OUR LEADER</p>
                <p className="text-foreground/70 md:text-lg/relaxed">
                  We are a results-driven digital marketing team dedicated to helping businesses grow online through powerful and creative strategies. From social media management and content creation to SEO, Facebook Ads, and Google Ads—we do it all. Our mission is simple: to connect your brand with the right audience and turn clicks into loyal customers.
                </p>
                <p className="text-foreground/70 md:text-lg/relaxed">
                 With a passion for innovation and a deep understanding of digital trends, we offer personalized solutions that deliver measurable success. Whether you're a startup or an established brand, we’re here to elevate your online presence and drive real results.
                </p>
                 <p className="text-foreground/70 md:text-lg/relaxed">
                  Let’s grow your business—digitally, strategically, and successfully.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                 <Image
                    src="https://placehold.co/550x350.png"
                    width={550}
                    height={350}
                    alt="Office"
                    data-ai-hint="modern office interior"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <Image
                    src="https://placehold.co/550x350.png"
                    width={550}
                    height={350}
                    alt="Team working"
                    data-ai-hint="diverse team working"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
