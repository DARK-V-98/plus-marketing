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
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to our Digital Marketing Hub!</h2>
          <p className="text-foreground/70 md:text-lg/relaxed">
            We are a results-driven digital marketing team dedicated to helping businesses grow online through powerful and creative strategies. From social media management and content creation to SEO, Facebook Ads, and Google Ads—we do it all. Our mission is simple: to connect your brand with the right audience and turn clicks into loyal customers.
          </p>
           <p className="text-foreground/70 md:text-lg/relaxed">
            With a passion for innovation and a deep understanding of digital trends, we offer personalized solutions that deliver measurable success. Whether you're a startup or an established brand, we’re here to elevate your online presence and drive real results.
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
