"use client"

import FaqSection from "@/components/Faq"
import FeatureSection from "@/components/Feature"
import Footer from "@/components/Layout/Footer"
import PriceSection from "@/components/Price"
import ReviewSection from "@/components/Review"
import Welcome from "@/components/welcome"

export default function IndexPage() {
  return (
    <section className="flex w-full flex-col ">
      <Welcome />
      <FeatureSection />
      <ReviewSection />
      <PriceSection />
      <FaqSection />
      <Footer />
    </section>
  )
}
