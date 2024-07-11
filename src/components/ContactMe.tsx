
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/global/text-generate";  
import { textwords } from "@/lib/constants";
const ContactMe = () => {
  const data = useMyContext();
  return (
    <div className="max-w-8xl mx-auto px-8 relative   my-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
      <div className="">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-white  to-neutral-600 text-center text-3xl font-bold text-onyx dark:bg-gradient-to-b from-white  to-neutral-600 lg:text-left lg:text-5xl">
        BOOK YOUR DIGITAL JOURNEY TODAY
        </h2>
        
        <p className="mt-4 text-center text-lg md:text-xl text-onyx lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-green-500  to-neutral-800">
        Dive into our range of services to discover how we can help you achieve your goals.{" "}
          <br className="hidden lg:inline-block" />Click here to explore further and unlock new possibilities for your business.
        </p>
      </div>
      <Button  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                 
                  <Link href="https://calendly.com/moonfrostesencia/30min">🚀 Make An Appointment</Link>
                  </span>
                </Button>
      
    </div>
  );
};
export default ContactMe;
function useMyContext() {
  
}

