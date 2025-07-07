import Image from "next/image";

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm uppercase">Our Process</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                From Vision to Victory.
              </h2>
              <p className="max-w-[600px] text-foreground/70 md:text-lg">
                We follow a proven, collaborative process to ensure every project is a success. Your vision is our guide, and your success is our mission.
              </p>
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Discovery & Strategy</h3>
                  <p className="text-foreground/60">
                    We start by understanding your goals and audience to build a roadmap for success.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Design & Creation</h3>
                  <p className="text-foreground/60">
                    Our creative team brings ideas to life with stunning visuals and compelling content.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Launch & Growth</h3>
                  <p className="text-foreground/60">
                    We launch, monitor, and optimize to ensure your brand achieves maximum impact and growth.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="https://placehold.co/550x550.png"
            width="550"
            height="550"
            alt="How it works diagram"
            data-ai-hint="creative process flowchart"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
