"use client";

import { motion } from "motion/react";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function Header() {
    return (
        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-3 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                    <div className="rounded-2xl bg-[#4ade80] p-2 text-white shadow-[0_14px_28px_rgba(74,222,128,0.28)]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-[15px] font-black tracking-[-0.03em] text-habit-accent sm:text-[18px]">HabitFlow</h1>
                        <p className="hidden text-[11px] font-semibold text-slate-500 sm:block">Build momentum daily</p>
                    </div>
                </div>
                <div className="shrink-0">
                    <MotionLink
                        href="/register"
                        transition={{ duration: 0.1, ease: "easeIn" }}
                        initial={{ background: "#4ade80" }}
                        whileHover={{ background: "#2bac72" }}
                        className="inline-flex items-center justify-center rounded-full px-3.5 py-2 text-[13px] font-bold text-white shadow-[0_18px_35px_rgba(74,222,128,0.28)] sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        <span className="sm:hidden">Start free</span>
                        <span className="hidden sm:inline">Get Started</span>
                    </MotionLink>
                </div>
            </div>
        </header>
    )
}
