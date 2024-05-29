export const navLinks = [
  {
    label: "Home",
    route: "/Home",
    icon: "/assets/icons/home.svg",
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
    label: "Partnership",
    route: "/Partnership",
    icon: "/assets/icons/global.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/user.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/coin.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 2,
    inclusions: [
      {
        label: "2 Free Credits",
        isIncluded: true,
      },
      {
        label: "Pdf Report",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "1 Call/Month",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 15,
    credits: 15,
    inclusions: [
      {
        label: "15 Credits",
        isIncluded: true,
      },
      {
        label: "PDF Report",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "1 Call/Month",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 100,
    credits: 100,
    inclusions: [
      {
        label: "100 Credits",
        isIncluded: true,
      },
      {
        label: "PDF Report",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "1 Call/Month",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  ChatHelp: {
    type: "ChatHelp",
    title: "Chat Help",
    subTitle: "Refine images by removing noise and imperfections",
    config: { Chat: true },
    icon: "image.svg",
  },
  BookACall: {
    type: "BookACall",
    title: "Book a Call",
    subTitle: "Removes the background of the image using AI",
    config: { BookACall: true },
    icon: "camera.svg",
  },

  
};

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