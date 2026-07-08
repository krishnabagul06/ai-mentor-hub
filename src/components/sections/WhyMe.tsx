import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Compass,
  Hammer,
  Lightbulb,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Reason {
  title: string;
  icon: LucideIcon;
}

const reasons: Reason[] = [
  { title: "Project-Based Learning", icon: Hammer },
  { title: "Industry Use Cases", icon: Briefcase },
  { title: "Hands-on Sessions", icon: Code },
  { title: "Career Guidance", icon: Compass },
  { title: "Interview Preparation", icon: MessagesSquare },
  { title: "Live Coding", icon: Lightbulb },
  { title: "AI-first Approach", icon: Sparkles },
];

export function WhyMe() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Why learn with me</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built for people who want to ship
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-elegant"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-soft text-primary">
                <r.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium leading-snug text-foreground">
                {r.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
