'use client';

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function About() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
            "grid gap-10 lg:grid-cols-2 lg:gap-16 items-center",
            isIntersecting
              ? "animate-in fade-in zoom-in-95 duration-500"
              : "opacity-0"
          )}>
          <Image
            src="/ab.jpg"
            alt="About Plus Marketing"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="max-w-[600px] text-primary md:text-xl/relaxed font-semibold">
              Welcome to Plus Marketing, your Digital Marketing Hub!
            </p>
            <p className="max-w-[600px] text-foreground/70 md:text-lg/relaxed">
              We are a results-driven digital marketing team dedicated to helping businesses grow online through powerful and creative strategies. From social media management and content creation to SEO, Facebook Ads, and Google Ads—we do it all. Our mission is simple: to connect your brand with the right audience and turn clicks into loyal customers.
            </p>
            <p className="max-w-[600px] text-foreground/70 md:text-lg/relaxed">
              Let’s grow your business—digitally, strategically, and successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
