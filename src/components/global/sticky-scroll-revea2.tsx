"use client";
import React from "react";
import { StickyScroll } from "../global/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "EXPERTISE ",
    description:
      " Experience excellence with our seasoned professionals who consistently deliver exceptional results.",
    content: (
      <div className="hero-area h-full w-full  font-bold  bg-gradient-to-r from-[#006633] via-[#00CCCC] to-[#003366] bg-clip-text text-transparent flex items-center justify-center text-4xl">
        
        <Image
   src="/designingg.jpg"
   width={300}
   height={300}
   className="h-full w-full object-cover"
   alt="INNOVATION"
 />
      </div>
    ),
  },
  {
    title: "INNOVATION",
    description:
      "Stay ahead of the curve with cutting-edge technologies and visionary solutions.",
    content: (
      <div className="h-full w-full font-bold bg-gradient-to-r from-[#006633] via-[#00CCCC] to-[#003366] bg-clip-text text-transparent flex items-center justify-center text-4xl ">
      
      INNOVATION
      
      
      
      
      
      </div>
    ),
  },
  {
    title: "TAILORED SOLUTIONS",
    description:
      "Customized services crafted to meet your unique needs with precision and care.",
    content: (
      <div className="h-full w-full font-bold bg-gradient-to-r from-[#006633] via-[#00CCCC] to-[#003366] bg-clip-text text-transparent flex items-center justify-center text-4xl">
       TAILORED SOLUTIONS
      </div>
    ),
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    description:
      "At Moonfrost Esencia, we prioritize your satisfaction above all else. We believe in fostering meaningful partnerships by listening attentively to your needs, comprehending your objectives, and tailoring our services meticulously to surpass your expectations. Our dedication to transparency, responsiveness, and personalized assistance ensures every interaction is geared towards delivering tangible value and achieving your desired outcomes. Together, let's embark on a journey where your success is our ultimate goal.",
    content: (
      <div className="h-full w-full  font-bold bg-gradient-to-r from-[#006633] via-[#00CCCC] to-[#003366] bg-clip-text text-transparent flex items-center justify-center text-4xl">
        CLIENT-CENTRIC APPROACH
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
