"use client";

import CurrentHabit from "@/widgets/CurrentHabit/ui/CurrentHabit";
import DashboardBoard from "@/widgets/DashboardBoard/ui/DashboardBoard";

export default function DashboardPage() {
    return (
        <main className="min-h-[calc(100vh-80px)] px-6">
            <div className="flex w-full max-w-8xl flex-col justify-center gap-5 md:flex-row md:items-center">
                <DashboardBoard habitDone={2} streak={4} weeklyRhythm={69} />
                <CurrentHabit habit={{ id: "1", title: "Drink Water", description: "Stay hydrated throughout the day", createdAt: new Date(), frequency: "daily", daysOfWeek: [1, 2, 3, 4, 5, ], isCompletedToday: false, streak: 4, bestStreak: 6 }} />
            </div>
        </main>
    );
}
