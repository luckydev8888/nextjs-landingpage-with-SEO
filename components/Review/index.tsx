import React from "react"
import { motion } from "framer-motion"

import { reviewCardData } from "@/config/constants"

import Container from "../container"
import LeadingTitle from "../leading-title"

const ReviewSection = () => {
  return (
    <div
      id="reviews"
      className="flex items-center w-full rounded-tl-[60px] rounded-tr-[60px] bg-[linear-gradient(138.18deg,#eae8fd,#fce5e6_94.44%)]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full flex flex-col items-center gap-4"
        >
          <div className="flex lg:flex-row flex-col gap-6 items-stretch justify-between w-full mt-8 sm:mt-16">
            {/* Content Section */}
            <div className="flex flex-col items-center justify-center w-full text-center lg:w-1/4">
              <h4 className="text-[15px] text-gray-600">
                Real Customers Reviews
              </h4>
              <h3 className="text-4xl sm:mt-3 leading-[48px] text-[26px] font-bold max-w-[300px] text-gray-600">
                What people say
              </h3>
              <p className="text-gray-600 text-xl text-[15px] leading-8 mt-3 max-w-[500px] sm:max-w-[600px]">
                See what our customers have to say about their experience.
              </p>
            </div>

            {/* Cards Section */}
            {reviewCardData.map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between w-full lg:w-1/4 mb-3 rounded-lg"
              >
                <div className="w-full bg-gray-100 h-[384px] rounded-lg relative overflow-hidden flex items-center justify-center">
                  <img
                    className={`${
                      _.image === "/card-image-3.svg"
                        ? "object-center"
                        : "w-full h-full"
                    } object-cover`}
                    src={`${_.image}`}
                    style={{ objectPosition: "right top" }}
                    alt={`Card Image ${index + 1}`}
                  />
                </div>
                <div className="flex flex-col items-center justify-center mt-6 gap-3 h-full text-center">
                  <h3 className="text-2xl font-semibold mt-3 text-dark">
                    {_.title}
                  </h3>
                  <p className="text-text-secondary-light">{_.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ReviewSection
