import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ShieldCheck, HardDriveUpload, Siren } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Reliable protection",
      description: "We manage your network traffic, keeping your experience smooth.",
    },
    {
      icon: <HardDriveUpload className="h-8 w-8 text-primary" />,
      title: "Easy to set up",
      description: "Your team's data is secured and encrypted in transit.",
    },
    {
      icon: <Siren className="h-8 w-8 text-primary" />,
      title: "Virus protection",
      description: "All web traffic is intelligently screened for malware and spyware.",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm uppercase">Universal Solution</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Plus Marketing?</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Plus Marketing is the first and only easy to use cloud firewall for remote teams.
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
