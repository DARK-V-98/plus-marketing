"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import Image from "next/image";

export function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Success Clients" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2"
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
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden items-center gap-4 md:flex">
            <Button asChild>
                <Link href="/#contact">Get a Quote</Link>
            </Button>
            <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
            </Button>
        </div>

        <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <Link href="/" className="mr-6 flex items-center" prefetch={false}>
                <Image
                  src="/logo1.jpeg"
                  width={32}
                  height={32}
                  alt="Plus Marketing Logo"
                  className="rounded-full"
                />
                <span className="ml-2 font-headline text-lg font-semibold">
                  Plus Marketing
                </span>
              </Link>
              <div className="grid gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
      </div>
    </header>
  );
}
