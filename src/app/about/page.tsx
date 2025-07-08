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
                  Vise Global - Your Trusted Digital Marketing And Web Design Company In Sri Lanka.
                </h1>
                <p className="text-primary font-semibold">ABOUT US</p>
                <p className="text-foreground/70 md:text-lg/relaxed">
                  We are a team of passionate marketers, designers, and developers dedicated to helping businesses thrive in the digital world. Our journey began with a simple mission: to provide transparent, results-oriented digital marketing and web solutions that empower our clients to achieve their goals.
                </p>
                <p className="text-foreground/70 md:text-lg/relaxed">
                  In today's fast-paced digital landscape, a strong online presence is not just an advantage; it's a necessity. We specialize in crafting bespoke strategies that are tailored to the unique needs of each client. From small startups to large enterprises, we believe every business deserves a digital strategy that delivers real, measurable results. Our commitment to excellence and innovation has made us a trusted partner for businesses across Sri Lanka and beyond.
                </p>
                 <p className="text-foreground/70 md:text-lg/relaxed">
                  Our core values are collaboration, integrity, and a relentless focus on our clients' success. We work closely with you to understand your vision and challenges, becoming an extension of your team to drive growth and build lasting success together.
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
