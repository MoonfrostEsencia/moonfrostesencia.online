"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../global/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-neutral-700 h-[63rem] rectangle-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          About us
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        At Moonfrost Esencia, we embody a fusion of visionary entrepreneurship and technical prowess. Founded by Tushar and Piyush, our company is driven by a shared commitment to excellence and innovation. Tushar, a visionary founder and developer, sets the tone for our direction with his expertise and innovation in digital solutions. Meanwhile, Piyush, also a founder, brings invaluable insights in business development and client relations, ensuring that customer satisfaction remains at the heart of everything we do. Together, we strive to elevate brands and businesses to new heights of success, one innovative solution at a time.🌟💼🚀
        </TextRevealCardDescription>
        <TextRevealCardTitle>
        Our Skills: Crafting Digital Excellence
    </TextRevealCardTitle>
    <TextRevealCardDescription>
    At Moonfrost Esencia, we pride ourselves on our diverse skill set and unwavering commitment to excellence. From cutting-edge web development to captivating graphic design, strategic marketing solutions, and AI-powered innovations, we harness the latest technologies and creative techniques to elevate your brand and drive tangible results. With a team of seasoned professionals dedicated to pushing the boundaries of digital innovation, we deliver tailored solutions that empower your brand to thrive in the digital landscape.
  </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
