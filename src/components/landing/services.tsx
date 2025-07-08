'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PenTool, TrendingUp, Target, Share2, FileText, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function Services() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Brand Identity",
      description: "Crafting unique visual identities that tell your brand's story and resonate with your audience.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Search Engine Optimization (SEO)",
      description: "Increase your visibility on search engines and attract organic traffic with our proven SEO strategies.",
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Paid Advertising (PPC)",
        description: "Get immediate, targeted traffic with expertly managed Google Ads and social media advertising campaigns.",
    },
    {
        icon: <Share2 className="h-8 w-8 text-primary" />,
        title: "Social Media Marketing",
        description: "Build a thriving online community and engage your customers across platforms like Instagram, Facebook, and more.",
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Content Marketing",
        description: "Fuel your brand with high-quality content that educates, entertains, and converts.",
    },
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        title: "Email Marketing",
        description: "Nurture leads and build customer loyalty with personalized email campaigns that deliver value.",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center",
            isIntersecting
              ? "animate-in fade-in slide-in-from-bottom-12 duration-500"
              : "opacity-0"
          )}>
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm uppercase">Our Services</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a complete suite of marketing and design services to help your business thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title} style={{ animationDelay: `${index * 150}ms` }} className={cn(
              "p-4 text-left rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-xl",
              isIntersecting
                ? "animate-in fade-in zoom-in-95"
                : "opacity-0"
              )}>
              <CardHeader className="p-2">
                  {feature.icon}
              </CardHeader>
              <CardContent className="grid gap-2 p-2">
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-foreground/60">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
