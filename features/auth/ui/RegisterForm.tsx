"use client";

import {
    fadeUpVariants,
    revealViewport,
    softScaleVariants,
    staggeredRevealVariants
} from "@/shared/lib/animations";
import SplitText from "@/shared/ui/SplitText/SplitText";
import { motion } from "motion/react";

export default function RegisterForm() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="relative isolate flex min-h-[calc(100dvh-72px)] items-center justify-center overflow-hidden bg-habit-secondary/60 px-4 shadow-xl shadow-habit-soft-blue sm:px-6"
        >
            <motion.div
                aria-hidden="true"
                variants={softScaleVariants}
                className="pointer-events-none absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-habit-primary/20 blur-3xl md:top-16 md:h-80 md:w-80"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-white/70 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 bottom-12 h-48 w-48 rounded-full bg-habit-primary/15 blur-3xl"
            />
            <motion.div
                variants={staggeredRevealVariants}
                className="relative z-10 flex w-full max-w-120 flex-col items-center"
            >
                <motion.div variants={fadeUpVariants} className="max-w-fit">
                    <SplitText
                        text="Join HabitFlow"
                        className="text-[35px] font-bold md:text-[40px]"
                    />
                </motion.div>
                <motion.p
                    variants={fadeUpVariants}
                    className="text-center text-[14px] font-semibold text-habit-primary md:text-[16px]"
                >
                    Transform Your life, one small habit at a time.
                </motion.p>
                <motion.form
                    variants={fadeUpVariants}
                    className="mt-4 flex w-full flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-habit-soft-blue md:max-w-[30rem]"
                    action=""
                >
                    <label htmlFor="name" className="font-semibold">Full Name</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3.25 left-3 size-6 text-slate-400">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>

                        <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-11 placeholder:font-semibold" id="name" type="text" placeholder="Full Name" />
                    </div>
                    <label htmlFor="email" className="font-semibold">Email Address</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3.25 left-3 size-6 text-slate-400">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-11 placeholder:font-semibold" id="email" type="email" placeholder="Email Address" />
                    </div>
                    <label htmlFor="password" className="font-semibold">Password</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3.25 left-3 size-6 text-slate-400">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg>
                        <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-11 placeholder:font-semibold" id="password" type="password" placeholder="Password" />
                    </div>
                    <label htmlFor="confirm-password" className="font-semibold">Confirm Password</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3.25 left-3 size-6 text-slate-400">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg>
                        <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-11 placeholder:font-semibold" id="confirm-password" type="password" placeholder="Confirm Password" />
                    </div>
                    <p className="ml-1 text-[12px] font-semibold text-slate-500">Must be at least 8 characters long</p>
                    <div>
                        <button className="w-full rounded-xl bg-habit-primary p-4 font-bold text-white shadow-md shadow-habit-soft-blue">Create Account</button>
                    </div>
                </motion.form>
            </motion.div>
        </motion.section>
    )
}
