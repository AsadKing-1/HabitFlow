"use client";

import SplitText from "@/components/SplitText/SplitText";
import { cubicBezier, motion } from "motion/react";

import Image from "next/image";
import phone from "@/images/phone.png";

import Link from "next/link";

const LinkButton = motion.create(Link);

const revealEase = cubicBezier(0.22, 1, 0.36, 1);

const heroStats = [
    { value: "2 min", label: "daily reset" },
    { value: "7-day", label: "streak boost" },
    { value: "Zero clutter", label: "clean focus" }
];

const previewStats = [
    { value: "4/5", label: "habits done" },
    { value: "84%", label: "weekly score" },
    { value: "07", label: "day streak" }
];

const benefitPills = [
    "Quick daily check-ins",
    "Visual streak momentum",
    "Built for busy days"
];

const heroViewport = {
    once: true,
    amount: 0.35
};

const heroVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08
        }
    }
};

const revealUpVariants = {
    hidden: {
        opacity: 0,
        y: 32,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: revealEase
        }
    }
};

const glowVariants = {
    hidden: {
        opacity: 0,
        scale: 0.82
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: revealEase
        }
    }
};

export default function LandingHero() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={heroViewport}
            className="relative isolate flex min-h-[calc(100dvh-72px)] items-center overflow-hidden bg-habit-secondary"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(240,253,244,0.86)_36%,rgba(220,252,231,0.52)_68%,rgba(240,253,244,0.95)_100%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0))]"
            />
            <motion.div
                aria-hidden="true"
                variants={glowVariants}
                className="pointer-events-none absolute left-1/2 top-6 h-72 w-72 -translate-x-1/2 rounded-full bg-habit-primary/20 blur-3xl md:left-[68%] md:top-16 md:h-96 md:w-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 top-28 h-44 w-44 rounded-full bg-white/70 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 bottom-8 h-52 w-52 rounded-full bg-habit-primary/18 blur-3xl"
            />
            <motion.div className="mx-auto grid w-full max-w-310 items-center gap-10 px-4 py-8 sm:px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:px-10 md:py-14">
                <motion.div
                    variants={heroVariants}
                    className="relative z-10 flex w-full flex-col justify-center gap-5 md:gap-6"
                >
                    <motion.div
                        variants={revealUpVariants}
                        className="max-w-fit rounded-full border border-white/80 bg-white/80 px-3.5 py-1.5 shadow-[0_12px_40px_rgba(148,163,184,0.14)] backdrop-blur"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-habit-accent/85 sm:text-[11px]">
                            Minimalist habit system
                        </span>
                    </motion.div>
                    <motion.div variants={revealUpVariants} className="max-w-fit">
                        <SplitText
                            tag="h1"
                            className="max-w-[50ch] text-balance text-[clamp(2.95rem,14vw,6.5rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#121936]"
                        >
                            <span className="block">Transform</span>
                            <span className="block">
                                Your Life, <span className="text-habit-primary">One</span>
                            </span>
                            <span className="block">
                                <span className="text-habit-primary">Habit</span> at a Time
                            </span>
                        </SplitText>
                    </motion.div>
                    <motion.div
                        variants={revealUpVariants}
                        className="max-w-136 text-left text-[15px] leading-6 font-semibold text-slate-600 sm:text-[17px]"
                    >
                        The minimalist habit tracker designed to help you build consistency, stay motivated, and reach your goals without the clutter.
                    </motion.div>
                    <motion.div
                        variants={revealUpVariants}
                        className="grid w-full max-w-md grid-cols-1 gap-3 pt-1 sm:grid-cols-2"
                    >
                        <LinkButton
                            href={"/register"}
                            className="inline-flex items-center justify-center rounded-2xl bg-[#121936] px-6 py-3.5 text-center text-[14px] font-semibold text-white shadow-[0_22px_45px_rgba(15,23,42,0.18)] transition-colors md:text-[16px]"
                        >
                            Start Your Journey
                        </LinkButton>
                        <LinkButton
                            href={"/login"}
                            className="inline-flex items-center justify-center rounded-2xl border border-white/90 bg-white/80 px-6 py-3.5 text-center text-[14px] font-semibold text-slate-700 shadow-[0_16px_30px_rgba(148,163,184,0.14)] backdrop-blur transition-colors md:text-[16px]"
                        >
                            Access Account
                        </LinkButton>
                    </motion.div>
                    <motion.div
                        variants={heroVariants}
                        className="grid w-full grid-cols-3 gap-2 pt-1 sm:max-w-lg sm:gap-3"
                    >
                        {heroStats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={revealUpVariants}
                                className="rounded-2xl border border-white/80 bg-white/75 px-3 py-3 shadow-[0_14px_30px_rgba(148,163,184,0.12)] backdrop-blur"
                            >
                                <div className="text-[13px] font-black text-[#121936] sm:text-[15px]">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[11px]">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={revealUpVariants}
                        className="flex max-w-xl flex-wrap gap-2"
                    >
                        {benefitPills.map((pill) => (
                            <span
                                key={pill}
                                className="rounded-full border border-emerald-100 bg-white/65 px-3 py-1.5 text-[11px] font-semibold text-habit-accent shadow-[0_10px_20px_rgba(187,247,208,0.25)] backdrop-blur sm:text-[12px]"
                            >
                                {pill}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div variants={revealUpVariants} className="pt-2 md:hidden">
                        <div className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/76 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-habit-primary/20 blur-3xl"
                            />
                            <div className="relative flex items-start justify-between gap-4">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                                        Today&apos;s rhythm
                                    </div>
                                    <div className="mt-2 text-xl font-black text-[#121936]">
                                        Consistency, simplified
                                    </div>
                                </div>
                                <div className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-habit-accent">
                                    +18% focus
                                </div>
                            </div>
                            <div className="relative mt-4 overflow-hidden rounded-[1.7rem] bg-[linear-gradient(180deg,#1f2937_0%,#111827_100%)] px-4 pt-6">
                                <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                                    HabitFlow dashboard
                                </div>
                                <Image
                                    className="mx-auto h-auto w-[82%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                                    src={phone}
                                    alt="HabitFlow mobile dashboard preview"
                                    priority
                                    sizes="(max-width: 768px) 70vw, 32vw"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-2">
                                {previewStats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl bg-slate-50 px-3 py-3"
                                    >
                                        <div className="text-[13px] font-black text-[#121936]">
                                            {stat.value}
                                        </div>
                                        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="relative hidden md:flex md:items-center md:justify-center" variants={revealUpVariants}>
                    <div className="relative w-full max-w-xl rounded-[2.75rem] border border-white/75 bg-white/70 p-6 shadow-[0_40px_100px_rgba(15,23,42,0.14)] backdrop-blur">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute right-8 top-10 h-28 w-28 rounded-full bg-habit-primary/20 blur-3xl"
                        />
                        <div className="absolute right-6 top-6 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-[0_20px_40px_rgba(148,163,184,0.12)]">
                            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                                Weekly energy
                            </div>
                            <div className="mt-1 text-2xl font-black text-[#121936]">
                                +18%
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-[2.25rem] bg-[linear-gradient(180deg,#1f2937_0%,#111827_100%)] px-8 pt-10">
                            <div className="absolute left-6 top-6 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                                HabitFlow dashboard
                            </div>
                            <Image
                                className="mx-auto h-auto w-full max-w-md drop-shadow-[0_26px_50px_rgba(0,0,0,0.4)]"
                                src={phone}
                                alt="HabitFlow mobile dashboard preview"
                                priority
                                sizes="(max-width: 1024px) 42vw, 34vw"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-3">
                            {previewStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-[1.4rem] border border-slate-100 bg-slate-50/85 px-4 py-4"
                                >
                                    <div className="text-lg font-black text-[#121936]">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
