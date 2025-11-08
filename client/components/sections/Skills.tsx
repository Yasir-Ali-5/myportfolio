import { Brain, Bot, Code2, Database, GitBranch, Globe, Orbit } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "Python", Icon: Code2 },
  { name: "Machine Learning", Icon: Brain },
  { name: "Deep Learning", Icon: Orbit },
  { name: "LangChain / LangGraph", Icon: Bot },
  { name: "NLP", Icon: Globe },
  { name: "Data Scraping", Icon: Database },
  { name: "FastAPI", Icon: Code2 },
  { name: "Git & GitHub", Icon: GitBranch },
  { name: "Chatbots", Icon: Bot },
  { name: "Automation Systems", Icon: Orbit },
];

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-0">
      <div ref={ref} className="container mx-auto transition-all duration-700 opacity-0 translate-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="gradient-text">Skills</span></h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="group rounded-xl border bg-card/80 p-2 hover:shadow-lg hover:shadow-accent/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 grid place-items-center rounded-md bg-accent/10 text-accent group-hover:glow">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-medium">{name}</p>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] w-[85%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
