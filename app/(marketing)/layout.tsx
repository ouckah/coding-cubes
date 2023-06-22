import Link from "next/link";

import { marketingConfig } from "@/config/marketing";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { UserAccountNav } from "@/components/user-account-nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#2c2c2c]">
      <header className="z-40 flex justify-between bg-background p-3">
        <div className="ml-[15rem] pt-[2px]">
          <MainNav items={marketingConfig.mainNav} />
        </div>
        <div className="mr-[15rem] flex gap-10">
          <Link
            href="/pricing"
            className={cn(
              "flex items-center rounded-xl bg-[#ffc700] px-3 py-1 text-[24px] font-bold text-[#212121] transition-colors hover:text-white/80"
            )}
          >
            <Icons.star className="mr-[5px] font-bold" /> PREMIUM
          </Link>
          {user && (
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
          )}
          {!user && (
            <>
              <Link
                href="/register"
                className={cn(
                  "flex items-center text-[24px] font-bold transition-colors hover:text-black/80"
                )}
              >
                REGISTER
              </Link>
              <Link
                href="/login"
                className={cn(
                  "flex items-center text-[24px] font-bold text-[#FFD645] transition-colors hover:text-white/80"
                )}
              >
                LOGIN
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
