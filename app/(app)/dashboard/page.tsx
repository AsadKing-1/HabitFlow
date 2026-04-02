"use client";

import CurrentHabit from "@/widgets/CurrentHabit/ui/CurrentHabit";
import DashboardBoard from "@/widgets/DashboardBoard/ui/DashboardBoard";
import TodayHabit from "@/widgets/TodayHabit/TodayHabit";

export default function DashboardPage() {
    return (
        <main className="min-h-[calc(100vh-80px)] px-6">
            <div className="flex w-full max-w-8xl flex-col justify-center gap-5 md:flex-row md:items-center">
                <DashboardBoard habitDone={2} streak={4} weeklyRhythm={69} />
                <CurrentHabit habit={{ id: "1", title: "Drink Water", emoji: "💧", description: "Stay hydrated throughout the day", createdAt: new Date(), frequency: "daily", daysOfWeek: [1, 2, 3, 4, 5,], isCompletedToday: false, streak: 4, bestStreak: 6 }} />
            </div>
            <div>
                <TodayHabit habits={[{
                    id: "1",
                    title: "Пить воду",
                    emoji: "💧",
                    description: "Минимум 2 литра в день",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: true,
                    streak: 6,
                    bestStreak: 14,
                },
                {
                    id: "2",
                    title: "Тренировка",
                    emoji: "🏋️",
                    description: "30 минут упражнений",
                    createdAt: new Date(),
                    frequency: "weekly",
                    daysOfWeek: [1, 3, 5],
                    isCompletedToday: false,
                    streak: 3,
                    bestStreak: 10,
                },
                {
                    id: "3",
                    title: "Чтение",
                    emoji: "📚",
                    description: "20 страниц книги",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: true,
                    streak: 12,
                    bestStreak: 20,
                },
                {
                    id: "4",
                    title: "Программирование",
                    emoji: "💻",
                    description: "Практика кода",
                    createdAt: new Date(),
                    frequency: "custom",
                    daysOfWeek: [2, 4, 6],
                    isCompletedToday: false,
                    streak: 4,
                    bestStreak: 9,
                },
                {
                    id: "5",
                    title: "Медитация",
                    emoji: "🧘",
                    description: "10 минут спокойствия",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: false,
                    streak: 2,
                    bestStreak: 7,
                },
                {
                    id: "6",
                    title: "Сон вовремя",
                    emoji: "😴",
                    description: "Ложиться до 23:00",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: true,
                    streak: 5,
                    bestStreak: 11,
                },
                {
                    id: "7",
                    title: "Уборка",
                    emoji: "🧹",
                    description: "Поддерживать порядок",
                    createdAt: new Date(),
                    frequency: "weekly",
                    daysOfWeek: [0],
                    isCompletedToday: false,
                    streak: 1,
                    bestStreak: 4,
                },
                {
                    id: "8",
                    title: "Прогулка",
                    emoji: "🚶",
                    description: "Минимум 5000 шагов",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: false,
                    streak: 3,
                    bestStreak: 8,
                },{
                    id: "10",
                    title: "Прогулка",
                    emoji: "🚶",
                    description: "Минимум 5000 шагов",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: false,
                    streak: 3,
                    bestStreak: 8,
                },{
                    id: "11",
                    title: "Прогулка",
                    emoji: "🚶",
                    description: "Минимум 5000 шагов",
                    createdAt: new Date(),
                    frequency: "daily",
                    daysOfWeek: [],
                    isCompletedToday: false,
                    streak: 3,
                    bestStreak: 8,
                },]} />
            </div>
        </main>
    );
}
