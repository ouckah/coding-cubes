import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-reg-auth-form";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen bg-[#2c2c2c]">
      <div className="flex items-center justify-center p-20">
        <Card className="h-[40rem] w-[500px] bg-[#202020]">
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
                  Enter your email below to create your account.
                </p>
              </div>
              <UserAuthForm />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link
                  href="/terms"
                  className="hover:text-brand underline underline-offset-4"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="hover:text-brand underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <br />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
