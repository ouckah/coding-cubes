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
        <Icons.logo className="h-[150px] w-[150px]" />
        <h1 className="mt-[-15px] text-[66px] font-medium text-[#AD924F]">
          PREMIUM
        </h1>
        <h2 className="text-[32px] font-light text-[#747474]">
          Upgrade your project creation experience.
        </h2>
      </div>
      <div className="mt mt-[35px] flex justify-center space-x-20">
        <PricingCard title="test" description="test" />
        <PricingCard title="test" description="test" />
        <PricingCard title="test" description="test" />
      </div>
    </>
  )
}
