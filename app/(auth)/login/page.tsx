import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { LoginForm } from "@/components/coding_cubes/login_form"
import { Icons } from "@/components/icons"
import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <section className="h-screen w-screen bg-[#2c2c2c]">
      <LoginForm />
    </section>
  )
}
