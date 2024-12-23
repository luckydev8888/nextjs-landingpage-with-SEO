import React from "react"
import { motion } from "framer-motion"

import { fadeInAnimationByIndex } from "@/lib/animations"
import { featureData } from "@/lib/content"

import Container from "../Container"
import LeadingTitle from "../LeadingTitle"
import FeatureCard from "./feature-card"

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="flex items-center w-full relative overflow-hidden"
    >
      <Container bgColor="#0D121F">
        <div className="w-full flex flex-col items-center gap-4 text-white">
          <div className="flex flex-col items-center gap-20 w-full justify-start">
            <div className="flex flex-col items-center gap-3 w-full">
              <h3 className="text-3xl leading-[48px] mt-8 font-semibold text-center max-w-[700px] text-[#FF4500]">
                {`About ReddKarma`}
              </h3>
              <motion.p
                className="text-text-secondary-dark text-xl text-center max-w-[500px]"
                variants={fadeInAnimationByIndex}
                initial="initial"
                animate="animate"
              >
                ReddKarma simplifies Reddit posting by providing instant access
                to subreddit requirements. Gain valuable insights and save time
                with our powerful features designed for Reddit enthusiasts and
                marketers alike
              </motion.p>
            </div>
            <div className="flex sm:flex-row sm:justify-center flex-col flex-wrap items-center gap-8">
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
