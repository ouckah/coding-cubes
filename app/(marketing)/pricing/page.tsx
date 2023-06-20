import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Flexible Pricing Plans
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that suits your needs or get started for free today.{" "}
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the FREE plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Free access to
              DocSearch's core functionalities
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Requires your own OpenAI
              key for integration
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Up to 1 github repository
              (under 5 files)
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Upgrade anytime to our
              Premium tier at just $10/month for additional benefits and
              features
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$0</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4"></div>

      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to all DocSearch
              features and benefits
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Search and integrate up
              to 10 repositories, compared to just 1 with the free tier
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Prioritized customer
              support and regular feature updates
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> VSCode Integration
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Up to 10 github
              repositories (& up to 10GB of file data storage)
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$10</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          DocSearch is in early alpha and{" "}
          <strong>may output unexpected results occasionally.</strong>
        </p>
      </div>
    </section>
  )
}
