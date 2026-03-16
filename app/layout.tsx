import type { Metadata } from "next";
import "@/styles/globals.css";

import Header from "@/widgets/Header/ui/Header";

export const metadata: Metadata = {
  title: "HabitFlow - Transform Your Life, One Habit at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden text-slate-800">
        <Header/>
        {children}
      </body>
    </html>
  );
}
