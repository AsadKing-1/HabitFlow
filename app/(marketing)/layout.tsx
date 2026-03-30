import type { ReactNode } from "react";

import Header from "@/widgets/Header/ui/Header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
