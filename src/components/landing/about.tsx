'use client';

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function About() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className={cn(
            "space-y-4 text-center lg:text-left", 
            isIntersecting 
              ? "animate-in fade-in slide-in-from-left-12 duration-500" 
              : "opacity-0"
          )}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="font-bold uppercase tracking-wider text-primary">
            Your Strategic Marketing Partner
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            We are a team of passionate marketers and creative thinkers dedicated to one thing: driving growth for your business. In today's digital landscape, a strong online presence is non-negotiable. We specialize in creating multi-channel marketing strategies that not only reach but also resonate with your target audience.
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            Our expertise spans the full marketing spectrum, from search engine optimization (SEO) and pay-per-click (PPC) advertising to engaging social media campaigns and compelling content marketing. We believe in a data-first approach, using analytics to inform our strategies and ensure every campaign is optimized for maximum return on investment.
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            Partner with us to transform your digital presence, build lasting customer relationships, and achieve sustainable growth.
          </p>
        </div>
        <div className={cn(
            "flex justify-center", 
            isIntersecting 
              ? "animate-in fade-in slide-in-from-right-12 duration-500" 
              : "opacity-0"
          )}>
            <Image
              src="/logo1.jpeg"
              width={400}
              height={400}
              alt="Plus Marketing Logo"
              data-ai-hint="company logo"
              className="rounded-full aspect-square object-cover"
            />
        </div>
      </div>
    </section>
  );
}
