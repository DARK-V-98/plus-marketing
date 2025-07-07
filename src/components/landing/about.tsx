import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="font-bold uppercase tracking-wider text-primary">
            Welcome to our Digital Marketing Hub!
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            We are a results-driven digital marketing team dedicated to helping businesses grow online through powerful and creative strategies. From social media management and content creation to SEO, Facebook Ads, and Google Ads—we do it all. Our mission is simple: to connect your brand with the right audience and turn clicks into loyal customers.
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            With a passion for innovation and a deep understanding of digital trends, we offer personalized solutions that deliver measurable success. Whether you're a startup or an established brand, we’re here to elevate your online presence and drive real results.
          </p>
          <p className="text-foreground/70 md:text-lg/relaxed">
            Let’s grow your business—digitally, strategically, and successfully.
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
