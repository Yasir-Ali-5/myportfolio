import { Briefcase, Languages, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-0">
      <div ref={ref} className="container mx-auto transition-all duration-700 opacity-0 translate-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="gradient-text">About Me</span></h2>
        <p className="text-foreground/80 max-w-3xl">
          Results-driven AI and Machine Learning Engineer with hands-on experience in developing real-world AI solutions — from chatbots and predictive models to full-stack automation systems. I’m passionate about turning data into actionable insights and creating scalable, production-ready AI applications.
        </p>
        <div className="grid sm:grid-cols-3 gap-2 mt-1">
          <div className="rounded-xl border bg-card p-3">
            <div className="flex items-center gap-2 text-sm text-foreground/70"><MapPin className="h-4 w-4 text-accent" /> Based in</div>
            <p className="font-semibold mt-1">Sahiwal, Pakistan</p>
          </div>
          <div className="rounded-xl border bg-card p-3">
            <div className="flex items-center gap-2 text-sm text-foreground/70"><Briefcase className="h-4 w-4 text-accent" /> Experience</div>
            <p className="font-semibold mt-1">1 year</p>
          </div>
          <div className="rounded-xl border bg-card p-3">
            <div className="flex items-center gap-2 text-sm text-foreground/70"><Languages className="h-4 w-4 text-accent" /> Languages/Stack</div>
            <p className="font-semibold mt-1">Python, FastAPI, LangChain, Deep Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
