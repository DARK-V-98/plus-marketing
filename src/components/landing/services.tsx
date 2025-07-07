import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PenTool, Megaphone, LayoutTemplate } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Brand Identity",
      description: "Crafting unique visual identities that tell your brand's story and resonate with your audience.",
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Digital Marketing",
      description: "Engaging your audience through targeted campaigns across all digital channels.",
    },
    {
      icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
      title: "Web Design & Dev",
      description: "Building beautiful, responsive, and high-performing websites that convert.",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm uppercase">Our Services</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a complete suite of marketing and design services to help your business thrive.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-white/5 border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl text-left p-4">
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
