
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { Button } from '@/components/ui/button';
import {CardStackDemo } from "@/components/global/card-stack2";
import { TextGenerateEffect } from "@/components/global/text-generate";  
import Image from "next/image";
import Link from 'next/link';
import React from 'react'

import { textwords } from '@/lib/constants';

import { Ro } from "@/components/featuress";


const FeaturedPage = () => {
  return (

   
  <><div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">
      <Ro></Ro>

      <div>

      </div>
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 ">

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Intelligent Marketing Solutions
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Navigate the digital landscape like a pro with our internet marketing solutions. From social media mastery to SEO sorcery, we employ strategies that elevate your brand's visibility and drive real results.📱Maximize your reach with our comprehensive digital campaigns, including Google Ads, Facebook Ads, and more! 📊
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/digitalmarketing.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>

          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Crafting Visual Masterpieces
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >

              Unleash your brand's visual charisma with our cutting-edge graphics designing services. From captivating logos to stunning visual identities, we craft designs that speak volumes and resonate with your audience.🎨


            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/designingg.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="nazlix" />
            </CardItem>

          </CardBody>
        </CardContainer>






        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Crafting Digital Destinies
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >

              Step into the digital realm with confidence! Our web development wizards craft seamless, user-friendly websites tailored to your unique needs. With our expertise, your online presence will be nothing short of spectacular. 💻
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/web.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="Community Distribution" />
            </CardItem>

          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Artisanal AI Promotion
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Harness the power of AI to supercharge your business growth! Our AI-driven promotional tactics ensure that your brand stays ahead of the curve, reaching the right audience at the right time with unparalleled precision. 🤖
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/ai.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>

          </CardBody>
        </CardContainer>


      </div>


    </div><div className=" mt-[-100px] items-center px-4">

        <div className=" h-[20rem]  flex justify-center  items-center px-4">
          <div className="mx-auto text-4xl font-normal mt-[-40px] text-neutral-600 dark:text-neutral-400">

          </div>
        </div>














       




        <div className="flex items-center p-4 mt-[-140px] flex-col">
        <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[10px] flex-col mx-auto px-2">

<h2 className="text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-8 to-neutral-600 font-sans font-bold">
                </h2>
</div>

        </div>
      </div><div className="flex items-center p-4 mt-[-140px] flex-col">
        <Button


          className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-blue-500 duration-500"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-blue-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">

            <Link href="/services">Services </Link>
          </span>
        </Button>

      </div></>  


  )
}

export default FeaturedPage
