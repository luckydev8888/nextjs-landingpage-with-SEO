import "@/styles/globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

import { cn } from "@/lib/utils"
import MainNav from "@/components/Layout/Navbar"

export const metadata: Metadata = {
  title: "Reddkarma",
  description:
    "Spend.In is a platform that helps you track your business expenses and manage your finances.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const jakartaFont = Plus_Jakarta_Sans({ subsets: ["latin"] })

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen antialiased", jakartaFont.className)}>
          <div className="relative flex min-h-screen min-w-full flex-col">
            <MainNav />
            <div>{children}</div>
          </div>
        </body>
      </html>
    </>
  )
}
export default RootLayout
