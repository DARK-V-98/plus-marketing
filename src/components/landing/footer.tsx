import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram, Github, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const socialLinks = [
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Github, label: "GitHub" },
  ];

  return (
    <footer id="footer" className="w-full border-t border-border bg-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center text-center">
          <div>
            <Link
              href="#"
              className="mb-4 inline-flex items-center gap-2"
              prefetch={false}
            >
              <Image
                src="/logo1.jpeg"
                width={40}
                height={40}
                alt="Plus Marketing Logo"
                className="rounded-full"
              />
              <span className="font-headline text-xl font-bold text-foreground">
                Plus Marketing
              </span>
            </Link>
            <p className="max-w-xs text-foreground/60">
              Creative marketing and design solutions to help your brand grow.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            {socialLinks.map(social => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                    <Link href={social.href} aria-label={social.label}>
                        <social.icon className="h-5 w-5 text-foreground/60 hover:text-foreground" />
                    </Link>
                </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
