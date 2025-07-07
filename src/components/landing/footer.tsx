import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { PlusIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
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
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} Plus Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
