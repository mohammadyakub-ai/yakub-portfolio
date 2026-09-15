import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduce = useReducedMotion();

  const initial = reduce
    ? { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }
    : { opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" };

  return (
    <footer ref={ref} className="border-t border-border">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-12 pt-20 sm:px-10 sm:pt-28">
        <div className="w-full overflow-hidden text-center" style={{ containerType: "inline-size" }}>
          <motion.h1
            initial={initial}
            animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mohammad Yakub"
            className="whitespace-normal font-display font-normal uppercase leading-[0.95] tracking-[-0.02em] text-ink text-[min(16cqw,5rem)] sm:whitespace-nowrap sm:text-[min(10.7cqw,8.8rem)]"
          >
            {site.name.toUpperCase()}
          </motion.h1>
        </div>

        <p className="mt-12 text-center font-display text-lg italic text-muted sm:text-xl">
          Build. Learn. Solve.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 font-mono text-xs text-clay">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-terracotta-dark"
          >
            GitHub <ArrowUpRight size={13} />
          </a>
          <span aria-hidden="true" className="text-taupe/50">·</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-terracotta-dark"
          >
            LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="mt-16 border-t border-border" />

        <div className="flex flex-col items-center justify-center gap-1 pt-6 text-center font-mono text-xs text-taupe sm:flex-row sm:gap-3">
          <p>© {new Date().getFullYear()} Mohammad Yakub</p>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <p>Built with React, Tailwind &amp; Motion</p>
        </div>
      </div>
    </footer>
  );
}