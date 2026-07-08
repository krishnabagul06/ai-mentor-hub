import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Network,
  Package,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

const skills: Skill[] = [
  { name: "Python", icon: Terminal },
  { name: "Product Building", icon: Package },
  { name: "Generative AI", icon: Sparkles },
  { name: "AI Agents", icon: Bot },
  { name: "n8n Automation", icon: Workflow },
  { name: "Claude Code", icon: Braces },
  { name: "Prompt Engineering", icon: Zap },
  { name: "API Integration", icon: Network },
  { name: "AI Workflows", icon: GitBranch },
  { name: "MCP", icon: Layers },
  { name: "RAG", icon: Database },
  { name: "LLM Applications", icon: Cpu },
];

export function Skills() {
  return (
    <section id="skills" className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Expertise</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Skills I teach & build with
          </h2>
          <p className="mt-4 text-muted-foreground">
            Modern tools for shipping AI-first products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-elegant"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-soft text-primary transition-colors group-hover:text-accent">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 truncate text-sm font-medium text-foreground">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
