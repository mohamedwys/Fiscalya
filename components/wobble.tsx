"use client";


import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#295872] min-h-[500px] lg:min-h-[300px] relative"
        className=""
      >
        <div className="max-w-xs flex items-center justify-between">
          <h2 className="text-top-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-200">
            Visit Our AI ChatBot Portal
          </h2>
          
        </div>
        <ul className="mt-4 text-left text-base/6 text-neutral-200 list-disc pl-4">
          <p>Are you tired of searching through endless pages of legal jargon and tax codes to find the answers you need? Look no further than our cutting-edge AI chatbot, designed to provide you with instant, expert-level responses to all your tax and legal questions.</p>
          
        </ul>
       
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#BCFD4C]">
        <h2 className="text-top-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-zinc-700">
          Ask Your Questions
        </h2>
        <ul className="mt-4 max-w-[26rem] text-left text-base/6 font-semibold text-zinc-700 list-disc pl-4">
          <li>Access a vast database of tax and legal knowledge curated by industry professionals.</li>
          <li>Instantly find the information you need, whether you're a small business owner or an individual seeking legal advice.</li>
          
        </ul>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#BCFD4C]">
        <h2 className="text-top-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-zinc-700">
          Instant, Accurate Responses
        </h2>
        <ul className="mt-4 max-w-[26rem] text-left text-base/6 font-semibold text-zinc-700 list-disc pl-4">
          <li>Get round-the-clock support tailored to your specific needs.</li>
          <li>Receive clear, concise answers without waiting on hold or scheduling appointments.</li>
          
        </ul>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#295872] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
        <div className="max-w-xs flex items-center justify-between">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-200">
            Future of Tax and Legal Assistance
          </h2>
         
        </div>
        <ul className="mt-4 text-bottom-left text-base/6 text-neutral-200 list-disc pl-4">
          <li>Revolutionize how you access tax and legal information by contacting us today.</li>
          <li>Say goodbye to outdated methods and embrace our cutting-edge AI chatbot.</li>
          <li>Obtain a quote based on your unique requirements</li>
          <li>Enjoy a tailored approach to meet your specific goals</li>
          <li>Rely on our expertise to help you achieve your objectives</li>
        </ul>
        <div className="block lg:hidden">
         
        </div>
      </WobbleCard>
    </div>
  );
}