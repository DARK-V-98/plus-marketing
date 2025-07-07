import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "The Future of SEO: AI and Voice Search",
      description: "Discover how artificial intelligence and voice search are reshaping the landscape of search engine optimization.",
      imageSrc: "https://placehold.co/400x250.png",
      aiHint: "artificial intelligence search"
    },
    {
      title: "Minimalist Design: Less is More",
      description: "Explore the principles of minimalist design and how it can create powerful, user-friendly digital experiences.",
      imageSrc: "https://placehold.co/400x250.png",
      aiHint: "minimalist design abstract"
    },
    {
      title: "5 Tips for a Killer Social Media Campaign",
      description: "Actionable advice for creating social media campaigns that engage your audience and drive conversions.",
      imageSrc: "https://placehold.co/400x250.png",
      aiHint: "social media feed"
    },
  ];

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Blog</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Insights & Trends</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay ahead of the curve with our latest articles on digital marketing and design.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src={post.imageSrc}
                width={400}
                height={250}
                alt={post.title}
                data-ai-hint={post.aiHint}
                className="w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4 flex-1">
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="#" prefetch={false}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
