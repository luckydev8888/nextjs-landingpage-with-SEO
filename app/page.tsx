"use client"
import CardsSection from "@/components/Card"
import DownloadSection from "@/components/Download"
import Footer from "@/components/Layout/Footer"
import HeroSection from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import PriceSection from "@/components/Price"
import TestimonialSection from "@/components/Testimonial"

export default function IndexPage() {

  return (
    <section className="flex w-full flex-col ">
      <TestimonialSection />
      {/* <HeroSection /> */}
      <CardsSection />
      {/* <HowItWorks /> */}
      <PriceSection />
      <DownloadSection />
      <Footer />
    </section >
  )
}
