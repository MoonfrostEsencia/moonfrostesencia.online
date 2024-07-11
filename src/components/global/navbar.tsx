import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import MobileMenu from './custom-modal'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-gradient-to-r from-[#f0f0f0]  via-[#006633] via-[#00CCCC] to-[#003366]/30 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-[neutral-500] justify-between">
    <aside className="flex items-center gap-[2px] ">
      
      <Link href="/">
      <Image
        src="/logo.svg"
        width={80}
        height={80}
        alt="Moonfrost Esencia"
        className=""
      />
      </Link>
      
    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block bg-gradient-to-r from-[#006633] to-[#003366] bg-clip-text text-transparent">
      <ul className="flex items-center gap-4 list-none ">
        <li >
          <Link  href="/">Home</Link>
        </li>
        <li>
          <Link href="/featured">Featured</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
   <Link href="/contact">Contact</Link>
 </li>
        
      </ul>
    </nav>
    <aside className="flex items-center gap-2">
      <Link
        href="https://calendly.com/moonfrostesencia/30min"
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00CCCC_0%,#FFFF66_50%,#003366_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {true ? 'Initiate' : 'Get Started'}
        </span>
      </Link>
     
      <div className="flex items-center justify-center flex-col gap-8">
        
        <ModeToggle />
      </div>
      <MobileMenu />
    </aside>
  </header>
  )
}
export default Navbar