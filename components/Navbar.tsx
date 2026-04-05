import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooted", label: "Rooted" },
  { href: "/global-soul", label: "Global Soul" },
  { href: "/the-evolution", label: "The Evolution" },
  { href: "/legacy", label: "Legacy" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/health-fitness", label: "Health & Fitness" },
  { href: "/ventures", label: "Ventures" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-plum/10 bg-cream/90 backdrop-blur">
      <div className="container-page flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-serif text-2xl italic text-plum">
          Mozue
        </Link>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-charcoal/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-plum">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
