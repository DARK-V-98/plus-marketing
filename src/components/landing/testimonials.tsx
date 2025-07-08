'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Twitter } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

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

  useEffect(() => {
    const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const testimonialsData: Testimonial[] = [];
      querySnapshot.forEach((doc) => {
        testimonialsData.push({ id: doc.id, ...doc.data() } as Testimonial);
      });
      setTestimonials(testimonialsData);
      setLoading(false);
    }, (error) => {
        console.error("Error fetching testimonials: ", error);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our partners have to say.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {loading && Array.from({ length: 3 }).map((_, index) => (
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
              <Card key={testimonial.id} style={{ animationDelay: `${index * 150}ms` }} className="animate-in fade-in zoom-in-95 rounded-2xl flex flex-col justify-between transition-all hover:shadow-xl hover:scale-105">
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
                    {testimonial.handle && <Twitter className="h-5 w-5 text-sky-400" />}
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
