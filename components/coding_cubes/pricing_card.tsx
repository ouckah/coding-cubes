import * as React from "react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type SuggestionCardProps = {
  title: string
  description: string
}

export function PricingCard({ title, description }: SuggestionCardProps) {
  return (
    <Card className="w-[500px] h-[550px] bg-[#202020]">
      <CardHeader>
        <div className="flex flex-col justify-center max-w-[calc(100%-200px)]">
          <CardTitle>{title}</CardTitle>
          <br />
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
