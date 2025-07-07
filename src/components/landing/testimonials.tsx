import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      title: "CEO, Tech Innovators",
      quote: "Plus Marketing transformed our online presence. Their digital marketing expertise led to a 200% increase in leads in just one quarter. Truly remarkable results!",
      avatar: "SL",
      image: "https://placehold.co/100x100.png",
      aiHint: "professional woman"
    },
    {
      name: "Michael B.",
      title: "Founder, Coffee House",
      quote: "The branding and website they designed are just beautiful. It perfectly captures our vibe and our customers love it. The team was a pleasure to work with.",
      avatar: "MB",
      image: "https://placehold.co/100x100.png",
      aiHint: "smiling man"
    },
    {
      name: "Jessica P.",
      title: "Marketing Director, FitLife",
      quote: "Their creative campaigns and stunning visuals have set us apart in a crowded market. I can't recommend Plus Marketing enough for their design and strategic thinking.",
      avatar: "JP",
      image: "https://placehold.co/100x100.png",
      aiHint: "woman outdoors"
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Loved by Our Clients</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our partners have to say about working with us.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-lg font-medium italic">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
