import React, { useEffect } from "react"
import Image from "next/image"
import { IoIosInformationCircleOutline } from "react-icons/io"

interface featureProps {
  img: any
  description: string
  isInformationCircleIncluded: boolean
}

interface PriceCardProps {
  logo: string
  title: string
  description: string
  priceMonthly: string
  priceYearly: string
  features: featureProps[]
  //   imgs: any[]
  isYearly?: boolean
  isPopular?: boolean
  onClick?: () => void
}

export default function PriceCard({
  logo,
  title,
  description,
  priceMonthly,
  priceYearly,
  isYearly,
  features,
  //   imgs,
  onClick,
}: PriceCardProps) {
  //   useEffect(() => {
  //     window.alert(imgs)
  //   }, [])
  return (
    <div className="flex flex-col flex-grow w-full sm:w-[384px] bg-[#FAFBFC] p-8 rounded-lg text-black">
      <div className="flex-1">
        <div className="flex items-start flex-col h-[280px]">
          <div className="flex items-center justify-center w-full">
            <img src={logo} alt="icon" className="w-88 h-97 mb-4 pb-2" />
          </div>
          <h3 className="text-2xl font-semibold w-full text-center text-[22px] text-[#5d596c] mb-1">
            {title}
          </h3>
          <div className="flex flex-row items-center justify-center gap-2 mt-10 w-full">
            <p className="text-4xl font-semibold text-[#7367F0] text-[38px]">
              {isYearly ? priceYearly : priceMonthly}
            </p>
            <p className=" text-[#596780] text-lg text-[15px]">
              {isYearly ? "/year" : "/month"}
            </p>
          </div>
        </div>
        <p className="mt-6 text-[#a5a3ae] italic text-[15px] font-medium leading-[1.37]">
          {description}
        </p>
        <div className="mt-8">
          <ul className="gap-y-4 flex-col flex">
            {features?.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-[#eae8fd] text-[24px] rounded-full w-8 h-8 flex items-center justify-center">
                  {feature.img}
                </div>
                <div className="text-lg text-[#5d596c] text-[18px] font-medium leading-[1.37] ml-2">
                  {feature.description}
                </div>
                {feature.isInformationCircleIncluded && (
                  <div className="flex items-center ml-1 text-description">
                    <IoIosInformationCircleOutline />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={onClick}
        className="bg-[#e9e7fd] text-[#7367f0] w-full py-4 mt-10 font-medium text-[15px] rounded-md flex-none"
      >
        Get Started
      </button>
    </div>
  )
}
