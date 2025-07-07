import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram, Github, Facebook } from "lucide-react";
import { ShieldIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Services: [
      { href: "#services", label: "Brand Identity" },
      { href: "#services", label: "Digital Marketing" },
      { href: "#services", label: "Web Design & Dev" },
      { href: "#", label: "Content Strategy" },
    ],
    Company: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Careers" },
      { href: "#clients", label: "Blog" },
      { href: "#contact", label: "Contact" },
    ],
    Work: [
      { href: "#portfolio", label: "Our Work" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#", label: "Case Studies" },
    ],
    Legal: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Cookie Policy" },
    ],
  };

  const socialLinks = [
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Github, label: "GitHub" },
  ];

  return (
    <footer id="footer" className="w-full border-t border-white/10 bg-background/30 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="#"
              className="mb-4 flex items-center gap-2"
              prefetch={false}
            >
              <ShieldIcon className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">
                Plus Marketing
              </span>
            </Link>
            <p className="max-w-xs text-foreground/60">
              Creative marketing and design solutions to help your brand grow.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(links).map(([title, linkList]) => (
                <div key={title} className="grid gap-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">{title}</h3>
                    <ul className="grid gap-2">
                    {linkList.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-sm text-foreground/60 hover:text-foreground">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} Plus Marketing. All rights reserved.
          </p>
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
