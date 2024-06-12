export const navLinks = [
  {
    label: "Home",
    route: "/Home",
    icon: "/assets/icons/layout-dashboard.svg",
  },
  {
    label: "Advisor Pro",
    route: "/Chat-Quick",
    icon: "/assets/icons/bot-message-square.svg",
  },
  {
    label: "Book a Call",
    route: "/BookACall",
    icon: "/assets/icons/phone-outgoing.svg",
  },
  {
    label: "Calendar",
    route: "/Calendar",
    icon: "/assets/icons/calendar.svg",
  },
  {
    label: "Partnership",
    route: "/Partnership",
    icon: "/assets/icons/handshake.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/circle-user-round.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/hand-coins.svg",
  },
];


export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;