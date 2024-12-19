import React from "react"

interface FeatureCardProps {
  avatar: string
  content: string
  title: string
}

const FeatureCard = ({ avatar, content, title }: FeatureCardProps) => {
  return (
    <div className="flex flex-col sm:max-w-[384px] lg:w-full w-full p-8 gap-4 rounded-xl text-[#6f6b7d] text-center">
      <div className="flex flex-row items-center mt-4 gap-4 justify-center">
        <img
          src={avatar}
          alt="avatar"
          className="text-center w-14 h-14 rounded-lg"
        />
      </div>
      <div>
        <h5 className=" text-lg font-semibold text-[#6f6b7d]">{title}</h5>
        <p className="text-md mt-4 text-[#6f6b7d]">{content}</p>
      </div>
      {/* <div className="w-full border h-[1px] border-gray-800"></div> */}
    </div>
  )
}
export default FeatureCard
