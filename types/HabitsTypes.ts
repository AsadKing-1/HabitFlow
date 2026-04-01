export type Habit = {
    id: string;
    title: string;
    description?: string;
    createdAt: Date;
    frequency: "daily" | "weekly" | "custom";
    daysOfWeek: number[];
    isCompletedToday: boolean;
    streak: number;
    bestStreak: number;
};
