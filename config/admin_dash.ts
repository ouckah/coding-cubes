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
      title: "Projects Editor",
      href: "/admin",
      icon: "billing",
    },
    {
      title: "Lessons Editor",
      href: "/lesson_editor",
      icon: "settings",
    },
  ],
};
