'use client';

import { Card } from "@/components/ui/card";
import { Megaphone, CodeXml, Palette } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Services() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Digital Marketing Services",
      description: "Comprehensive strategies including SEO, SEM, and social media to boost your online presence.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Graphic Design",
      description: "Creating visually stunning designs that capture your brand's essence and message.",
    },
    {
      icon: <CodeXml className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Creating responsive, high-performance websites that deliver exceptional user experiences.",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className={cn(
          "space-y-4",
          isIntersecting ? "animate-in fade-in slide-in-from-left-12 duration-500" : "opacity-0"
        )}>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Services</h2>
          <p className="text-primary-foreground/80 md:text-xl/relaxed">
            We offer a focused suite of services designed to deliver maximum impact: comprehensive digital marketing, stunning graphic design, and robust web development. We provide the essential tools to build and grow your brand online.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              style={{ animationDelay: `${index * 150}ms` }} 
              className={cn(
                "bg-card text-card-foreground p-6 text-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
                isIntersecting ? "animate-in fade-in zoom-in-95" : "opacity-0"
            )}>
              <div className="flex flex-col gap-4">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                  <p className="text-card-foreground/70">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
