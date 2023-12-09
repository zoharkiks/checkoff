import { signOut } from "next-auth/react";

export const getMenuItems = (userId) => [
  {
    id: "1",
    label: "Overview",
    icon: "pajamas:overview",
    link: `/dashboard/${userId}`,
  },

  {
    id: "2",
    label: "Completed Notes",
    icon: "octicon:tasklist-16",
    link: `/dashboard/${userId}/completed-notes`,
  },

  // {
  //   id: "3",
  //   label: "Calendar",
  //   icon: "octicon:calendar-16",
  //   link: `/dashboard/${userId}/completed-notes`,
  // },

  {
    id: "4",
    label: "Settings",
    icon: "mingcute:settings-3-line",
    link: `/dashboard/${userId}/settings`,
  },

  {
    id: "5",
    label: "Log Out",
    icon: "mdi:logout",
    link: `/dashboard/${userId}/settings`,
    onClick: () => signOut(),
  },
];
