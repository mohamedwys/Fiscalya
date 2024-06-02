import { type PricingPlan } from "@/types"

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for when you need some clarifiactions",
    features: ["Up to 5 Credits", "Basic analytics"],
    limitations: [
      "No custom branding",
      "No commercial license",
      "Limited support",
      "No access to new features",
    ],
    stripePriceId: "",
    prices: {
      monthly: 9,
      yearly: 84,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
  {
    id: "standard",
    name: "Standard",
    description: "Perfect for when you are starting to grow",
    features: [
      "Up to 30 Credits",
      "Advanced analytics and reporting",
      "Priority Tips",
      "Exclusive training materials",
    ],
    limitations: ["No Calls", "Limited customer support"],
    stripePriceId: "",
    prices: {
      monthly: 29,
      yearly: 270,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
  {
    id: "premium",
    name: "Premium",
    description: "Perfect for serious tax/legal support for your business",
    features: [
      "Up to 200 credits",
      "Advanced analytics and reporting",
      "Exclusive Tips",
      "24/7 custommer support",
      "1 Call/Month with Our Experts",
    ],
    limitations: [],
    stripePriceId: "",
    prices: {
      monthly: 129,
      yearly: 1029,
    },
    stripeIds: {
      monthly: undefined,
      yearly: undefined,
    },
  },
]