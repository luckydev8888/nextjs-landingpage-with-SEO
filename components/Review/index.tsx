import React, { useRef } from "react"
import { motion } from "framer-motion"
import SwiperCore from "swiper"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/autoplay"
import { reviewCardData, reviewPanelDatas } from "@/config/constants"

import Container from "../container"

const ReviewSection = () => {
  const swiperRef = useRef<SwiperCore | null>(null)
  return (
    <div id="reviews" className="flex-row items-center w-full">
      <div className="flex items-center w-full rounded-tl-[60px] rounded-tr-[60px] bg-[linear-gradient(138.18deg,#eae8fd,#fce5e6_94.44%)]">
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
              <div className="lg:w-2/3 w-full">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2000 }}
                  loop
                  slidesPerView={3} // Show three reviews at once
                  slidesPerGroup={1} // Slide one review at a time
                  spaceBetween={30} // Add space between slides
                  className="w-full max-w-5xl"
                >
                  {reviewCardData.map((slide, index) => (
                    <SwiperSlide key={index} className="h-auto flex">
                      <div className="w-full flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-md text-center h-auto">
                        {/* Quote */}
                        <p className="text-gray-700 italic mb-4 flex-grow">
                          “{slide.description}”
                        </p>

                        {/* User Info */}
                        <div className="flex items-center space-x-3 mt-auto">
                          <img
                            src={slide.image}
                            alt={slide.Name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-0">
                            <p className="text-gray-900 font-bold">
                              {slide.Name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {slide.Position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {reviewPanelDatas.map((reviewPanelData, index) => (
              <div
                key={index}
                className={`flex flex-col  items-center justify-center border-2 rounded-lg p-6 ${reviewPanelData.borderColor}`}
              >
                {/* Icon */}
                <div
                  className={`text-6xl mb-4 ${reviewPanelData.iconColor}`} // Set icon size and color dynamically
                >
                  {reviewPanelData.icon}
                </div>

                {/* Value */}
                <h3 className="text-3xl font-bold text-gray-500">
                  {reviewPanelData.value}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-center">
                  {reviewPanelData.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
