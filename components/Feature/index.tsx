import React from "react"
import { motion } from "framer-motion"

import { fadeInAnimationByIndex } from "@/lib/animations"
import { featureData } from "@/lib/content"

import Container from "../container"
import LeadingTitle from "../leading-title"
import FeatureCard from "./feature-card"

const FeatureSection = () => {
  return (
    <div
      id="testimonial"
      className="flex items-center w-full relative overflow-hidden"
    >
      <Container bgColor="#0D121F">
        <div className="w-full flex flex-col items-center gap-4 text-white">
          <div className="flex flex-col items-center gap-20 w-full justify-start">
            <div className="flex flex-col items-center gap-3 w-full">
              <LeadingTitle label="All-in-One-Solution" />
              <h3 className="text-4xl leading-[48px] font-semibold text-center max-w-[700px] text-[#6f6b7d]">
                to drive traffic away from Instagram's in-app browser
              </h3>
              <motion.p
                className="text-text-secondary-dark text-xl text-center mt-6 max-w-[500px]"
                variants={fadeInAnimationByIndex}
                initial="initial"
                animate="animate"
              >
                Create your landing page or choose to instantly redirect your
                fans to any website with our deeplink & shield protection
                technology.
              </motion.p>
            </div>
            <div className="flex sm:flex-row sm:justify-center mt-8 flex-col flex-wrap items-center gap-8">
              {featureData.map((testimonial, index) => (
                <FeatureCard
                  key={index}
                  avatar={testimonial.avatar}
                  content={testimonial.content}
                  title={testimonial.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default FeatureSection
