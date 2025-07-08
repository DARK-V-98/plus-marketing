'use client';

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function About() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
            "flex flex-col items-center space-y-6 text-center",
            isIntersecting
              ? "animate-in fade-in zoom-in-95 duration-500"
              : "opacity-0"
          )}>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
            <p className="max-w-[900px] text-primary md:text-xl/relaxed font-semibold">
              Welcome to Plus Marketing, your Digital Marketing Hub!
            </p>
            <p className="max-w-[900px] text-foreground/70 md:text-lg/relaxed">
              We are a results-driven digital marketing team dedicated to helping businesses grow online through powerful and creative strategies. From social media management and content creation to SEO, Facebook Ads, and Google Ads—we do it all. Our mission is simple: to connect your brand with the right audience and turn clicks into loyal customers.
            </p>
            <p className="max-w-[900px] text-foreground/70 md:text-lg/relaxed">
              With a passion for innovation and a deep understanding of digital trends, we offer personalized solutions that deliver measurable success. Whether you're a startup or an established brand, we’re here to elevate your online presence and drive real results.
            </p>
            <p className="max-w-[900px] text-foreground/70 md:text-lg/relaxed">
              Let’s grow your business—digitally, strategically, and successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
