import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  GraduationCap,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "AI Product Building Bootcamp",
    description: "Learn to build real AI products from scratch, end-to-end.",
    icon: Rocket,
  },
  {
    title: "Python Programming",
    description: "Beginner to advanced Python with practical projects.",
    icon: Code2,
  },
  {
    title: "AI Automation using n8n",
    description: "Build intelligent workflows without writing code.",
    icon: Workflow,
  },
  {
    title: "Claude Code Masterclass",
    description: "Master AI-assisted software development.",
    icon: Bot,
  },
  {
    title: "Emerging AI Technologies",
    description: "Stay ahead with the latest AI tools and frameworks.",
    icon: Sparkles,
  },
  {
    title: "1-on-1 Mentorship",
    description: "Personalized career guidance and interview prep.",
    icon: GraduationCap,
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-accent">Services</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Programs designed for outcomes
        </h2>
        <p className="mt-4 text-muted-foreground">
          Choose a path — every program is project-first.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-elegant"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <s.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
