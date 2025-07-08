'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Contact() {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white" ref={ref}>
            <div className={cn(
                "container mx-auto px-4 text-center",
                isIntersecting
                ? "animate-in fade-in zoom-in-95 duration-500"
                : "opacity-0"
            )}>
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Set up a Free Meeting For Your Business</h2>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="transition-transform hover:scale-105"
                        >
                            <Link href="#" prefetch={false}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
