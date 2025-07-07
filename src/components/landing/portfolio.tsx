import Image from "next/image";

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm uppercase">How it works</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Simple, Secure, Seamless.
              </h2>
              <p className="max-w-[600px] text-foreground/70 md:text-lg">
                Our cloud firewall routes all your team's traffic through a single, secure point. We inspect for threats, block malware, and ensure all data is encrypted, keeping your remote workforce safe.
              </p>
            </div>
            <ul className="grid gap-4">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Connect Devices</h3>
                  <p className="text-foreground/60">
                    Easily enroll any device from laptops to smartphones.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Traffic Secured</h3>
                  <p className="text-foreground/60">
                    All traffic is tunneled through our intelligent cloud.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Threats Blocked</h3>
                  <p className="text-foreground/60">
                    Malicious content is blocked before it reaches your team.
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
            data-ai-hint="network security diagram"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
