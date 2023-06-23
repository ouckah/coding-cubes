import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type SuggestionCardProps = {
  title: string;
  description: string;
  titleSub: string;
  price: string;
  period?: string;
  buttonText: string;
};

export function PricingCard({
  title,
  price,
  period,
  buttonText,
  titleSub,
  description,
}: SuggestionCardProps) {
  return (
    <Card className="flex min-h-[400px] w-[500px] flex-col items-center justify-start bg-[#202020]">
      <CardHeader className="text-center">
        <CardTitle className="text-[48px] font-bold text-neutral-200">
          {title}
        </CardTitle>
        <p className="text-[#6F6F6F]">{titleSub}</p>
        <br />
        <CardContent>
          <div className="w-[352px]">
            <span className="text-[24px] font-normal leading-9 text-stone-300">
              {description}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <p className="mr-2 text-[72px] font-bold text-neutral-200">
              {price}
            </p>
            <p className="text-[28px] font-bold text-neutral-400">{period}</p>
          </div>
          <Button className="mt-[25px] h-[86px] w-[100%] bg-neutral-900 text-[36px] font-bold text-stone-300 shadow">
            <Link href="/billing">{buttonText}</Link>
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
