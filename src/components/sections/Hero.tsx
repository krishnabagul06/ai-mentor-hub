import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import teacherImg from "@/assets/teacher.jpg";

interface HeroProps {
  onAskClick: () => void;
  onServicesClick: () => void;
}

export function Hero({ onAskClick, onServicesClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI Product Engineering Academy
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Build Products. <br />
            <span className="text-gradient">Automate Everything.</span> <br />
            Learn Future Skills.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Helping students and professionals build AI-powered products using
            modern technologies and hands-on projects — Python, LLMs, Agents,
            n8n, and Claude Code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={onAskClick}
              className="group bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-95"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Ask a Doubt
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onServicesClick}
              className="group"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-left">
            {[
              { k: "7+", v: "Years teaching" },
              { k: "3k+", v: "Students trained" },
              { k: "20+", v: "AI projects" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold text-foreground">{s.k}</dt>
                <dd className="text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-primary opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
            <img
              src={teacherImg}
              alt="Gautam Ahuja — AI Product Engineer and Python Trainer"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
            />
            <div className="border-t border-border bg-card p-5">
              <p className="text-lg font-semibold text-foreground">Gautam Ahuja</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                AI Product Engineer · Python Trainer · Automation Expert
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
