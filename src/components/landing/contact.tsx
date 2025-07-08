'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Contact() {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
            <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left lg:gap-16">
                <div className={cn(
                  "space-y-6",
                  isIntersecting
                    ? "animate-in fade-in slide-in-from-left-12 duration-500"
                    : "opacity-0"
                )}>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Grow Your Revenue?</h2>
                    <p className="mx-auto max-w-[600px] text-foreground/70 md:text-xl/relaxed lg:mx-0 lg:text-base/relaxed xl:text-xl/relaxed">
                        Let's build a marketing strategy that drives results. We're ready to dive into your business goals and help you achieve them with a custom marketing plan. Schedule a free consultation to get started.
                    </p>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                        <Button
                            asChild
                            size="lg"
                            className="transition-transform hover:scale-105"
                        >
                            <Link href="#" prefetch={false}>
                                Get a Free Consultation
                            </Link>
                        </Button>
                    </div>
                </div>
                <Image
                    src="https://placehold.co/550x550.png"
                    width={550}
                    height={550}
                    alt="App Promo"
                    data-ai-hint="design agency meeting"
                    className={cn(
                      "mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last",
                      isIntersecting
                        ? "animate-in fade-in slide-in-from-right-12 duration-500"
                        : "opacity-0"
                    )}
                />
            </div>
        </section>
    );
}
