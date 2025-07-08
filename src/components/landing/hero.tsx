'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Hero() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      className="w-full py-24 md:py-32 lg:py-40 bg-cover bg-center"
      style={{ backgroundImage: "url('/managing-director.jpeg')" }}
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          "flex flex-col items-center justify-center space-y-6 text-center text-white",
          isIntersecting 
            ? "animate-in fade-in zoom-in-95 duration-500" 
            : "opacity-0"
        )}>
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none">
              Elevate Your Digital Presence
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl">
              Plus Marketing is your dedicated partner for digital growth. We craft data-driven strategies to elevate your brand and connect with your audience.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              size="lg"
              className="transition-transform hover:scale-105"
            >
              <Link href="#contact" prefetch={false}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
