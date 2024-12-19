"use client"

import DownloadSection from "@/components/Download"
import FeatureSection from "@/components/Feature"
import HeroSection from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/Layout/Footer"
import PriceSection from "@/components/Price"
import ReviewSection from "@/components/Review"

export default function IndexPage() {
  return (
    <section className="flex w-full flex-col ">
      <FeatureSection />
      <ReviewSection />
      <PriceSection />
      <DownloadSection />
      <Footer />
    </section>
  )
}
