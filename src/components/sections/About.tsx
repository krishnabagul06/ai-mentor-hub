import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import teacherImg from "@/assets/teacher.jpg";

const highlights = [
  "7+ years training students & professionals",
  "Project-based, practical curriculum",
  "Focus on shipping real AI products",
  "Mentorship over theory",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-soft" />
          <img
            src={teacherImg}
            alt="Gautam Ahuja portrait"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-3xl border border-border object-cover shadow-elegant"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-sm font-medium text-accent">About the teacher</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Practical AI education for the builders of tomorrow.
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg">
            I have 7+ years of experience training students and professionals in
            AI, Python, product building, automation and emerging technologies.
            My focus is on practical learning through real projects rather than
            theory — you leave with something you actually shipped.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
