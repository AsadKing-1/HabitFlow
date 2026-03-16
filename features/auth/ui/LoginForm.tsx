"use client";

import {
    fadeUpVariants,
    revealViewport,
    softScaleVariants,
    staggeredRevealVariants
} from "@/shared/lib/animations";
import SplitText from "@/shared/ui/SplitText/SplitText";
import { motion } from "motion/react";

export default function LoginForm(){
    return(
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="relative isolate flex min-h-[calc(100dvh-72px)] items-center justify-center overflow-hidden bg-habit-secondary/80 px-4 shadow-xl shadow-habit-soft-blue sm:px-6"
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
                className="relative z-10 flex w-full max-w-[30rem] flex-col items-center"
            >
                <motion.div variants={fadeUpVariants} className="max-w-fit">
                    <SplitText
                        text="Welcome Back"
                        className="text-[35px] font-bold md:text-[40px]"
                    />
                </motion.div>
                <motion.p
                    variants={fadeUpVariants}
                    className="text-center text-[14px] font-semibold text-habit-primary md:text-[16px]"
                >
                    Pick up your streak and keep the momentum going.
                </motion.p>
                <motion.form
                    variants={fadeUpVariants}
                    className="mt-4 flex w-full flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-habit-soft-blue md:max-w-[30rem]"
                    action=""
                >
                    <label htmlFor="login-email" className="font-semibold">Email Address</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3.25 left-3 size-6 text-slate-400">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-11 placeholder:font-semibold" id="login-email" type="email" placeholder="Email Address" />
                    </div>
                    <label htmlFor="login-password" className="font-semibold">Password</label>
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute top-3.25 left-3 size-6 text-slate-400">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg>
                        <input className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 pl-11 placeholder:font-semibold" id="login-password" type="password" placeholder="Password" />
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-3 text-[13px] font-semibold text-slate-500">
                        <label htmlFor="remember-me" className="flex items-center gap-2">
                            <input id="remember-me" type="checkbox" className="size-4 rounded border-slate-300 accent-habit-primary" />
                            Remember me
                        </label>
                        <button type="button" className="text-habit-accent">Forgot password?</button>
                    </div>
                    <div className="mt-2">
                        <button className="w-full rounded-xl bg-habit-primary p-4 font-bold text-white shadow-md shadow-habit-soft-blue">Sign In</button>
                    </div>
                </motion.form>
            </motion.div>
        </motion.section>
    )
}
