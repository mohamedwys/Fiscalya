"use client";


import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#820000] min-h-[500px] lg:min-h-[300px] relative"
        className=""
      >
        <div className="max-w-xs flex items-center justify-between">
          <h2 className="text-top-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-200">
            AI-Powered Legal & Tax Bot
          </h2>
          
        </div>
        <ul className="mt-4 text-left text-base/6 text-neutral-200 list-disc pl-4">
          <li>Get instant answers to simple legal and tax questions</li>
          <li>Access our trained AI bot for free with 2 trial credits</li>
          <li>Receive quick, accurate responses 24/7</li>
          <li>Ideal for basic inquiries and information gathering</li>
        </ul>
       
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#C86F5E]">
        <h2 className="text-top-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-zinc-700">
          Tailored Consultation
        </h2>
        <ul className="mt-4 max-w-[26rem] text-left text-base/6 font-semibold text-zinc-700 list-disc pl-4">
          <li>Book a call with our expert team</li>
          <li>Provide detailed information about your specific needs</li>
          <li>Receive personalized guidance and recommendations</li>
          <li>Benefit from our extensive knowledge and experience</li>
        </ul>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#C86F5E]">
        <h2 className="text-top-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-zinc-700">
          Tailored Consultation
        </h2>
        <ul className="mt-4 max-w-[26rem] text-left text-base/6 font-semibold text-zinc-700 list-disc pl-4">
          <li>Book a call with our expert team</li>
          <li>Provide detailed information about your specific needs</li>
          <li>Receive personalized guidance and recommendations</li>
          <li>Benefit from our extensive knowledge and experience</li>
        </ul>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#820000] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
        <div className="max-w-xs flex items-center justify-between">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-200">
            Customized Solutions
          </h2>
         
        </div>
        <ul className="mt-4 text-bottom-left text-base/6 text-neutral-200 list-disc pl-4">
          <li>Obtain a quote based on your unique requirements</li>
          <li>Choose from services like tax optimization, audits, or comprehensive studies</li>
          <li>Enjoy a tailored approach to meet your specific goals</li>
          <li>Rely on our expertise to help you achieve your objectives</li>
        </ul>
        <div className="block lg:hidden">
         
        </div>
      </WobbleCard>
    </div>
  );
}