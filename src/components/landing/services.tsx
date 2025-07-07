import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Megaphone, PenTool } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Digital Marketing",
      description: "From SEO and PPC to social media and content marketing, we drive results that matter. Our data-driven strategies are designed to boost your visibility and grow your business online.",
      tags: ["SEO & SEM", "Social Media", "Content Marketing", "Email Campaigns"],
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Graphic Design",
      description: "We create compelling visual identities and marketing materials that tell your story. Our design services include branding, web design, and print materials that captivate and convert.",
      tags: ["Branding", "UI/UX Design", "Print Design", "Illustrations"],
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Do Best</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a complete suite of services to help your brand shine in the digital world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-2 mt-12">
          {services.map((service) => (
            <Card key={service.title} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <div className="grid gap-1">
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <div key={tag} className="text-xs font-medium bg-muted text-muted-foreground rounded-full px-3 py-1">{tag}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
