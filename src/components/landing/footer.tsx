import Link from "next/link";

export function Footer() {
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
        <div className="grid gap-12 lg:grid-cols-2">
             {/* Column 1: Say Hello */}
             <div className="space-y-4">
                 <h4 className="font-semibold uppercase">Say Hello</h4>
                 <div className="text-gray-400 space-y-2">
                    <p>plusmarketing1995@gmail.com</p>
                    <p>+94 72 567 0349</p>
                 </div>
            </div>
             {/* Column 2: Links */}
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
