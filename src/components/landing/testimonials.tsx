import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Twitter } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      handle: "@sarah_innovates",
      quote: "Plus Marketing completely revitalized our brand. The new design is stunning and our engagement has skyrocketed. Truly a game-changing partnership.",
      avatar: "SL",
      image: "https://placehold.co/100x100.png",
      aiHint: "professional woman"
    },
    {
      name: "Michael B.",
      handle: "@mike_builds",
      quote: "As a startup founder, I needed a team that could handle everything from branding to our go-to-market strategy. Plus Marketing delivered beyond my expectations.",
      avatar: "MB",
      image: "https://placehold.co/100x100.png",
      aiHint: "smiling man"
    },
    {
      name: "Jessica P.",
      handle: "@jess_secures",
      quote: "The website they built for us is not only beautiful but also incredibly effective at converting visitors. Our online sales have never been better. Highly recommend!",
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
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our partners have to say.
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
