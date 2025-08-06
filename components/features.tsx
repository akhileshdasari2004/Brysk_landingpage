import {
  Clock,
  UserMinus,
  ShieldCheck,
  ShoppingCart,
  Package,
  Boxes,
  Eye,
  Truck,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Clock,
    title: "Unlock 24/7 Revenue Potential",
    description:
      "Brysk lets your retail spaces run continuously without staffing.",
  },
  {
    icon: UserMinus,
    title: "Slash Labor Costs Instantly",
    description:
      "AI and sensor fusion automate checkout and operations in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Prevent Loss and Maximize Yield",
    description:
      "Intelligent theft detection and digital signage protect margins while generating ad income.",
  },
];

const solutionBlocks = [
  {
    icon: ShoppingCart,
    title: "Autonomous Checkout",
    description:
      "Walk in. Grab items. Walk out. Real-time billing with AI + sensors. 24/7 frictionless operation. Built-in theft detection and digital signage.",
  },
  {
    icon: Package,
    title: "AI Vending",
    description:
      "Vision-based detection in fridges and cabinets—no buttons, no guesswork. Tap or QR to unlock; auto-billing on door close. Integrated screens for ads and promotions.",
  },
  {
    icon: Boxes,
    title: "AI Inventory Management",
    description:
      "Passive, camera-powered stock tracking. Real-time updates for pick-and-restock events. Secure NFC access in enclosed spaces.",
  },
  {
    icon: Eye,
    title: "Theft Prevention",
    description:
      "Vision-only detection of suspicious behavior—without intrusive facial recognition. Alerts and footage-backed logs. Ideal for self-checkout or high-shrink zones.",
  },
  {
    icon: Truck,
    title: "Quick Commerce",
    description:
      "Run dark-store style hubs in small footprints (100–500 sq ft). NFC/QR access for delivery runners, instant restocking, and optional ad screens.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center mb-8">
        Why Choose Brysk?
      </h2>
      <div className="w-full max-w-(--breakpoint-lg) mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-accent rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-center mb-8">Solution Blocks</h3>
      <div className="w-full max-w-(--breakpoint-lg) mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionBlocks.map((block) => (
          <div
            key={block.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-primary rounded-full">
              <block.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">{block.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {block.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
