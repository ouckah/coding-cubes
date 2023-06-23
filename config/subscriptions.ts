import { SubscriptionPlan } from "types";
import { env } from "@/env.mjs";

export const freePlan: SubscriptionPlan = {
  name: "Free",
  description:
    "Don't know where to start? Premium's got you covered! Get access to all of our lessons and projects for free.",
  stripePriceId: "",
};

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "You're premium! Now go build something awesome!",
  stripePriceId: env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
};
