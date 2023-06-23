import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PricingCard } from "@/components/coding_cubes/pro_monthly_card";
import { Icons } from "@/components/icons";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <Icons.logo className="h-[125px] w-[125px]" />
        <h1 className="mt-[-15px] text-[60px] font-medium text-[#AD924F]">
          PREMIUM
        </h1>
        <h2 className="text-[27px] font-light text-[#747474]">
          Upgrade your project creation experience.
        </h2>
      </div>
      <div className="mt mt-[35px] flex justify-center space-x-20">
        <PricingCard
          title="FREE TRIAL"
          titleSub="7 day free trial"
          price="FREE"
          buttonText="PURCHASE"
          description="Gives you a taste to what premium has to offer, free of charge."
        />
        <PricingCard
          title="MONTHLY PRO"
          titleSub="billed monthly"
          price="$35"
          period="/mo"
          buttonText="PURCHASE"
          description="Grants you full access to our premium features, best for short-term subscribers."
        />
        <PricingCard
          title="YEARLY"
          titleSub="billed annually"
          price="$199"
          period="/year"
          buttonText="PURCHASE"
          description="Grants you full access to our premium features, best for long-term subscribers."
        />
      </div>
    </>
  );
}
