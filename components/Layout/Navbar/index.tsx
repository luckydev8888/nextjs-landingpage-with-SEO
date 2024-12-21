"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "../../Button"
import Logo from "../Logo"

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll and toggle the background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="sticky top-0 z-40">
      <header
        onClick={closeMenu}
        className={`sticky top-0 z-40 w-[90%] mx-auto border-2 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-[linear-gradient(138.18deg,#eae8fd,#fce5e6_94.44%)] text-[#5D596C]"
        } py-[0.75rem] mt-[1rem] mb-[1rem] transition-all ease-in-out rounded-[0.5rem]`}
      >
        <div className="container flex h-16 items-center justify-between p-3 mx-auto">
          <Logo textColor={isScrolled ? "black" : "white"} />
          <button
            className={`lg:hidden focus:outline-none ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <nav className="hidden lg:flex justify-between items-center space-x-4">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`flex w-full items-center text-xl whitespace-nowrap p-2 ${
                  isScrolled ? "text-black" : "text-[#5D596C]"
                } hover:text-[#7367f0] active:text-[#7367f0] rounded-md`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/Login">
                <button className="flex flex-row gap-3 px-8 py-3 bg-[#7367F0] text-white rounded-lg hover:bg-[#5a52c9]">
                  Login/Register
                </button>
              </Link>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="absolute top-full bg-white w-full h-screen shadow-md left-0 right-0 lg:hidden transition-all ease-in-out">
              <div className="w-full flex flex-col items-start px-5 py-3 bg-white">
                {navItems?.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="flex w-full items-center p-2 hover:text-[#7367f0] active:text-[#7367f0] rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex w-full flex-col items-center justify-center gap-4 mt-4">
                  <Button variant="primary" size="nav" label="Login/Register" />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  )
}

export default MainNav
