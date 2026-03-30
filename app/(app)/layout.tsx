import type { ReactNode } from "react";
import DashboardHeader from "@/widgets/DashboardHeader/ui/DashboardHeader";

import { createClient } from "@/lib/supabase/server";

export default async function AppLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    const supabaseServer = await createClient();
    const { data: { user }, } = await supabaseServer.auth.getUser();
    const fullName = user?.user_metadata?.full_name ?? user?.email ?? "User";
    
    return (
        <>
            <DashboardHeader full_Name={fullName}/>
            {children}
        </>
    );
}
