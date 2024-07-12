import { BackgroundBeams } from '@/components/global/contact-effect'
import React from 'react'
import { Button } from '@/components/ui/button';
import Image from "next/image";
import Link from 'next/link';


import { TextGenerateEffect } from "@/components/global/text-generate";  

import { textwords } from '@/lib/constants';
const ContactPage = () => {
  return (
 
 
    <><><div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto mt-10 p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Let's Connect
        </h1>
        <p></p>
        <p className="text-neutral-500  max-w-lg mx-auto my-2 text-sm text-center relative z-10">

           <br /> Email:- moonfrostesencia@moonfrostesencia.online

        </p>

      </div>
      <BackgroundBeams />


    </div><section>
        <div className=" mt-[-100px] items-center px-4">

          <div className=" h-[20rem]  flex justify-center  items-center px-4">
            <div className="mx-auto text-4xl font-normal mt-[-40px] text-neutral-600 dark:text-neutral-400">
              <TextGenerateEffect words={textwords} />
            </div>
          </div>
        </div>


        <div className="flex items-center p-4 mt-[-140px] flex-col">
          <Button


            className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-blue-500 duration-500"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-blue-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">

              <Link href="mailto:moonfrostesencia@moonfrostesencia.online">📬Reach out to us</Link>
            </span>
          </Button>

        </div>


      </section></></>

  )
  
}



export default ContactPage