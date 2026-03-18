"use client";

import {
  fadeUpVariants,
  softScaleVariants,
  staggeredRevealVariants,
} from "@/shared/lib/animations";
import { motion } from "motion/react";

import type { ReactNode } from "react";

type AuthMetric = {
  value: string;
  label: string;
};

type AuthShellProps = {
  badge: string;
  spotlight: string;
  spotlightCopy: string;
  metrics: AuthMetric[];
  highlights: string[];
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function AuthShell({
  badge,
  spotlight,
  spotlightCopy,
  metrics,
  highlights,
  eyebrow,
  title,
  description,
  children,
}: AuthShellProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative isolate flex min-h-[calc(100dvh-72px)] items-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#fbfffc_0%,#eef9f2_45%,#f8fcf8_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,222,128,0.22),transparent_32%),radial-gradient(circle_at_right,rgba(16,38,28,0.12),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] bg-size:72px_72px opacity-35"
      />
      <motion.div
        aria-hidden="true"
        variants={softScaleVariants}
        className="pointer-events-none absolute -right-28 top-1/2 h-84 w-84 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.2)_0%,rgba(74,222,128,0)_68%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-295 gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <motion.aside
          variants={fadeUpVariants}
          className="relative overflow-hidden rounded-4xl border border-white/60 bg-[#10261c] p-6 text-white shadow-[0_32px_90px_rgba(10,25,20,0.24)] sm:p-8"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(160deg,rgba(74,222,128,0.12),rgba(16,38,28,0)_38%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),rgba(255,255,255,0)_32%)]"
          />
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-100">
              {badge}
            </span>
            <h2 className="mt-6 max-w-lg text-[clamp(2.25rem,7vw,4.6rem)] font-black leading-[0.94] tracking-[-0.06em]">
              {spotlight}
            </h2>
            <p className="mt-4 max-w-md text-[15px] font-medium leading-6 text-emerald-50/82">
              {spotlightCopy}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4"
                >
                  <div className="text-[22px] font-black tracking-[-0.05em]">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-50/70">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/6 p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-100/80">
                Inside the flow
              </div>
              <div className="mt-4 space-y-3">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-300/18 text-emerald-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="size-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5 12 4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="text-[14px] font-medium leading-6 text-emerald-50/86">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.div
          variants={staggeredRevealVariants}
          className="relative overflow-hidden rounded-4xl border border-white/90 bg-white/94 p-5 shadow-[0_32px_80px_rgba(15,23,42,0.14)] sm:p-8 lg:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,0.16)_0%,rgba(74,222,128,0)_70%)]"
          />
          <motion.div variants={fadeUpVariants} className="relative">
            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-habit-accent">
              {eyebrow}
            </span>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-slate-900">
              {title}
            </h1>
            <p className="mt-3 max-w-xl text-[15px] font-medium leading-6 text-slate-500">
              {description}
            </p>
          </motion.div>

          <div className="relative mt-8">{children}</div>
        </motion.div>
      </div>
    </motion.section>
  );
}
