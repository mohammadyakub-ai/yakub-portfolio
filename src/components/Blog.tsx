import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { posts } from "../data/posts";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-[1400px] px-6 pb-28 pt-20 sm:px-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-taupe">Notes</p>
        <h2 className="mt-2 font-display text-2xl leading-snug text-ink sm:text-3xl">
          Notes from the build
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10"
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            className="grid grid-cols-1 items-baseline gap-1 border-t border-border py-6 last:border-b sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <a
                href={`#/notes/${post.slug}`}
                className="group inline-flex items-baseline gap-2 font-display text-lg leading-snug text-ink transition-colors hover:text-terracotta-dark sm:text-xl"
              >
                {post.title}
                <ArrowUpRight size={16} className="shrink-0 translate-y-0.5 text-taupe transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{post.excerpt}</p>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-taupe sm:flex-col sm:items-end sm:gap-1">
              <a href={`#/notes/${post.slug}`}>{post.readTime}</a>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}