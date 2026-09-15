import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#now", label: "Now" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (open) {
      const onResize = () => {
        if (window.innerWidth >= 1024) setOpen(false);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [open]);

  const mid = Math.ceil(links.length / 2);
  const left = links.slice(0, mid);
  const right = links.slice(mid);

  const linkClasses =
    "relative py-1 transition-colors hover:text-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="fixed inset-x-0 top-4 z-50 sm:top-5">
      <div className="mx-auto w-full max-w-[920px] px-4 sm:px-6">
        <nav className="relative overflow-hidden rounded-full border border-border bg-cream/90 shadow-[0_18px_40px_-18px_rgba(46,46,46,0.32)] backdrop-blur-md">
          <motion.div
            className="absolute inset-x-0 top-0 h-0.5 origin-left bg-terracotta"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-3 sm:px-7">
            <ul className="hidden items-center justify-start gap-8 text-sm text-ink-soft lg:flex">
              {left.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClasses}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="justify-self-start text-ink lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

            <a href="#top" className="justify-self-center font-display text-base text-ink sm:text-lg">
              Mohammad Yakub
            </a>

            <ul className="hidden items-center justify-end gap-8 text-sm text-ink-soft lg:flex">
              {right.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClasses}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-6 justify-self-end lg:hidden" aria-hidden="true" />
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-cream/95 p-2 shadow-[0_24px_50px_-24px_rgba(46,46,46,0.35)] backdrop-blur-md lg:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-ink-soft transition-colors hover:bg-cream-dim hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}