import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [loading, setLoading] = useState(false);

  const contacts = [
    { title: "Email", subtitle: "sheiklyasirali007@gmail.com", Icon: Mail, href: "mailto:sheiklyasirali007@gmail.com" },
    { title: "Phone", subtitle: "+92 304 581 6560", Icon: Phone, href: "tel:+923045816560" },
    { title: "LinkedIn", subtitle: "linkedin.com/in/yasir-ali-40259a205", Icon: Linkedin, href: "https://linkedin.com/in/yasir-ali-40259a205" },
    { title: "GitHub", subtitle: "github.com/Yasir-AI-5", Icon: Github, href: "https://github.com/Yasir-AI-5" },
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      form.reset();
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-0">
      <div ref={ref} className="container mx-auto transition-all duration-700 opacity-0 translate-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-1"><span className="gradient-text">Contact</span></h2>

        <div className="grid md:grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-4">
            {contacts.map(({ title, subtitle, Icon, href }) => (
              <a key={title} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="group rounded-xl border bg-card/80 p-3 hover:shadow-lg hover:shadow-accent/10 transition-all">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 grid place-items-center rounded-md bg-accent/10 text-accent group-hover:glow">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-foreground/70 truncate max-w-[12rem]">{subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border bg-card p-3 space-y-3">
            <div>
              <label htmlFor="name" className="text-sm text-foreground/70">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-md border bg-background/80 px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-foreground/70">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border bg-background/80 px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-foreground/70">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-md border bg-background/80 px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <Button disabled={loading} className="glow">{loading ? "Sending..." : "Send"}</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
