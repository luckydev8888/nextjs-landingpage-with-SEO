"use client"

import FaqSection from "@/components/Faq"
import FeatureSection from "@/components/Feature"
import Footer from "@/components/Layout/Footer"
import PriceSection from "@/components/Price"
import ReviewSection from "@/components/Review"
import WelcomeSection from "@/components/Welcome"

const IndexPage = () => {
  return (
    <section className="flex w-full flex-col ">
      <WelcomeSection />
      <FeatureSection />
      <ReviewSection />
      <PriceSection />
      <FaqSection />
      <Footer />
    </section>
  )
}

export default IndexPage
