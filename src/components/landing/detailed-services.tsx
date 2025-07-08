'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Megaphone, Palette, CodeXml } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Digital Marketing Services",
    description: "Our digital marketing services are designed to increase your online visibility, drive targeted traffic, and convert visitors into loyal customers. We cover all aspects of digital marketing to create a holistic strategy for your brand.",
    details: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "We optimize your website to rank higher on search engine results pages, bringing in more organic traffic. Our strategies include keyword research, on-page SEO, technical SEO, and link building."
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "We create and manage impactful social media campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter to build your brand community and engage with your audience."
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Get immediate results with targeted ad campaigns on Google Ads and social media. We manage your budget effectively to maximize ROI and generate quality leads."
      },
      {
        title: "Content Marketing",
        description: "We produce high-quality, relevant content—from blog posts to videos—that resonates with your audience, establishes your authority, and drives engagement."
      },
    ]
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Graphic Design",
    description: "Our creative team crafts stunning visuals that communicate your brand's message and capture your audience's attention. We believe great design is about more than just aesthetics; it's about creating a connection.",
    details: [
        {
            title: "Branding & Identity",
            description: "We develop a strong, cohesive brand identity for your business, including logo design, color palettes, typography, and brand guidelines that set you apart from the competition."
        },
        {
            title: "Marketing & Advertising Materials",
            description: "From digital banners and social media graphics to print materials like brochures and business cards, we design compelling assets that support your marketing efforts."
        },
        {
            title: "UI/UX Design",
            description: "We design intuitive and beautiful user interfaces for websites and applications, focusing on creating a seamless and enjoyable user experience that drives conversions."
        },
    ]
  },
  {
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "We build fast, responsive, and secure websites that not only look great but also perform flawlessly. Our development process is centered around user experience and achieving your business goals.",
    details: [
        {
            title: "Custom Website Development",
            description: "We create tailor-made websites from scratch, ensuring they are perfectly aligned with your brand and business requirements. No templates, just unique digital experiences."
        },
        {
            title: "E-commerce Solutions",
            description: "We build robust e-commerce platforms that are easy to manage and provide a smooth shopping experience for your customers, helping you boost online sales."
        },
        {
            title: "Website Maintenance & Support",
            description: "We offer ongoing maintenance and support services to keep your website secure, up-to-date, and performing at its best, so you can focus on your business."
        },
    ]
  },
];

export function DetailedServices() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="detailed-services" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
            "flex flex-col items-center space-y-4 text-center",
            isIntersecting
              ? "animate-in fade-in zoom-in-95 duration-500"
              : "opacity-0"
          )}>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Our Services in Detail</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how our core services can help you achieve your business objectives.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
            <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className={cn(
                        "transition-all duration-500",
                        isIntersecting ? "animate-in fade-in" : "opacity-0"
                    )} style={{ animationDelay: `${index * 150}ms` }}>
                        <AccordionTrigger className="text-xl font-bold hover:no-underline py-6 text-left">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                                    {service.icon}
                                </div>
                                <span>{service.title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-0 pb-6 text-left">
                            <p className="text-lg text-foreground/80 mb-6">{service.description}</p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {service.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                                        <h4 className="font-semibold text-md text-primary">{detail.title}</h4>
                                        <p className="text-foreground/70 mt-1">{detail.description}</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
