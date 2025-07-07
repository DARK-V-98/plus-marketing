import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Growth",
      category: "Digital Marketing",
      description: "We implemented a multi-channel digital marketing strategy that resulted in a 150% increase in organic traffic and a 200% boost in online sales for this growing e-commerce brand.",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "online store analytics"
    },
    {
      title: "Tech Startup Branding",
      category: "Graphic Design",
      description: "From logo design to a complete brand style guide, we crafted a modern and memorable identity for this innovative tech startup, setting them up for a successful launch.",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "modern logo laptop"
    },
    {
      title: "SaaS Campaign",
      category: "Digital Marketing",
      description: "Our targeted lead generation campaign for a B2B SaaS company exceeded their MQL goals by 50% within three months, utilizing a mix of content marketing and paid social.",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "software dashboard"
    },
    {
      title: "Restaurant Rebrand",
      category: "Graphic Design",
      description: "We revitalized a local restaurant's brand with a fresh new look, including menu design, signage, and packaging that helped them attract a new generation of diners.",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "restaurant menu design"
    },
  ];

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Interactive Portfolio</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore a selection of our favorite projects.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src={project.imageSrc}
                width={500}
                height={350}
                alt={`Portfolio project: ${project.title}`}
                data-ai-hint={project.aiHint}
                className="w-full object-cover aspect-[5/3.5] transition-transform duration-300 group-hover:scale-105"
              />
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-sm font-semibold text-primary">{project.category}</p>
                  <h3 className="mt-2 font-headline text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </div>
                <Button asChild variant="secondary" size="sm" className="mt-4 self-start">
                  <Link href="#" prefetch={false}>View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
