import { useEffect } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Post } from "../data/posts";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function PostView({ post }: { post: Post }) {
  useEffect(() => {
    const defaultTitle = "Mohammad Yakub — AI/ML Engineer";
    document.title = `${post.title} — Mohammad Yakub`;
    return () => {
      document.title = defaultTitle;
    };
  }, [post.title]);

  return (
    <motion.article
      variants={rise}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-[1400px] px-6 pb-32 pt-14 sm:px-10 sm:pt-20"
    >
      <div className="mx-auto max-w-2xl">
        <a
          href="#writing"
          className="inline-flex items-center gap-2 text-sm text-clay transition-colors hover:text-terracotta-dark"
        >
          <ArrowLeft size={15} />
          All notes
        </a>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-taupe">Notes</p>
        <h1 className="mt-4 font-display text-balance text-3xl leading-[1.12] text-ink sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-8 font-mono text-xs text-taupe">
          <span>{post.date}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
          <span aria-hidden="true">·</span>
          <span className="flex flex-wrap gap-x-2 text-clay">
            {post.tags.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </span>
        </div>

        <div className="flex flex-col gap-6 pt-10 text-[1.0625rem] leading-relaxed text-ink-soft">
          {post.body.map((block, i) => {
            if (block.type === "p") {
              return (
                <p key={i} className="text-pretty">
                  {block.text}
                </p>
              );
            }
            if (block.type === "h2") {
              return (
                <h2 key={i} className="mt-8 font-display text-xl text-ink sm:text-2xl">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="mt-1 flex list-disc flex-col gap-2 pl-5 marker:text-terracotta">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <div key={i} className="mt-1 rounded-lg border border-border bg-paper px-5 py-4 font-mono text-sm text-ink">
                {block.text}
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#writing"
            className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-terracotta"
          >
            <ArrowLeft size={15} />
            Back to all notes
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-clay transition-colors hover:text-terracotta-dark"
          >
            Mohammad Yakub — AI/ML Engineer
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}