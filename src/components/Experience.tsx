import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Experience() {
  const { experience } = site;
  const hasCertificate = Boolean(experience.certificate);

  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-6 pb-28 pt-20 sm:px-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">Experience</p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
          Where I&apos;ve Worked
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-[56px_1fr]"
      >
        <div className="hidden lg:block">
          <p className="font-display text-3xl text-taupe/70">01</p>
          <p className="mt-1 text-[13px] uppercase tracking-[0.14em] text-taupe/50">Research</p>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="mt-5 h-20 w-px bg-terracotta"
            style={{ transformOrigin: "top" }}
          />
        </div>

        <div>
          <p className="text-sm text-clay lg:hidden">01 — Research</p>

          <div className="mt-2 border border-border bg-paper px-8 py-10 sm:px-12 sm:py-12 lg:mt-0 lg:rounded-2xl">
            <h3 className="font-display text-3xl text-ink sm:text-4xl">
              {experience.role}
            </h3>
            <p className="mt-3 text-[17px] font-medium text-ink-soft">
              {experience.organization}
            </p>
            <p className="mt-1 text-base text-clay">
              {experience.lab}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-taupe">
              <span>{experience.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.location}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.mode}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.type}</span>
            </div>

            <div className="mt-8 max-w-[65ch] space-y-5 text-base leading-relaxed text-muted">
              <p>{experience.summary}</p>
              <p>{experience.highlights}</p>
            </div>

            {experience.skills.length > 0 && (
              <div className="mt-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-taupe">Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3.5 py-1.5 text-xs text-ink-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {hasCertificate && (
              <a
                href={experience.certificate}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-clay transition-colors hover:text-terracotta-dark"
              >
                View certificate
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}