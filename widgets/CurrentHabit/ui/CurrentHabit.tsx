"use client";

import type { Habit } from "@/types/HabitsTypes";

const weekDays = [
    { label: "Mon", value: 1 },
    { label: "Tue", value: 2 },
    { label: "Wed", value: 3 },
    { label: "Thu", value: 4 },
    { label: "Fri", value: 5 },
    { label: "Sat", value: 6 },
    { label: "Sun", value: 7 }
];

const frequencyLabels = {
    daily: "Daily ritual",
    weekly: "Weekly reset",
    custom: "Custom rhythm"
} satisfies Record<Habit["frequency"], string>;

interface CurrentHabitProps {
    habit: Habit;
}

export default function CurrentHabit({ habit }: CurrentHabitProps) {
    const description = habit.description?.trim() || "Small actions compound into lasting routines. Keep the chain alive today.";
    const isCompletedToday = habit.isCompletedToday;
    const activeDays = new Set(habit.daysOfWeek);
    const stats = [
        { label: "Current streak", value: `${habit.streak} days` },
        { label: "Best streak", value: `${habit.bestStreak} days` }
    ];

    return (
        <aside className="flex min-h-152 h-140 w-full  flex-4 flex-col rounded-4xl border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">
                    Current habit
                </p>

                <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${isCompletedToday ? "bg-emerald-950 text-white" : "bg-habit-secondary text-habit-accent"}`}>
                    {isCompletedToday ? "Done today" : "Ready today"}
                </span>
            </div>

            <div className="mt-6">
                <h1 className="max-w-[11ch] text-[clamp(2rem,4vw,3rem)] font-black leading-[0.92] tracking-[-0.05em] text-slate-950">
                    {habit.title}
                </h1>

                <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-600">
                    {description}
                </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {stats.map((item) => (
                    <div key={item.label} className="rounded-[1.35rem] border border-slate-200 bg-slate-50 px-4 py-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            {item.label}
                        </p>

                        <p className="mt-3 text-[1.6rem] font-black leading-none tracking-[-0.04em] text-slate-950">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </p>

                        <p className="mt-2 text-[15px] font-bold text-slate-900">
                            {frequencyLabels[habit.frequency]}
                        </p>
                    </div>

                    <p className="text-[12px] font-semibold text-slate-500">
                        {habit.daysOfWeek.length} active day{habit.daysOfWeek.length === 1 ? "" : "s"}
                    </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-1 sm:grid-cols-7">
                    {weekDays.map((day) => {
                        const isActive = activeDays.has(day.value);

                        return (
                            <div
                                key={day.value}
                                className={`rounded-xl py-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] ${isActive ? "bg-habit-accent text-white" : "bg-white text-slate-400"}`}
                            >
                                {day.label}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-auto pt-6">
                <button
                    type="button"
                    disabled={isCompletedToday}
                    className={`w-full rounded-[1.1rem] px-4 py-4 text-[15px] font-black tracking-[-0.02em] text-white transition ${isCompletedToday ? "cursor-default bg-slate-900/75" : "bg-habit-accent hover:bg-[#25563f]"}`}
                >
                    {isCompletedToday ? "Completed Today" : "Complete For Today"}
                </button>

                <p className="mt-3 text-[12px] font-semibold text-slate-500">
                    {isCompletedToday ? "Nice work. Your streak is safe for today." : `Best streak: ${habit.bestStreak} days. Keep the momentum alive.`}
                </p>
            </div>
        </aside>
    );
}
