import * as React from "react";

import { cn } from "@/lib/utils";

const SCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-card-white cursor-pointer rounded-lg border bg-card shadow-sm hover:bg-white/30",
      className
    )}
    {...props}
  />
));
SCard.displayName = "Card";

const SCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-4 p-6", className)}
    {...props}
  />
));
SCardHeader.displayName = "CardHeader";

const SCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[24px] font-bold leading-none tracking-tight text-white", // Updated here
      className
    )}
    {...props}
  />
));
SCardTitle.displayName = "CardTitle";

const SCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[16px] font-medium text-white", className)} // Updated here
    {...props}
  />
));
SCardDescription.displayName = "CardDescription";

const SCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
SCardContent.displayName = "CardContent";

const SCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" flex items-center p-6 pt-0", className)}
    {...props}
  />
));
SCardFooter.displayName = "CardFooter";

export {
  SCard,
  SCardHeader,
  SCardFooter,
  SCardTitle,
  SCardDescription,
  SCardContent,
};
