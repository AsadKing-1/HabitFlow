export default function DashboardPage() {
    return (
        <main className="flex min-h-[calc(100dvh-72px)] items-center justify-center bg-habit-secondary px-6">
            <div className="rounded-3xl border border-white/80 bg-white/80 px-6 py-5 text-center shadow-[0_24px_60px_rgba(148,163,184,0.16)] backdrop-blur">
                <p className="text-[12px] font-black uppercase tracking-[0.24em] text-habit-accent/80">
                    Dashboard
                </p>
                <h1 className="mt-2 text-2xl font-black text-slate-900">
                    Your habit workspace is coming together.
                </h1>
            </div>
        </main>
    );
}
