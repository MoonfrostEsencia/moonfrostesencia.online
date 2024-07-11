import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/components/ui/config/";

export const Hero = () => {
  return (
    <div className="pb-10 pt-10">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="blue"
        />
      
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>

      <div className="absolute left-0 top-0 flex h-0px w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
         

          <TextGenerateEffect
            className="text-center text-blue-500 text-[40px] md:text-5xl lg:text-6xl"
            words="ABOUT US"
          />

        

          <Link href="https://calendly.com/moonfrostesencia/30min" className="md:mt-10">
            <MagicButton
              title="Go"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
