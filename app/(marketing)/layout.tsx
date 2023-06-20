import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col bg-[#2c2c2c] w-full">
      <header className="p-3 z-40 bg-background flex justify-between">
        <div className="ml-[15rem] pt-[2px]">
          <MainNav items={marketingConfig.mainNav} />
        </div>
        <div className="flex gap-10 mr-[15rem]">
          <Link
            href="/pricing"
            className={cn(
              "flex items-center bg-[#ffc700] py-1 px-3 text-[24px] text-[#212121] rounded-xl font-bold transition-colors hover:text-white/80"
            )}
          >
            <Icons.star className="font-bold mr-[5px]" /> PREMIUM
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
                  "flex items-center text-[24px] text-[#FFD645] font-bold transition-colors hover:text-white/80"
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
  )
}
