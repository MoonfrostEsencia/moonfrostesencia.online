import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { ContainerScroll } from "@/components/global/container-scroll";
import "./globals.css";
import { HeroParallax } from "@/components/global/hero-parallax";
import { InfiniteMovingCards } from "@/components/global/infinitemoving-cards";
import { LampComponent } from "@/components/global/lamp-effect";
import Navbar from "@/components/global/navbar";
import { TextGenerateEffect } from "@/components/global/text-generate";  
import {StickyScrollRevealDemo } from "@/components/global/sticky-scroll-revea2";
import {LayoutGridDemo } from "@/components/global/layout-grid1";
import Newsletter  from "@/components/global/newsletter";
import {PlaceholdersAndVanishInputDemo } from "@/components/global/placeholders-and-vanish-input2";
import { Button } from "@/components/ui/button";
import { products, textwords } from "@/lib/constants";
import Testimonials  from "@/components/global/testimonials";
import { CheckIcon, Section } from "lucide-react";
import Image from "next/image";                                   
import Link from "next/link"; 


import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { RecentProjects } from "@/components/recent-projects";
import { Grid } from "@/components/grid";
import  ContactMe  from "@/components/ContactMe";
import Footer from '@/components/ui/footer'
import {AnimatedModalDemo} from '@/components/ui/animated-modal2'
import  Zigzag  from "@/components/global/zigzag";
import { TabsDemo } from "@/components/global/tabs";
export default function Home() {
  return (
    <main >
    



     
      <Navbar />



      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-red hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-300  to-neutral-600] md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    <Link href="https://calendly.com/moonfrostesencia/30min">Schedule Consultation</Link>
                  </span>
                </Button>
                <h2 className="text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-16 to-neutral-600 font-sans font-bold">
                Step into the Realm of Moonfrost Esencia

                </h2>
              </div>
            }
          />
        </div>
        </section>

       
         <section>
        <HeroParallax products={products}></HeroParallax>
        
        <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">

<h2 className="text-5xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-16 to-neutral-600 font-sans font-bold">Enter the Enchantment of Moonfrost Esencia!
                </h2>

       </div>
      
       <Grid></Grid>
       
       <RecentProjects></RecentProjects>
       <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[10px] flex-col mx-auto px-2">

<h2 className="text-5xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-12 to-neutral-600 font-sans font-bold">Discover Why Choose Us:
                </h2>
</div>
       <Approach></Approach>
       <StickyScrollRevealDemo></StickyScrollRevealDemo>
      
  
        
      
      </section>
      
      <section>
        
      <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[10px] flex-col mx-auto px-2">

<h2 className="text-5xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-8 to-neutral-600 font-sans font-bold">Testimonials✨
                </h2>
</div>
      <Clients></Clients>
      </section>


      <section className=" ">
      <LampComponent />
      </section>


<ContactMe></ContactMe>

      


      {/* ----------INFINITE CARD MOVE-- */}
      {/* <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-150px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      */}

      {/* <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div> */}

      
{/* FLIP WORD START------- */}

<div className=" mt-[-100px] items-center px-4">

<div className=" h-[20rem]  flex justify-center  items-center px-4">
      <div className="mx-auto text-4xl font-normal mt-[-40px] text-neutral-600 dark:text-neutral-400">

</div>
</div>










    







<div className="flex items-center p-4 mt-[-140px] flex-col">
  
                
              </div>
              </div>
              
              <section>
            
               
            

</section>



    </main>
  );
}
