"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;
const HOLD_MS = 850;
const REDUCED_HOLD_MS = 200;

export function Preloader() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(
      () => setVisible(false),
      prefersReducedMotion ? REDUCED_HOLD_MS : HOLD_MS
    );
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[9999] grid place-items-center bg-background"
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -10 }
          }
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, ease }}
        >
          <span className="sr-only">Loading Arise Masters</span>
          <div className="flex flex-col items-center">
            <motion.div
              className="relative h-16 w-16 sm:h-20 sm:w-20"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease }}
            >
              <Image
                src="/assets/logo-mark.png"
                alt=""
                fill
                sizes="80px"
                priority
                className="object-contain"
              />
            </motion.div>

            <motion.p
              className="mt-5 font-display text-2xl font-bold uppercase tracking-[0.04em] text-primary sm:text-3xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.45,
                delay: prefersReducedMotion ? 0 : 0.15,
                ease,
              }}
            >
              Arise Masters
            </motion.p>

            <motion.p
              className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/70 sm:text-sm"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : 0.25,
                ease,
              }}
            >
              ✦ Your Rise Begins Here ✦
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
