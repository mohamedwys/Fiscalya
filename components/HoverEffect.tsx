"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    title: "VAT",
    description:
      "Streamline VAT compliance and maximize savings with our expert VAT consulting and advisory services.",
    link: "https://algochurn.com",
  },
  {
    title: "Excise",
    description:
      "Navigate excise tax complexities and optimize compliance with our expert excise tax consulting solutions.",
    link: "https://algochurn.com",
  },
  {
    title: "Corporate Tax",
    description:
      "Unlock tax optimization and ensure compliance with our tailored corporate tax consulting solutions.",
    link: "https://algochurn.com",
  },
  {
    title: "Tax Declaration ! Refund",
    description:
      "Ensure accurate tax declarations and maximize refunds with our efficient tax declaration and refund services.",
    link: "https://algochurn.com",
  },
  {
    title: "Customs Duties | Formalities",
    description:
      "Simplify customs duties and streamline formalities with our comprehensive customs consulting solutions.",
    link: "https://algochurn.com",
  },
  {
    title: "Transfert Pricing",
    description:
      "Ensure compliance and optimize profitability with our comprehensive transfer pricing solutions.",
    link: "https://algochurn.com",
  },
  // 
];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#BCFD4C] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-[#474747] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-neutral-200 font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-neutral-200 font-bold tracking-wide leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
