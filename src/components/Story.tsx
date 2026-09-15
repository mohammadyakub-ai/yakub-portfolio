import { motion, type Variants } from "motion/react";
import { ArrowUpRight, ExternalLink, FileText, GraduationCap } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { site } from "../data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="hidden lg:block">
      <p className="font-display text-3xl text-taupe/70">{number}</p>
      <p className="mt-1 text-[13px] uppercase tracking-[0.14em] text-taupe/50">{label}</p>
    </div>
  );
}

function tone(t?: "bad" | "good" | "neutral") {
  if (t === "bad") return "text-[#c96a4a]";
  if (t === "good") return "text-clay";
  return "text-ink-soft";
}

function DevicePanel({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="overflow-hidden rounded-xl border border-white/10 bg-ink shadow-[0_30px_60px_-30px_rgba(46,46,46,0.45)]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4886a]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d9b46a]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal/60" />
        <span className="ml-3 font-mono text-xs text-cream/40">{project.slug}</span>
      </div>
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={`${project.title} — screenshot showing metrics and evaluation results`}
          className="w-full"
          loading="lazy"
          width={1280}
          height={720}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.45, ease: EASE }}
        />
      </div>
      {project.status && (
        <p className="border-t border-white/10 px-4 py-3 font-mono text-xs leading-relaxed text-cream/40">
          {project.status}
        </p>
      )}
    </motion.div>
  );
}

function ProjectChapter({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <DevicePanel project={project} />
      <div>
        <p className="text-[15px] text-clay">{project.tagline}</p>
        <h2 className="mt-2 font-display text-2xl leading-snug text-ink sm:text-[1.9rem]">
          {project.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {project.metrics?.map((m) => (
            <div key={m.label} className="rounded-lg border border-border bg-paper px-3 py-3">
              <p className={`font-display text-lg ${tone(m.tone)}`}>{m.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-paper px-3.5 py-1.5 text-[13px] text-ink-soft"
            >
              {s}
            </span>
          ))}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-terracotta-dark"
          >
            View repo <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function StoryProjects() {
  return (
    <section id="work" className="py-6 sm:py-10">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="pointer-events-none absolute bottom-6 left-[38px] top-6 hidden w-px bg-border lg:block">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ transformOrigin: "top" }}
            className="h-full w-px bg-terracotta"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-28 py-8 lg:grid-cols-[56px_1fr]">
          {/* Chapter 01 — Work */}
          <ChapterMarker number="01" label="Work" />
          <motion.div id="work-first" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <p className="text-sm text-clay lg:hidden">Chapter 01 — Work</p>
            <div className="mt-2">
              <ProjectChapter project={projects[0]} />
            </div>
          </motion.div>

          {/* Chapter 02 — Work */}
          <ChapterMarker number="02" label="Work" />
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <p className="text-sm text-clay lg:hidden">Chapter 02 — Work</p>
            <div className="mt-2">
              <ProjectChapter project={projects[1]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function StoryResearch() {
  return (
    <section id="research" className="py-6 sm:py-10">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="pointer-events-none absolute bottom-6 left-[38px] top-6 hidden w-px bg-border lg:block">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ transformOrigin: "top" }}
            className="h-full w-px bg-terracotta"
          />
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-28 py-8 lg:grid-cols-[56px_1fr]">
          {/* Chapter 01 — Research */}
          <ChapterMarker number="01" label="Research" />
          <motion.div
            id="origin"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm text-clay lg:hidden">Chapter 01 — Research</p>
            <div className="mt-2 flex flex-col gap-8 rounded-2xl border border-border bg-paper p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-5">
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta-dark sm:flex">
                  <FileText size={22} />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-taupe">
                    Published Research · {site.paper.venue}
                  </p>
                  <h2 className="mt-3 max-w-xl font-display text-2xl leading-snug text-ink sm:text-[1.9rem]">
                    {site.paper.title}
                  </h2>
                  <p className="mt-3 font-mono text-xs text-muted">Paper #{site.paper.id}</p>
                </div>
              </div>
              <a
                href={site.paper.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark lg:self-center"
              >
                Read on IEEE Xplore
                <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted">
              Before prompts and pipelines, it was a car that had to decide, in
              milliseconds and in both directions of travel, whether to brake.
              There's no room for "probably right" in that decision — sensor
              fusion and deep learning had to agree, verifiably, before the
              system acted. That's the standard I've tried to hold AI systems to
              ever since.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Most AI features don't get held to that standard. They're graded
              on vibes — "looks good in the demo" — with no test suite behind
              them. So I built two systems to close that gap.
            </p>
          </motion.div>

          {/* Chapter 02 — Now */}
          <ChapterMarker number="02" label="Now" />
          <motion.div
            id="now"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm text-clay lg:hidden">Chapter 02 — Now</p>
            <h2 className="mt-2 font-display text-2xl leading-snug text-ink sm:text-[1.9rem]">
              Where that leaves me
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              I'm a final-stretch B.Tech student looking for a team that wants
              that same discipline applied to their AI systems — somewhere
              reliability is treated as a feature, not an afterthought.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-paper p-6">
                <span className="mt-0.5 shrink-0 rounded-full bg-terracotta/10 p-2.5 text-terracotta-dark">
                  <GraduationCap size={18} />
                </span>
                <div>
                  <p className="text-ink">{site.education.degree}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {site.education.school} · CGPA {site.education.cgpa}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-clay">Where I'd add the most value</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {site.targetRoles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-border bg-paper px-4 py-2 text-sm text-ink-soft"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-12 text-sm text-clay">Tools I reach for</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-ink-soft sm:grid-cols-4">
              {[
                "Python",
                "PyTorch",
                "scikit-learn",
                "FastAPI",
                "LangChain",
                "ChromaDB",
                "Docker",
                "Streamlit",
              ].map((tool) => (
                <div key={tool} className="rounded-lg border border-border bg-paper px-3 py-3 text-center">
                  {tool}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}