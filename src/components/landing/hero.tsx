import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Elevate Your Brand with Modern Marketing & Design
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                We blend creativity with technology to deliver impactful
                digital marketing and stunning graphic design. Let's build
                something amazing together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="transition-transform hover:scale-105"
              >
                <Link href="#contact" prefetch={false}>
                  Start a Project
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transition-transform hover:scale-105"
              >
                <Link href="#portfolio" prefetch={false}>
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            width="600"
            height="400"
            alt="Hero Image"
            data-ai-hint="digital marketing abstract"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
