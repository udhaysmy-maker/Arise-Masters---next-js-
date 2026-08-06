"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#industries", label: "Industries" },
  { href: "#why", label: "Why Us" },
  { href: "#methodology", label: "Method" },
  { href: "#stories", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 md:px-6 ${
            scrolled ? "glass shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-white p-0 ring-1 ring-ink/10 shadow-sm">
              <img
                src="/assets/logo-mark.png"
                alt=""
                aria-hidden
                className="h-full w-full object-contain"
              />
            </span>
            <img
              src="/assets/logo-wordmark-tagline.png"
              alt="Arise Masters — Your Rise Begins Here"
              className="h-8 w-auto md:h-9 xl:h-10"
            />
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">
            Book Consultation
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 rounded-3xl p-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 text-sm"
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
