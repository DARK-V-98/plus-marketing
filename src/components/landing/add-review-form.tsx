'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

export function AddReviewForm() {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [quote, setQuote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quote) {
      toast({
        title: 'Error',
        description: 'Name and review are required.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'testimonials'), {
        name,
        handle: handle ? `@${handle.replace('@', '')}` : '',
        quote,
        avatar: name.substring(0, 2).toUpperCase(),
        image: `https://placehold.co/100x100.png`,
        aiHint: 'person',
        createdAt: new Date(),
      });
      toast({
        title: 'Success!',
        description: 'Thank you for your review!',
      });
      setName('');
      setHandle('');
      setQuote('');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="add-review" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50" ref={ref}>
        <div className="container mx-auto px-4 md:px-6">
            <Card className={cn(
              "max-w-2xl mx-auto",
              isIntersecting
                ? "animate-in fade-in zoom-in-95 duration-500"
                : "opacity-0"
            )}>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-center">Leave a Review</CardTitle>
                    <CardDescription className="text-center text-foreground/70">
                        Share your experience with our services. We'd love to hear from you!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Input
                                placeholder="Your Handle (e.g., twitter_user)"
                                value={handle}
                                onChange={(e) => setHandle(e.target.value)}
                            />
                        </div>
                        <Textarea
                            placeholder="Your review..."
                            value={quote}
                            onChange={(e) => setQuote(e.target.value)}
                            required
                            rows={4}
                        />
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
