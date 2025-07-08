'use client';

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  const portfolioItems = [
    { src: 'https://placehold.co/600x400.png', alt: 'Graduates', hint: 'graduates diploma', title: 'Education' },
    { src: 'https://placehold.co/600x400.png', alt: 'City Diorama', hint: 'city diorama', title: 'Real Estate' },
    { src: 'https://placehold.co/600x400.png', alt: 'Woman Traveling', hint: 'woman travel', title: 'Travel & Tourism' },
    { src: 'https://placehold.co/600x400.png', alt: 'Friends Shopping', hint: 'friends shopping', title: 'Retail & E-commerce' },
  ];

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className={cn(
            "space-y-4", 
            isIntersecting 
              ? "animate-in fade-in slide-in-from-left-12 duration-500" 
              : "opacity-0"
          )}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Expansive areas of Expertise</h2>
          <p className="text-primary-foreground/80 md:text-lg/relaxed">
            We have a proven track record of delivering outstanding results for a diverse range of clients across various industries. Our expertise spans from boosting local startups to scaling international brands. We tailor our strategies to fit the unique ecosystem of each sector, ensuring impactful and relevant marketing solutions.
          </p>
        </div>
        <div className={cn(
            "grid grid-cols-2 gap-4", 
            isIntersecting 
              ? "animate-in fade-in slide-in-from-right-12 duration-500" 
              : "opacity-0"
          )}>
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <Image
                src={item.src}
                width={600}
                height={400}
                alt={item.alt}
                data-ai-hint={item.hint}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
