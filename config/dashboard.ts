import { DashboardConfig } from "types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Billing",
      href: "/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "settings",
    },
  ],
};
