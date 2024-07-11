"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../global/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-r from-[#006633] via-[#00CCCC] to-[#003366]  min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Internet Marketing Solutions & AI-Powered Promotions
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Navigate the digital landscape with finesse. Our internet marketing strategies, from social media mastery to SEO sorcery, will elevate your brand's visibility and drive real results.

Harness the power of AI to supercharge your business growth. Our AI-driven promotional tactics ensure that your brand stays ahead of the curve, reaching the right audience at the right time with unparalleled precision.
         
          </p>
        </div>
      
      
      
      
      
      
      
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gradient-to-r from-[#003366] via-[#FFFF66] to-[#006633] ">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Comprehensive Graphics Design Solutions
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Unlock the full potential of your brand with our comprehensive graphics design solutions. At Moonfrost Esencia, we specialize in all types of graphic design, from captivating logos to stunning visual identities and everything in between. Whether you need a striking brand logo, eye-catching marketing materials, or compelling brand identities, our team of experts is here to bring your vision to life. Let's collaborate and create designs that leave a lasting impression on your audience!
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-[#FFFF66] to-[#003366]  min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Web Development
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Embark on a journey to digital greatness with Moonfrost Esencia's tailored web development services. Our team of web development wizards specializes in crafting bespoke, user-friendly websites that perfectly align with your unique business needs. From dynamic e-commerce platforms to engaging corporate websites, we leverage the latest technologies and industry best practices to ensure your online presence stands out in the digital landscape. Partner with us and let's build a website that not only looks great but also drives tangible results for your business!
          </p>
        </div>
        
        
        
        
        
        
        
      </WobbleCard>
    </div>
  );
}
