import * as React from "react"

import {
  SCard,
  SCardDescription,
  SCardHeader,
  SCardTitle,
} from "@/components/ui/sCard"

type SuggestionCardProps = {
  src: string
  title: string
  description: string
}

export function SuggestionCard({
  src,
  title,
  description,
}: SuggestionCardProps) {
  return (
    <SCard className="h-[250px] w-[500px] bg-[#202020]">
      <SCardHeader>
        <div style={{ width: "200px" }}>
          <img className="w-full rounded-xl" src={src} />
        </div>
        <div className="flex max-w-[calc(100%-200px)] flex-col justify-center">
          <SCardTitle>{title}</SCardTitle>
          <br />
          <SCardDescription>{description}</SCardDescription>
        </div>
      </SCardHeader>
    </SCard>
  )
}
