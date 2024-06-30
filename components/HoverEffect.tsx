"use client";

import { Point, Points } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    title: "What is UAE Corporate Tax?",
    description:
      "The UAE Corporate Tax is a mandatory tax on the net income or net profit of taxable corporations or businesses. Known as corporate income tax or business profit tax in different regions, this tax impacts companies operating within the UAE.",
    link: "https://algochurn.com",
  },
  {
    title: " Purpose of Introducing Corporate Tax in the UAE?",
    description:
      "The Corporate Tax strengthens the UAE’s position as a leading global business hub and supports the nation’s core policy goals. Implementing the Corporate Tax regime aligns the UAE with global standards for tax accuracy and helps prevent harmful tax practices.",
    link: "https://algochurn.com",
  },
  {
    title: "What Is the UAE Corporate Tax Rate?",
    description:
      "The corporate tax rate is as follows:"
      +"A margin of 0% for taxable income up to AED 375,000."
      +"A percentage of 9% for taxable income above AED 375,000.",

    link: "https://algochurn.com",
  },
  {
    title: "Is a Private Person’s Salary ! Income Subject to UAE Corporate Tax?",
    description:
      "The UAE corporate tax does not apply to individual salaries and other sources of personal employment income.",
    link: "https://algochurn.com",
  },
  {
    title: "Is Income Earned by a Foreign Investor Subject to the UAE Corporate Tax?",
    description:
      "The UAE Corporate Tax does not apply to foreign investors' income from capital gains, interest, dividends, and royalties.",
    link: "https://algochurn.com",
  },
  {
    title: " Under the UAE Corporate Tax Regime, is the Real Estate Sector Subject?",
    description:
      "UAE businesses involved in real estate management, construction, development, agency, and brokerage activities are subject to the UAE Corporate Tax.",
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
                  className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#6A82FB] to-[#CB837F] block  rounded-3xl"
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
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-neutral-300 border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-[#2C3E50] text-center font-bold tracking-wide mt-4">
                    {project.title}
                  </h4>
                  <p className="mt-8 text-[#2C3E50] font-bold text-center tracking-wide leading-relaxed text-sm">
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
