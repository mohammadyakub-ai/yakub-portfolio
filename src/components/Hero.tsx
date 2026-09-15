import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { site } from "../data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-xs uppercase tracking-[0.2em] text-clay sm:text-sm">
            {site.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-balance text-[2.75rem] leading-[1.05] text-ink xs:text-[3.25rem] sm:text-[4.25rem] lg:text-[4.5rem]"
          >
            I build systems that catch AI mistakes before they ship.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            I'm Yakub — an AI/ML engineer focused on evaluation pipelines, retrieval
            systems, and applied deep learning. I care less about demos that look
            good once, and more about systems that catch their own failures.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#origin"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark"
            >
              Read the story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
            >
              GitHub
              <ExternalLink size={14} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
            >
              LinkedIn
              <ExternalLink size={14} />
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Download Resume
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-10 border-t border-border pt-5 font-mono text-xs leading-relaxed text-taupe sm:text-[13px]"
          >
            {site.education.degree} · {site.education.school} · CGPA {site.education.cgpa}
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-terracotta/20" />
          <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-terracotta/10" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-paper p-3 shadow-[0_30px_60px_-30px_rgba(46,46,46,0.35)]">
            <img
              src={`${import.meta.env.BASE_URL}profile.webp`}
              alt="Mohammad Yakub, AI/ML Engineer headshot"
              className="aspect-[4/5] w-full rounded-xl object-cover"
              width={600}
              height={600}
            />
          </div>
          <motion.div
            style={{ y: badgeY }}
            className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-paper px-5 py-3 shadow-[0_16px_30px_-18px_rgba(46,46,46,0.3)] sm:-left-8"
          >
            <p className="font-display text-2xl text-terracotta-dark">{site.education.cgpa}</p>
            <p className="text-[13px] text-muted">CGPA · AI &amp; Data Science</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}