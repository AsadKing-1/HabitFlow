"use client";

import type { Habit } from "@/types/HabitsTypes";

const frequencyLabels = {
    daily: "Daily ritual",
    weekly: "Weekly reset",
    custom: "Custom rhythm"
} satisfies Record<Habit["frequency"], string>;

const accentVariants = [
    "bg-emerald-100 text-emerald-700",
    "bg-emerald-600 text-white",
    "bg-rose-100 text-rose-900"
] as const;

interface TodayHabitProps {
    habits: Habit[];
}

function getHabitSubtitle(habit: Habit) {
    return habit.description?.trim() || frequencyLabels[habit.frequency];
}

export default function TodayHabit({ habits }: TodayHabitProps) {
    if (!habits.length) {
        return (
            <section className="min-w-0 py-8 sm:py-10">
                <h1 className="text-[clamp(1.6rem,3.4vw,2rem)] font-black tracking-[-0.05em] text-slate-900">
                    Today Habits
                </h1>
                <div className="mt-5 rounded-4xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                    Nothing queued for today.
                </div>
            </section>
        );
    }

    return (
        <section className="min-w-0 py-8 sm:py-10">
            <h1 className="text-[clamp(1.6rem,3.4vw,2rem)] font-black tracking-[-0.05em] text-slate-900">
                Today Habit{habits.length > 1 ? "s" : ""}
            </h1>

            <div className="mt-5 grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {habits.map((habit, index) => {
                    const iconAccent = accentVariants[index % accentVariants.length];

                    return (
                        <article
                            className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-[0_10px_26px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_14px_32px_rgba(15,23,42,0.07)]"
                            key={habit.id}
                        >
                            <div className={`flex size-11 shrink-0 items-center justify-center rounded-full ${iconAccent}`}>
                                <span className="text-[1.1rem] leading-none">
                                    {habit.emoji}
                                </span>
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-[1.05rem] font-black tracking-[-0.03em] text-slate-900 sm:text-[1.15rem]">
                                    {habit.title}
                                </h3>
                                <p className="mt-1 truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                                    {getHabitSubtitle(habit)}
                                </p>
                            </div>

                            <div
                                className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors ${habit.isCompletedToday ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-300 bg-white text-transparent"}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.261a1 1 0 0 1-1.42.005l-3.2-3.2a1 1 0 1 1 1.414-1.414l2.49 2.49 6.493-6.55a1 1 0 0 1 1.417-.006Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">
                                    {habit.isCompletedToday ? "Completed today" : "Not completed yet"}
                                </span>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
