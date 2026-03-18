"use client";

import { fadeUpVariants, staggeredRevealVariants } from "@/shared/lib/animations";
import { motion } from "motion/react";

import Link from "next/link";

import AuthField from "./AuthField";
import AuthShell from "./AuthShell";

const loginMetrics = [
    { value: "07 days", label: "current streak" },
    { value: "03 habits", label: "ready today" },
    { value: "84%", label: "weekly rhythm" },
];

const loginHighlights = [
    "A cleaner daily check-in flow that keeps your next action obvious.",
    "Calm progress snapshots so you can see momentum at a glance.",
    "A focused routine space designed to get you in and moving quickly.",
];

function MailIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
        >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
        >
            <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function LoginForm() {
    return (
        <AuthShell
            badge="Resume your flow"
            spotlight="Your routine is ready when you are."
            spotlightCopy="Step back into HabitFlow with a calmer sign-in experience and a dashboard built to get you moving without friction."
            metrics={loginMetrics}
            highlights={loginHighlights}
            eyebrow="Sign in"
            title="Welcome back"
            description="Review today&apos;s habits, recover your streak, and keep the day moving with a cleaner, more focused entry point."
        >
            <motion.form
                variants={staggeredRevealVariants}
                className="space-y-5"
                action=""
            >
                <motion.div
                    variants={fadeUpVariants}
                    className="grid gap-3 rounded-[28px] border border-emerald-100 bg-emerald-50/60 p-4 sm:grid-cols-[1fr_auto]"
                >
                    <div>
                        <p className="text-[12px] font-black uppercase tracking-[0.18em] text-habit-accent">
                            Quick return
                        </p>
                        <p className="mt-2 text-[14px] font-semibold leading-6 text-slate-600">
                            Sign in to pick up your streak, check what is due today, and get back to your flow in one stop.
                        </p>
                    </div>
                    <div className="flex items-start sm:items-center">
                        <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-[0_16px_32px_rgba(74,222,128,0.12)]">
                            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                                Best for
                            </div>
                            <div className="mt-1 text-[15px] font-black tracking-[-0.03em] text-slate-900">
                                Daily check-ins
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                    <AuthField
                        id="login-email"
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="name@example.com"
                        autoComplete="email"
                        icon={<MailIcon />}
                    />
                </motion.div>

                <motion.div variants={fadeUpVariants}>
                    <AuthField
                        id="login-password"
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        icon={<LockIcon />}
                        hint="Secure entry"
                    />
                </motion.div>

                <motion.div
                    variants={fadeUpVariants}
                    className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                    <label
                        htmlFor="remember-me"
                        className="flex items-center gap-3 text-[14px] font-semibold text-slate-600"
                    >
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="size-4 rounded border-slate-300 accent-habit-primary"
                        />
                        Keep me signed in on this device
                    </label>
                    <button
                        type="button"
                        className="text-left text-[14px] font-bold text-habit-accent transition-colors hover:text-[#1d4f3c]"
                    >
                        Forgot password?
                    </button>
                </motion.div>

                <motion.div variants={fadeUpVariants} className="pt-1">
                    <button className="group flex w-full items-center justify-center gap-2 rounded-[22px] bg-[#121936] px-5 py-4 text-[15px] font-black text-white shadow-[0_24px_50px_rgba(15,23,42,0.18)] transition-transform duration-200 hover:-translate-y-0.5">
                        <span>Sign In to HabitFlow</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                        </svg>
                    </button>
                </motion.div>

                <motion.p
                    variants={fadeUpVariants}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-[13px] font-semibold leading-6 text-slate-500"
                >
                    Tip: use the same email you normally track with so your progress stays in one clean history.
                </motion.p>
            </motion.form>

            <motion.div
                variants={fadeUpVariants}
                className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 text-[14px] font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between"
            >
                <p>New here? Start building your rhythm in under five minutes.</p>
                <Link
                    href="/register"
                    className="font-black text-habit-accent transition-colors hover:text-[#1d4f3c]"
                >
                    Create an account
                </Link>
            </motion.div>
        </AuthShell>
    );
}
