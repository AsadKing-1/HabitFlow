"use client";

import SplitText from "@/components/SplitText/SplitText";
import { cubicBezier, motion } from "motion/react";

import Link from "next/link";

const LinkButton = motion.create(Link);

const revealEase = cubicBezier(0.22, 1, 0.36, 1);
const headingEase = cubicBezier(0.33, 1, 0.68, 1);

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

const headingVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.35,
            ease: headingEase
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
            className="relative min-h-[calc(100dvh-90px)] overflow-hidden bg-habit-secondary"
        >
            <motion.div
                aria-hidden="true"
                variants={glowVariants}
                className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-habit-primary/15 blur-3xl"
            />
            <motion.div
                variants={heroVariants}
                className="relative flex w-full flex-col justify-center gap-4 px-4 py-12 sm:px-6 md:px-10"
            >
                <motion.div variants={revealUpVariants} className="max-w-fit">
                    <SplitText
                        tag="h1"
                        className="text-[clamp(2.9rem,10vw,6.5rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#121936]"
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
                    className="max-w-100 text-left text-[16px] font-semibold text-slate-500"
                >
                    The minimalist habit tracker designed to help you build consistency, stay motivated, and reach your goals without the clutter.
                </motion.div>
                <motion.div className="flex items-center gap-2.5" variants={heroVariants}>
                    <LinkButton variants={revealUpVariants} className="bg-black text-white px-10 py-3 text-[12px] text-center font-semibold rounded-xl" href={"/register"}>Start Your Journey</LinkButton>
                    <LinkButton variants={revealUpVariants} href={"/login"} className="bg-white px-10 py-3 text-[12px] text-center border font-semibold border-slate-200 rounded-xl">Access Account</LinkButton>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
