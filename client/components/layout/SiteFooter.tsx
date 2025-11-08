import { Github, Linkedin, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-foreground/70">© 2025 Yasir Ali</p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/yasir-ali-40259a205"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Yasir-AI-5"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="mailto:sheiklyasirali007@gmail.com"
            className="text-foreground/80 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
