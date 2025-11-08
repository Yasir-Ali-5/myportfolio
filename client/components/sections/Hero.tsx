import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Cpu, Download, Send } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 pb-6">
      <AnimatedBackground />
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
            <Cpu className="h-3.5 w-3.5 text-accent" /> AI & Machine Learning Engineer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="gradient-text">Transforming Ideas</span>
            <br />
            into Intelligent AI Solutions
          </h1>
          <p className="text-foreground/75 text-lg max-w-xl">
            I’m Yasir Ali — an AI & Machine Learning Engineer specializing in building real-world automation, predictive models, and intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="glow">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://linkedin.com/in/yasir-ali-40259a205" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact" className="flex items-center gap-2">
                <Send className="h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-2xl overflow-hidden glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand-start)/0.6),transparent_40%),radial-gradient(circle_at_70%_80%,hsl(var(--brand-end)/0.6),transparent_40%)]" />
            <svg viewBox="0 0 200 200" className="absolute inset-0">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--brand-start))" />
                  <stop offset="100%" stopColor="hsl(var(--brand-end))" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="url(#grad)" opacity="0.25" />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-36 w-36 md:h-44 md:w-44 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--brand-start)),hsl(var(--brand-end)))] p-1 ring-2 ring-accent/20">
                <div className="h-full w-full rounded-full bg-background grid place-items-center overflow-hidden">
                  <img src="https://cdn.builder.io/api/v1/image/assets%2Ffeb4e521ed91453a92ae6366d8c1197b%2Ff47328cb7ec04947bf591acc80dfefb5?format=webp&width=800" alt="Yasir Ali" className="h-full w-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
