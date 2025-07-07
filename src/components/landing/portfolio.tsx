import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce Growth",
      category: "Digital Marketing",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "online store analytics"
    },
    {
      title: "Tech Startup Branding",
      category: "Graphic Design",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "modern logo laptop"
    },
    {
      title: "SaaS Campaign",
      category: "Digital Marketing",
      imageSrc: "https://placehold.co/500x350.png",
      aiHint: "software dashboard"
    },
    {
      title: "Restaurant Rebrand",
      category: "Graphic Design",
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
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={project.imageSrc}
                    width={500}
                    height={350}
                    alt={`Portfolio project: ${project.title}`}
                    data-ai-hint={project.aiHint}
                    className="object-cover w-full h-auto aspect-[5/3.5] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm text-primary-foreground/80">{project.category}</p>
                    <h3 className="font-headline text-2xl font-bold text-primary-foreground">
                      {project.title}
                    </h3>
                    <Button variant="secondary" size="sm" className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
