"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const STORAGE_KEY = "arise-masters-cookie-consent";
const ease = [0.16, 1, 0.3, 1] as const;

type Consent = "accepted" | "declined";

function readStoredConsent(): Consent | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const prefersReducedMotion = useReducedMotion();
  // undefined = not checked yet (server render / pre-mount), null = checked, no choice stored
  const [consent, setConsent] = useState<Consent | null | undefined>(undefined);

  useEffect(() => {
    setConsent(readStoredConsent());
  }, []);

  function choose(choice: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // localStorage unavailable (e.g. private browsing) — consent still applies for this visit
    }
    setConsent(choice);
  }

  const showBanner = consent === null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.aside
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-[70] flex justify-center px-4 pb-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:justify-start sm:px-0 sm:pb-0"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease }}
        >
          <div className="glass w-full max-w-md rounded-[1.75rem] p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-ink-soft">
              We use cookies to improve your experience and understand how our
              website is used.{" "}
              <a
                href="#"
                className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:rounded-sm"
              >
                Cookie Policy
              </a>
            </p>
            <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => choose("declined")}
                aria-label="Decline cookies"
                className="btn-ghost !px-5 !py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                aria-label="Accept cookies"
                className="btn-primary !px-5 !py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
