import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Contact {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

const contacts: Contact[] = [
  { label: "Email", value: "hello@aipeacademy.com", href: "mailto:hello@aipeacademy.com", icon: Mail },
  { label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000", icon: Phone },
  { label: "LinkedIn", value: "/in/gautam-ahuja", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", value: "@gautam-ahuja", href: "https://github.com", icon: Github },
  { label: "YouTube", value: "@aipeacademy", href: "https://youtube.com", icon: Youtube },
];

export function Contact() {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-accent">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let's talk
          </h2>
          <p className="mt-3 text-muted-foreground">
            Reach out on any channel — I'll get back to you.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-elegant"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-soft text-primary group-hover:text-accent">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">
                  {c.label}
                </p>
                <p className="truncate text-sm font-medium text-foreground">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
