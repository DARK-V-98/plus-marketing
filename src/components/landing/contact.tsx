import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">Let's Create Together</h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? We'd love to hear about it. Fill out the form below or reach out to us directly.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-left">
                <div className="space-y-2">
                    <h3 className="font-headline text-xl font-semibold">Contact Information</h3>
                    <p className="text-muted-foreground">Find us here, we're ready to help.</p>
                </div>
                <div className="space-y-4">
                    <p>123 Creative Lane<br />Innovate City, 45678</p>
                    <p>Email: hello@plusmarketing.dev</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <form className="space-y-4 text-left">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full transition-transform hover:scale-105">Submit Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
