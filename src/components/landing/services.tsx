'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, BarChart3, Gauge, CodeXml } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Services() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Social Media Marketing",
      description: "Harnessing social platforms to build brand presence and drive engagement.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Search Engine Marketing",
      description: "Driving targeted traffic and generating leads through paid search campaigns.",
    },
    {
        icon: <Gauge className="h-8 w-8 text-primary" />,
        title: "Search Engine Optimization",
        description: "Improving organic visibility and ranking on search engine result pages.",
    },
    {
        icon: <CodeXml className="h-8 w-8 text-primary" />,
        title: "Website Development",
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
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Get the perfect digital solution for your business with us.</h2>
          <p className="text-primary-foreground/80 md:text-xl/relaxed">
            Our comprehensive suite of services is designed to elevate your brand's digital footprint. We specialize in creating impactful strategies that drive engagement, generate leads, and deliver measurable results. From Social Media and SEO to paid campaigns, we cover all aspects of digital marketing to ensure your business thrives online.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
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
