import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="font-bold uppercase tracking-wider text-primary">
            Your Strategic Marketing Partner
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            We are a team of passionate marketers and creative thinkers dedicated to one thing: driving growth for your business. In today's digital landscape, a strong online presence is non-negotiable. We specialize in creating multi-channel marketing strategies that not only reach but also resonate with your target audience.
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            Our expertise spans the full marketing spectrum, from search engine optimization (SEO) and pay-per-click (PPC) advertising to engaging social media campaigns and compelling content marketing. We believe in a data-first approach, using analytics to inform our strategies and ensure every campaign is optimized for maximum return on investment.
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            Partner with us to transform your digital presence, build lasting customer relationships, and achieve sustainable growth.
          </p>
        </div>
        <div className="flex justify-center">
            <Image
              src="/logo1.jpeg"
              width={400}
              height={400}
              alt="Plus Marketing Logo"
              data-ai-hint="company logo"
              className="rounded-full aspect-square object-cover"
            />
        </div>
      </div>
    </section>
  );
}
