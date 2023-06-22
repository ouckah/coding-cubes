import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { PricingCard } from "@/components/coding_cubes/pricing_card"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <Icons.logo className="w-[150px] h-[150px]" />
        <h1 className="text-[66px] mt-[-15px] text-[#AD924F] font-medium">
          PREMIUM
        </h1>
        <h2 className="text-[32px] text-[#747474] font-light">
          Upgrade your project creation experience.
        </h2>
      </div>
      <div className="flex mt justify-center space-x-20 mt-[35px]">
        <PricingCard title="test" description="test" />
        <PricingCard title="test" description="test" />
        <PricingCard title="test" description="test" />
      </div>
    </>
  )
}
