import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Building2, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="experience" className="py-0">
      <div ref={ref} className="container mx-auto transition-all duration-700 opacity-0 translate-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="gradient-text">Experience</span></h2>
        <div className="rounded-xl border bg-card p-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-md bg-accent/10 text-accent"><Building2 /></div>
              <div>
                <p className="font-semibold">AI Engineer — AI 3D Solutions, Sahiwal</p>
                <p className="text-sm text-foreground/70">Feb 2025 – Present</p>
              </div>
            </div>
          </div>
          <ul className="mt-2 space-y-2">
            <li className="flex gap-2 text-foreground/85"><CheckCircle2 className="h-5 w-5 text-accent" /> Developed and deployed intelligent automation systems for social media and ERP platforms.</li>
            <li className="flex gap-2 text-foreground/85"><CheckCircle2 className="h-5 w-5 text-accent" /> Built and optimized AI pipelines for multi-platform data extraction and analysis.</li>
            <li className="flex gap-2 text-foreground/85"><CheckCircle2 className="h-5 w-5 text-accent" /> Integrated AI models into production environments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
