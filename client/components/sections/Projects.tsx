import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Bot, Database, Network, Settings, Share2, Sprout } from "lucide-react";

const projects = [
  {
    title: "Net Soo Automation",
    description:
      "Unified platform for controlling Facebook, Instagram, TikTok, and YouTube automation from one interface.",
    Icon: Share2,
  },
  {
    title: "AI-Powered ERPNext Tender Management",
    description:
      "Automates tender data collection, analysis, and bidding within ERPNext using AI tools.",
    Icon: Settings,
  },
  {
    title: "Social Media Scraper",
    description:
      "Collects and processes real-time data across major social media platforms.",
    Icon: Bot,
  },
  {
    title: "Italian Tender Website Data Scraper",
    description:
      "Extracts tender data from hidden APIs on European procurement portals.",
    Icon: Database,
  },
  {
    title: "Leaf Disease Classifier",
    description:
      "CNN-based deep learning model for early detection of plant diseases.",
    Icon: Sprout,
  },
];

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="projects" className="py-0">
      <div ref={ref} className="container mx-auto transition-all duration-700 opacity-0 translate-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="gradient-text">Projects</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, Icon }) => (
            <div key={title} className="group rounded-xl border bg-card/80 p-3 hover:shadow-lg hover:shadow-accent/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 grid place-items-center rounded-md bg-accent/10 text-accent group-hover:glow">
                  <Icon />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-foreground/75 text-sm">{description}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Yasir-AI-5"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="text-sm text-foreground/70 hover:text-foreground"
                >
                  Demo Inquiry →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
