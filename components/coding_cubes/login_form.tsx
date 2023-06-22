import * as React from "react"
import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"

type SuggestionCardProps = {
  src: string
  title: string
  description: string
}

export function LoginForm() {
  return (
    <div className="flex items-center justify-center p-20">
      <Card className="h-[35.5rem] w-[500px] bg-[#202020]">
        <CardHeader>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-4 top-4 md:left-8 md:top-8"
            )}
          >
            <>
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back
            </>
          </Link>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <Icons.logo className="mx-auto h-[150px] w-[150px]" />
              <h1 className="text-2xl font-semibold tracking-tight">
                CODING CUBES
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account.
              </p>
            </div>
            <UserAuthForm />
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
