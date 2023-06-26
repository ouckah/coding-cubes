import * as React from "react";

import { cn } from "@/lib/utils";

const ProjectHeaderCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
ProjectHeaderCard.displayName = "Card";

const ProjectHeaderCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row items-center justify-between p-6", className)}
    {...props}
  />
));
ProjectHeaderCardHeader.displayName = "CardHeader";

const ProjectHeaderCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ProjectHeaderCardTitle.displayName = "CardTitle";

const ProjectHeaderCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ProjectHeaderCardDescription.displayName = "CardDescription";

const ProjectHeaderCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
ProjectHeaderCardContent.displayName = "CardContent";

const ProjectHeaderCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(" flex items-center p-6 pt-0", className)}
    {...props}
  />
));
ProjectHeaderCardFooter.displayName = "CardFooter";

export {
  ProjectHeaderCard,
  ProjectHeaderCardHeader,
  ProjectHeaderCardFooter,
  ProjectHeaderCardTitle,
  ProjectHeaderCardDescription,
  ProjectHeaderCardContent,
};
