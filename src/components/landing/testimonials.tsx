import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Twitter } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      handle: "@sarah_innovates",
      quote: "Plus Marketing transformed our remote security. It's so simple, yet powerful. We had it running for our entire team in less than an hour. A must-have for any WFH setup.",
      avatar: "SL",
      image: "https://placehold.co/100x100.png",
      aiHint: "professional woman"
    },
    {
      name: "Michael B.",
      handle: "@mike_builds",
      quote: "As a non-technical founder, network security was a major worry. Plus Marketing took that completely off my plate. Their support is top-notch too. Highly recommended.",
      avatar: "MB",
      image: "https://placehold.co/100x100.png",
      aiHint: "smiling man"
    },
    {
      name: "Jessica P.",
      handle: "@jess_secures",
      quote: "The peace of mind Plus Marketing provides is invaluable. We can see all traffic, block threats, and manage policies from a single dashboard. It's the perfect WFH firewall.",
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">They Trust Plus Marketing</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our users have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10 flex flex-col justify-between">
                <CardContent className="p-6">
                  <p className="text-foreground/80">"{testimonial.quote}"</p>
                </CardContent>
                <div className="flex items-center justify-between p-6 pt-0">
                    <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                        </div>
                    </div>
                    <Twitter className="h-5 w-5 text-sky-400" />
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
