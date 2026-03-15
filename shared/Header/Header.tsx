"use client";

import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Header() {
    return (
        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-sm">
            <div className="flex w-full items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-[#4ade80] p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-[16px] font-bold text-habit-accent sm:text-[18px]">HabitFlow</h1>
                    </div>
                </div>
                <div className="shrink-0">
                    <MotionLink
                        href="/register"
                        transition={{ duration: 0.1, ease: "easeIn" }}
                        initial={{ background: "#4ade80" }}
                        whileHover={{ background: "#2bac72" }}
                        className="inline-flex rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm shadow-habit-soft-blue sm:px-5 sm:py-2.5"
                    >
                        Get Started
                    </MotionLink>
                </div>
            </div>
        </header>
    )
}
