import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="education" className="py-0">
      <div ref={ref} className="container mx-auto transition-all duration-700 opacity-0 translate-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="gradient-text">Education</span></h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card p-3">
            <div className="flex items-center gap-3 mb-1 text-foreground/85">
              <GraduationCap className="text-accent" />
              <p className="font-semibold">BS in Information Technology</p>
            </div>
            <p className="text-sm text-foreground/70">Arid Agriculture University, Rawalpindi (2021)</p>
          </div>
          <div className="rounded-xl border bg-card p-3">
            <div className="flex items-center gap-3 mb-1 text-foreground/85">
              <GraduationCap className="text-accent" />
              <p className="font-semibold">Artificial Intelligence & Machine Learning</p>
            </div>
            <p className="text-sm text-foreground/70">Medtronix Systems, Sahiwal (2024)</p>
          </div>
          <div className="rounded-xl border bg-card p-3 md:col-span-2">
            <div className="flex items-center gap-3 mb-1 text-foreground/85">
              <GraduationCap className="text-accent" />
              <p className="font-semibold">Computer Hardware & Networking</p>
            </div>
            <p className="text-sm text-foreground/70">VTI, Sahiwal (2017)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
