import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-32 sm:px-10 sm:py-40">
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="rounded-2xl border border-border bg-cream-dim px-8 py-20 text-center sm:px-16 sm:py-28"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">Contact</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-balance text-4xl leading-[1.08] text-ink sm:text-6xl">
          Building something worth shipping?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
          I'm actively looking for AI/ML engineering roles where reliability
          matters as much as the model. Reach out on LinkedIn or check the code
          on GitHub.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark"
          >
            Connect on LinkedIn
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
          >
            View GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}