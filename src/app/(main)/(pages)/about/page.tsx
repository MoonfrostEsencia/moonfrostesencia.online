import { BackgroundBeams } from '@/components/global/contact-effect'
import React from 'react'
import { Button } from '@/components/ui/button';
import Image from "next/image";
import Link from 'next/link';
import { servicesItems, textwords } from '@/lib/constants'
import HoverEffect from '@/components/global/services-hover'

import { TextGenerateEffect } from "@/components/global/text-generate";  
import {CardStackDemo } from "@/components/global/card-stack2";


import { TextRevealCardPreview } from "@/components/global/text-reveal-card2";
import {Hero } from "@/components/aboutt";

const AboutPage = () => {
  return (
 
    
        <><><div className="">
<Hero></Hero>
          <TextRevealCardPreview></TextRevealCardPreview>

      </div><h2 className="">

          </h2><div className=" mt-[-40px] items-center px-4">

              <div className=" h-[20rem]  flex justify-center  items-center px-4">
                  <div className="mx-auto text-4xl font-normal mt-[-20px] text-neutral-600 dark:text-neutral-400">
                      <TextGenerateEffect words={textwords} />
                  </div>
              </div>

              <div className="flex items-center p-4 mt-[-100px] flex-col">
                  <Button


                      className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-blue-500 duration-500"
                  >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-blue-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black justify-center goup-hover:to-black">

                          <Link href="/contact"> Contact</Link>
                      </span>
                  </Button>




              </div>



          </div></></>
    
    
      )
    }
    

export default AboutPage