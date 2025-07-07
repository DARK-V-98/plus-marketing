import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="font-bold uppercase tracking-wider text-primary">Join the Revolution</p>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none">
                Plus Marketing
              </h1>
              <h2 className="text-2xl font-medium text-foreground/80 sm:text-3xl">
                The first cloud-firewall, built for WFH.
              </h2>
              <p className="max-w-[600px] text-foreground/70 md:text-lg">
                Plus Marketing is simple and easy to use, no IT department required. 
                Your team is automatically secured by our intelligent security system.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="transition-transform hover:scale-105"
              >
                <Link href="#contact" prefetch={false}>
                  Sign Up Now
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10 transition-transform hover:scale-105"
              >
                <Link href="#" prefetch={false}>
                  Read More
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/600x500.png"
              width="600"
              height="500"
              alt="Hero Image"
              data-ai-hint="3d security firewall illustration"
              className="mx-auto overflow-hidden rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
