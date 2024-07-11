'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-5 h-4 fill-current text-yellow-300 hover:text-yellow-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="[background:radial-gradient(125%_125%_at_50%_10%,teal_35%,#003366_100%)] px-4 py-2">
          <li>
            <Link href="/" className="flex font-sans font-bold w-full hover:dark:bg-[#353346]/70 p-2 rounded-full hover:dark:border-t-[2px] border-[1px] dark:border-t-[#353346]   py-2 justify-center   px-4 py-2 my-2 rounded-sm " onClick={() => setMobileNavOpen(false)}>
              Home
            </Link>
          </li>


          <li>
            <Link href="/featured" className="flex font-sans font-bold w-full hover:dark:bg-[#353346]/70 p-2 rounded-full hover:dark:border-t-[2px] border-[1px] dark:border-t-[#353346]   py-2 justify-center   px-4 py-2 my-2 rounded-sm" onClick={() => setMobileNavOpen(false)}>
            Featured
            </Link>
          </li>



          <li>
            <Link href="/services" className="flex font-sans font-bold w-full hover:dark:bg-[#353346]/70 p-2 rounded-full hover:dark:border-t-[2px] border-[1px] dark:border-t-[#353346]   py-2 justify-center   px-4 py-2 my-2 rounded-sm" onClick={() => setMobileNavOpen(false)}>
              Services
            </Link>
          </li>

          <li>
      <Link href="/about" className="flex font-sans font-bold w-full hover:dark:bg-[#353346]/70 p-2 rounded-full hover:dark:border-t-[2px] border-[1px] dark:border-t-[#353346]   py-2 justify-center   px-4 py-2 my-2 rounded-sm" onClick={() => setMobileNavOpen(false)}>
        About
      </Link>
    </li>
          
          <li>
            <Link href="/contact" className="flex font-sans font-bold w-full hover:dark:bg-[#353346]/70 p-2 rounded-full hover:dark:border-t-[2px] border-[1px] dark:border-t-[#353346]   py-2 justify-center   px-4 py-2 my-2 rounded-sm" onClick={() => setMobileNavOpen(false)}>
              Contact
            </Link>
          </li>




          
        </ul>
      </nav>
    </div>
  )
}
