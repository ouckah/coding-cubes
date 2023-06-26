import { notFound } from "next/navigation";

import { dashboardConfig } from "@/config/admin_dash";
import { getCurrentUser } from "@/lib/session";
import { MainNav } from "@/components/main-nav";
import { DashboardNav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UserAccountNav } from "@/components/user-account-nav";
import { marketingConfig } from "@/config/marketing";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user || !user.email) {
    return notFound();
  }

  const administrators = ["wedabeast360@gmail.com"];
  let isAdmin = administrators.includes(user.email);

  return (
    <div className="flex min-h-screen flex-col space-y-6 bg-[#2c2c2c]">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={marketingConfig.mainNav} />
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
              isAdmin: isAdmin,
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden max-h-[85px] w-[200px]  flex-col rounded-xl bg-[#212121] md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
