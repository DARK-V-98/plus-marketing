'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function About() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className={cn(
            "space-y-4", 
            isIntersecting 
              ? "animate-in fade-in slide-in-from-left-12 duration-500" 
              : "opacity-0"
          )}>
          <p className="font-bold uppercase tracking-wider text-primary">
            About Us
          </p>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vise Global - Your Trusted Digital Marketing And Web Design Company In Sri Lanka.</h2>
          <p className="text-foreground/70 md:text-lg/relaxed">
            We are a team of passionate marketers, designers, and developers dedicated to helping businesses thrive in the digital world. Our journey began with a simple mission: to provide transparent, results-oriented digital marketing and web solutions that empower our clients to achieve their goals.
          </p>
           <p className="text-foreground/70 md:text-lg/relaxed">
            In today's fast-paced digital landscape, a strong online presence is not just an advantage; it's a necessity. We specialize in crafting bespoke strategies that are tailored to the unique needs of each client. From small startups to large enterprises, we believe every business deserves a digital strategy that delivers real, measurable results.
          </p>
          <Button asChild>
            <Link href="/about">View More</Link>
          </Button>
        </div>
        <div className={cn(
            "flex justify-center", 
            isIntersecting 
              ? "animate-in fade-in slide-in-from-right-12 duration-500" 
              : "opacity-0"
          )}>
            <Image
              src="https://placehold.co/550x650.png"
              width={550}
              height={650}
              alt="Team Meeting"
              data-ai-hint="team meeting office"
              className="rounded-xl aspect-[4/5] object-cover"
            />
        </div>
      </div>
    </section>
  );
}
