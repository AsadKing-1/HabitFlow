"use client";

import Link from "next/link";

import { supabase } from "@/lib/supabase/client";
import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence, motion } from "motion/react";

import { useEffect, useEffectEvent, useState } from "react";

interface DashboardHeaderProps {
    full_Name: string | null;
}

const links = [
    { name: "Dashboard", path: "/dashboard", description: "Track today's progress" },
    { name: "Habits", path: "/habits", description: "Manage routines and streaks" },
    { name: "Journal", path: "/journal", description: "Capture notes and reflections" },
    { name: "Profile", path: "/profile", description: "Update your account details" }
];

const desktopLinkBase = "relative inline-block text-[15px] font-bold text-slate-700 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-habit-accent after:transition-transform after:duration-300 after:content-['']";

export default function DashboardHeader({ full_Name }: DashboardHeaderProps) {
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

    const router = useRouter();
    const pathname = usePathname();
    const userName = full_Name?.trim() || "User";
    const userInitials = userName
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("") || "U";

    const closeMenu = () => setOpenMenu(false);
    const isActiveLink = (path: string) => pathname === path || pathname.startsWith(`${path}/`);
    const closeMenuOnPathChange = useEffectEvent(() => {
        setOpenMenu(false);
    });

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (!error) {
            closeMenu();
            router.push("/login");
        }
    };

    useEffect(() => {
        closeMenuOnPathChange();
    }, [pathname]);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (isOpenMenu) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpenMenu]);

    return (
        <header className="relative z-40 flex flex-col gap-4 bg-white p-3 shadow-md">
            <div className="flex w-full items-center justify-between gap-3">
                <div>
                    <h1 className="text-[20px] font-extrabold tracking-[-0.03em] md:text-[22px]">HabitFlow</h1>
                </div>
                <div className="hidden items-center gap-5 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            className={`${desktopLinkBase} ${isActiveLink(link.path) ? "text-habit-accent after:scale-x-100" : "after:scale-x-0 hover:text-slate-950 hover:after:scale-x-100"}`}
                            href={link.path}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden items-center justify-between gap-4 md:flex">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">
                            {userName}
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6 text-gray-600"
                        >
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <button type="button" onClick={handleSignOut} className="flex items-center justify-center rounded-lg bg-habit-primary p-2 text-white transition hover:bg-habit-accent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => setOpenMenu((prev) => !prev)}
                    aria-expanded={isOpenMenu}
                    aria-controls="mobile-navigation"
                    aria-label={isOpenMenu ? "Close navigation menu" : "Open navigation menu"}
                    className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border text-slate-900 shadow-sm transition md:hidden ${isOpenMenu ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-white"}`}
                >
                    <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${isOpenMenu ? "rotate-45" : "-translate-y-1.5"}`} />
                    <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-200 ${isOpenMenu ? "opacity-0" : "opacity-100"}`} />
                    <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${isOpenMenu ? "-rotate-45" : "translate-y-1.5"}`} />
                </button>
            </div>
            <AnimatePresence initial={false}>
                {isOpenMenu ? (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close mobile menu"
                            onClick={closeMenu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.16 }}
                            className="fixed inset-0 z-30 bg-slate-950/16 md:hidden"
                        />
                        <motion.nav
                            id="mobile-navigation"
                            initial={{ opacity: 0, y: -14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-3 right-3 top-[calc(100%+0.75rem)] z-40 flex flex-col gap-4 overflow-hidden rounded-[28px] border border-emerald-100 bg-white p-5 shadow-[0_18px_38px_rgba(15,23,42,0.12)] md:hidden"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <div className="flex items-center gap-3 rounded-[22px] bg-habit-secondary px-4 py-3">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-habit-primary/20 text-[14px] font-black text-habit-accent">
                                    {userInitials}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-habit-accent/70">
                                        Logged in as
                                    </p>
                                    <p className="truncate text-[15px] font-black text-slate-950">
                                        {userName}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                {links.map((link) => {
                                    const isActive = isActiveLink(link.path);

                                    return (
                                        <Link
                                            key={link.path}
                                            href={link.path}
                                            onClick={closeMenu}
                                            className={`group flex items-center justify-between rounded-[22px] border px-4 py-3 transition-colors ${isActive ? "border-emerald-200 bg-emerald-50 text-slate-950" : "border-slate-200/80 bg-white text-slate-700 hover:border-emerald-100 hover:bg-emerald-50/60 hover:text-slate-950"}`}
                                        >
                                            <div>
                                                <p className="text-[15px] font-black">
                                                    {link.name}
                                                </p>
                                                <p className="mt-1 text-[12px] font-medium text-slate-500 transition group-hover:text-slate-600">
                                                    {link.description}
                                                </p>
                                            </div>
                                            <div className={`flex size-9 items-center justify-center rounded-full transition ${isActive ? "bg-white text-habit-accent" : "bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-habit-accent"}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="flex items-center justify-center gap-2 rounded-[20px] bg-habit-accent px-4 py-3 font-bold text-white shadow-[0_12px_24px_rgba(45,106,79,0.2)] transition-colors hover:bg-[#25563f]"
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                <span>Logout</span>
                            </button>
                        </motion.nav>
                    </>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
