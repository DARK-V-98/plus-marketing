'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from '../ui/button';
import Link from 'next/link';

interface Testimonial {
  id: string;
  name: string;
  handle: string;
  quote: string;
  avatar: string;
  image: string;
  aiHint: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const testimonialsData: Testimonial[] = [];
      querySnapshot.forEach((doc) => {
        testimonialsData.push({ id: doc.id, ...doc.data() } as Testimonial);
      });
      setTestimonials(testimonialsData.slice(0, 4)); // Show only 4 testimonials on homepage
      setLoading(false);
    }, (error) => {
        console.error("Error fetching testimonials: ", error);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center",
            isIntersecting
              ? "animate-in fade-in slide-in-from-bottom-12 duration-500"
              : "opacity-0"
          )}>
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Take A Look At What Our Clients Say About Our Work.</h2>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {loading && Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} className="rounded-2xl flex flex-col justify-between p-6 space-y-4">
              <Skeleton className="h-20 w-full" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </Card>
          ))}
          {!loading && testimonials.length === 0 && (
            <p className="col-span-full text-center text-foreground/70">Be the first to leave a review!</p>
          )}
          {!loading && testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} style={{ animationDelay: `${index * 150}ms` }} className={cn(
                  "rounded-2xl flex flex-col items-center text-center justify-between transition-all hover:shadow-xl hover:scale-105",
                  isIntersecting
                    ? "animate-in fade-in zoom-in-95"
                    : "opacity-0"
                )}>
                <CardContent className="p-6 space-y-4">
                  <p className="text-foreground/80">"{testimonial.quote}"</p>
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </CardContent>
                <div className="flex flex-col items-center gap-2 p-6 pt-0">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                    </div>
                </div>
              </Card>
            ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button asChild>
                <Link href="/clients">View More</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
