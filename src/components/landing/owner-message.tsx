'use client';

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function OwnerMessage() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="owner-message" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
            "grid gap-10 lg:grid-cols-2 lg:gap-16 items-center",
            isIntersecting
              ? "animate-in fade-in zoom-in-95 duration-500"
              : "opacity-0"
          )}>
          <Image
            src="https://placehold.co/400x400.png"
            data-ai-hint="man portrait"
            alt="Ashen Gamage"
            width={400}
            height={400}
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
          />
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">A Message from Our Founder</h2>
            <p className="text-foreground/70 md:text-lg/relaxed">
              I'm Ashen Gamage, a businessman, digital marketer and graphic designer. Aims to start this marketing agency to bring maximum growth through digital marketing to local and foreign businesses. Grow your business digitally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
