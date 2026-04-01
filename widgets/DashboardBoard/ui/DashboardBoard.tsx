"use client";

interface DashboardBoardProps {
    streak?: number;
    habitDone?: number;
    weeklyRhythm?: number;
}

const stats = (
    streak: number,
    weeklyRhythm: number,
    habitDone: number
) => [
    { value: streak, label: "Day streak" },
    { value: `${weeklyRhythm}%`, label: "Weekly rhythm" },
    { value: habitDone, label: "Habits done" }
];

export default function DashboardBoard({
    streak = 12,
    habitDone = 6,
    weeklyRhythm = 85
}: DashboardBoardProps) {
    return (
        <section className="w-full min-w-0 flex-6 py-8 sm:py-10">
            <div
                className="relative isolate overflow-hidden rounded-[2.75rem] border border-white/10 px-6 py-8 text-white shadow-[0_32px_90px_rgba(8,21,15,0.3)] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
                style={{
                    backgroundColor: "#071c13",
                    backgroundImage: `
                        radial-gradient(circle at 12% 18%, rgba(74, 222, 128, 0.16) 0, transparent 34%),
                        radial-gradient(circle at 88% 12%, rgba(45, 106, 79, 0.34) 0, transparent 28%),
                        radial-gradient(circle at 78% 82%, rgba(74, 222, 128, 0.12) 0, transparent 24%),
                        linear-gradient(135deg, #103324 0%, #081b14 48%, #030f0b 100%)
                    `
                }}
            >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,transparent_42%,rgba(74,222,128,0.1)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

                <div className="relative z-10 flex flex-col gap-10">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-[11px] font-black uppercase tracking-[0.32em] text-habit-primary/85">
                            Current status
                        </p>

                        <h2 className="max-w-[11ch] text-balance text-[45px] md:text-[75px] font-black leading-[0.88] tracking-[-0.06em]">
                            Your habits are ready when you are.
                        </h2>

                        <p className="max-w-90 mt-10 text-slate-200">Stay consistent, track your progress, and build routines that actually stick. Small actions compound over time and today is another step forward.</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
                        {stats(streak, weeklyRhythm, habitDone).map((item) => (
                            <div
                                key={item.label}
                                className="rounded-[1.75rem] border border-white/8 bg-white/3 px-4 py-3 backdrop-blur-[2px] sm:px-5"
                            >
                                <p className="text-[clamp(2rem,5vw,3rem)] font-black leading-none tracking-[-0.04em] text-habit-primary">
                                    {item.value}
                                </p>
                                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/52">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
