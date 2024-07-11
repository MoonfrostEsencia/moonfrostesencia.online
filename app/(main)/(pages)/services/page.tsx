import HoverEffect from '@/components/global/services-hover'
import { Button } from '@/components/ui/button'
import { servicesItems } from '@/lib/constants'
import Link from 'next/link'
import { Hero } from "@/components/hero";
import {PlaceholdersAndVanishInputDemo } from "@/components/global/placeholders-and-vanish-input2";
import React from 'react'
import {AnimatedModalDemo} from '@/components/ui/animated-modal2'


const ServicesPage = () => {
  return (
  <><section className="max-w-6xl flex text-xl text-sm font-sans items-center p-4 mt-[150px] flex-col mx-auto px-8">

      
    <Hero></Hero>




      {/* Section header */}
      <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter🏹</div>
        <h1 className="font-bold text-3xl mb-4">Services</h1>
        
      

      {/* Items */}
      <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

        {/* 1st item */}
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-current text-teal-600" width="64" height="64" rx="32" />
            <path className="stroke-current text-green-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
            <path className="stroke-current text-blue-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
          </svg>
          <h4 className="h4 mb-2">STRATEGIC INTERNET MARKETING</h4>
          <p className="text-lg text-gray-400 text-center">Propel your online presence with our tailored internet marketing strategies. From precision-targeted social media campaigns to data-driven SEO tactics, we deliver measurable results to elevate your brand.</p>
        </div>

        {/* 2nd item */}
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle className="fill-current text-teal-600" cx="32" cy="32" r="32" />
            <path className="stroke-current text-blue-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
            <path className="stroke-current text-green-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
          </svg>
          <h4 className="h4 mb-2">CREATIVE GRAPHIC DESIGN</h4>
          <p className="text-lg text-gray-400 text-center">Make a lasting impression with our bespoke graphic design solutions.From captivating logos to visually stunning brand collateral, our talented designers craft assets that resonate with your audience and reflect your brand's essence.</p>
        </div>

        {/* 3rd item */}
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-current text-teal-600" width="64" height="64" rx="32" />
            <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
              <ellipse className="stroke-current text-teal-300" cx="11" cy="11" rx="5.5" ry="11" />
              <path className="stroke-current text-blue-100" d="M11 0v22M0 11h22" />
              <circle className="stroke-current text-green-100" cx="11" cy="11" r="11" />
            </g>
          </svg>
          <h4 className="h4 mb-2">WEB DEVELOPMENT</h4>
          <p className="text-lg text-gray-400 text-center">Transform your digital presence with our expert web development services.Our team combines cutting-edge technology with intuitive design to create immersive and user-friendly websites that engage and convert visitors into customers.</p>
        </div>

        {/* 4th item */}
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
              <path className="stroke-current text-green-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
              <circle className="stroke-current text-teal-300" cx="13" cy="9" r="3" />
            </g>
          </svg>
          <h4 className="h4 mb-2">AI-POWERED PROMOTION</h4>
          <p className="text-lg text-gray-400 text-center">Harness the potential of AI to amplify your marketing efforts.Our AI-powered promotion strategies leverage machine learning algorithms to optimize targeting, enhance engagement, and drive meaningful results for your business.</p>
        </div>

        {/* 5th item */}
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
              <path className="stroke-current text-green-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
              <path className="stroke-current text-teal-300" d="M22 30h4v12h-4z" />
            </g>
          </svg>
          <h4 className="h4 mb-2">CONTENT MARKETING</h4>
          <p className="text-lg text-gray-400 text-center">Attract, engage, and retain your audience with strategic content marketing.</p>
        </div>

        {/* 6th item */}
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
          <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
              <path className="stroke-current text-green-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
              <circle className="stroke-current text-teal-300" cx="17" cy="5" r="3" />
              <path className="stroke-current text-blue-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
            </g>
          </svg>
          <h4 className="h4 mb-2">SEARCH ENGINE OPTIMIZATION (SEO)
          </h4>
          <p className="text-lg text-gray-400 text-center">Boost online visibility with our SEO services. Proven strategies ensure higher search rankings and increased organic traffic.</p>
        </div>

      </div>


    </section>
    
    <section> 
      
      
      
      </section></>
  )
}
 
export default ServicesPage
