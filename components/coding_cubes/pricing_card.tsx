import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SuggestionCardProps = {
  title: string;
  description: string;
};

export function PricingCard({ title, description }: SuggestionCardProps) {
  return (
    <Card className="h-[550px] w-[500px] bg-[#202020]">
      <CardHeader>
        <div className="flex max-w-[calc(100%-200px)] flex-col justify-center">
          <CardTitle>{title}</CardTitle>
          <br />
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
