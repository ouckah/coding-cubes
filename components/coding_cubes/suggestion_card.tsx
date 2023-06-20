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
    <SCard className="w-[500px] h-[250px] bg-[#202020]">
      <SCardHeader>
        <div style={{ width: "200px" }}>
          <img className="w-full rounded-xl" src={src} />
        </div>
        <div className="flex flex-col justify-center max-w-[calc(100%-200px)]">
          <SCardTitle>{title}</SCardTitle>
          <br />
          <SCardDescription>{description}</SCardDescription>
        </div>
      </SCardHeader>
    </SCard>
  )
}
