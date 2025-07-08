import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ];

  const footerLinks = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/clients", label: "Success Clients" },
      { href: "/blog", label: "Blog" },
      { href: "/#contact", label: "Contact" },
  ]

  return (
    <footer id="footer" className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
            {/* Column 1: Social */}
            <div className="space-y-4">
                <h4 className="font-semibold uppercase">Social</h4>
                <div className="flex gap-4">
                    {socialLinks.map(social => (
                        <Button key={social.label} variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-primary hover:border-primary" asChild>
                            <Link href={social.href} aria-label={social.label}>
                                <social.icon className="h-5 w-5" />
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
            {/* Column 2: Address */}
            <div className="space-y-4">
                 <h4 className="font-semibold uppercase">Address</h4>
                 <address className="not-italic text-gray-400">
                    123 Marketing Lane, Colombo,<br/>
                    Sri Lanka, 12345
                 </address>
            </div>
             {/* Column 3: Say Hello */}
             <div className="space-y-4">
                 <h4 className="font-semibold uppercase">Say Hello</h4>
                 <div className="text-gray-400 space-y-2">
                    <p>hello@plusmarketing.com</p>
                    <p>+94 11 234 5678</p>
                 </div>
            </div>
             {/* Column 4: Links */}
             <div className="space-y-4">
                 <h4 className="font-semibold uppercase">Links</h4>
                 <ul className="space-y-2">
                    {footerLinks.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className="text-gray-400 hover:text-white hover:underline">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                 </ul>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Plus Marketing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
