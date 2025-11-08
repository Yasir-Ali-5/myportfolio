import { Link } from "react-router-dom";
import DarkModeToggle from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="font-extrabold tracking-tight text-lg gradient-text">
          Yasir Ali
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-foreground/80 hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href="#projects">View My Work</a>
          </Button>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
