import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Booking() {
  return (
    <section id="booking" className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-8 text-primary-foreground shadow-elegant md:p-12"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <CalendarClock className="h-3.5 w-3.5" />
              Mentorship
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Book a 1-on-1 Session
            </h2>
            <p className="mt-2 text-sm opacity-90 md:text-base">
              Personalised guidance on career, projects and product building.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            disabled
            className="cursor-not-allowed opacity-90"
          >
            Coming Soon
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
