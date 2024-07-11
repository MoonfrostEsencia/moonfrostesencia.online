import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/components/data/index";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
       

<h2 className="max-w-6xl flex text-6xl text-4xl font-sans items-center  mt-[150px] flex-col mx-auto px-2 max-w-6xl flex text-5xl  font-sans items-center  mt-[150px] flex-col mx-auto px-2 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-16 to-neutral-600 font-sans font-bold">Enter the World of Digital Mastery✨
</h2>

      

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des,img, link,title }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                   
                  </div>

                  <div className="flex items-center justify-center">
               

                  
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
