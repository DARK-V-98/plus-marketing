"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import { PlusIcon } from "./icons";

export function Header() {
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 transition-transform hover:scale-105"
          prefetch={false}
        >
          <PlusIcon className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold text-foreground">
            Plus Marketing
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:inline-flex transition-transform hover:scale-105"
          >
            <Link href="#optimizer">Optimize Brief</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="#" className="mr-6 flex items-center" prefetch={false}>
                <PlusIcon className="h-6 w-6 text-primary" />
                <span className="ml-2 font-headline text-lg font-semibold">
                  Plus Marketing
                </span>
              </Link>
              <div className="grid gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="#optimizer">Optimize Brief</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
