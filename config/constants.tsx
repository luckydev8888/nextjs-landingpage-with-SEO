import { BsBadgeTm } from "react-icons/bs"
import { GrDiamond } from "react-icons/gr"
import { HiOutlinePaintBrush } from "react-icons/hi2"
import { IoIosInformationCircleOutline } from "react-icons/io"
import { IoCheckmarkCircleOutline, IoRocketOutline } from "react-icons/io5"
import { LuCircleUserRound, LuSend } from "react-icons/lu"
import {
  PiBrowserDuotone,
  PiLaptop,
  PiLinkSimpleLight,
  PiSealCheckDuotone,
} from "react-icons/pi"
import {
  TbBrandGoogleAnalytics,
  TbBrandTelegram,
  TbBrowserOff,
  TbClick,
  TbDashboard,
  TbShieldPin,
  TbWorldPin,
} from "react-icons/tb"
import { TiChartAreaOutline } from "react-icons/ti"

import { paperAirplaneLogo, planeLogo, shuttleRocketLogo } from "./images"

export const priceCardData = [
  {
    logo: paperAirplaneLogo,
    title: "Starter",
    description:
      "\u201CCreate a beautiful page, share all your content, and bypass Instagram limitations\u201D",
    priceMonthly: "$0",
    priceYearly: "$0",
    features: [
      {
        img: <TbBrowserOff />,
        description: "Deeplink Technology",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiBrowserDuotone />,
        description: "Landing Page",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiLinkSimpleLight />,
        description: "Unlimited Content",
        isInformationCircleIncluded: true,
      },
      {
        img: <HiOutlinePaintBrush />,
        description: " Beautiful Designs",
        isInformationCircleIncluded: true,
      },
    ],
  },
  {
    logo: planeLogo,
    title: "Creator",
    description:
      "\u201CSend fans directly to your page, analyze traffic, boost engagement, and customize content by location\u201D",
    priceMonthly: "$9",
    priceYearly: "$100",
    features: [
      {
        img: <IoCheckmarkCircleOutline />,
        description: "Everything in Starter",
        isInformationCircleIncluded: true,
      },
      {
        img: <LuSend />,
        description: "Direct Link",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbWorldPin />,
        description: "Geo Filter",
        isInformationCircleIncluded: true,
      },
      {
        img: <TiChartAreaOutline />,
        description: "Link Analytics",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbClick />,
        description: "Clicks Tracking",
        isInformationCircleIncluded: true,
      },
      {
        img: <IoRocketOutline />,
        description: "Engagement Boost",
        isInformationCircleIncluded: true,
      },
    ],
  },
  {
    logo: shuttleRocketLogo,
    title: "Ultimate",
    description:
      "For big business that need all features to manage their expenses.",
    priceMonthly: "$33",
    priceYearly: "$169.99",
    features: [
      {
        img: <IoCheckmarkCircleOutline />,
        description: " Everything in Creator",
      },
      {
        img: <PiLinkSimpleLight />,
        description: "Up to 25 Links",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbShieldPin />,
        description: "Shield for 5 Links",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbDashboard />,
        description: "All-in-One Dashboard",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbBrandGoogleAnalytics />,
        description: "Custom Tracking",
        isInformationCircleIncluded: true,
      },
      {
        img: <BsBadgeTm />,
        description: "White-Label Experience",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbBrandTelegram />,
        description: "VIP Telegram Support",
        isInformationCircleIncluded: true,
      },
    ],
  },
]

export const reviewCardData = [
  {
    Name: "Pablo",
    Position: "Founder",
    description:
      "“GetAllMyLinks 2X my conversion rate on almost all my clients on insta! I can't recommend it enough it's the best tech out there!”",
    image: "/client1.png",
  },
  {
    Name: "Roy",
    Position: "Talent Manager",
    description:
      "“Been using it for a month now on 3 different accounts, conversion is def better, i would say about 30% increase.”",
    image: "/client2.jpg",
  },
  {
    Name: "Golden",
    Position: "Creator",
    description:
      "“Finally an All In One tool! I have been using it for over a month, and no more Ads or accounts have been suspended!”",
    image: "/client3.jpg",
  },
  {
    Name: "Roy",
    Position: "Talent Manager",
    description:
      "“Been using it for a month now on 3 different accounts, conversion is def better, i would say about 30% increase.”",
    image: "/client2.jpg",
  },
]

export const reviewPanelDatas = [
  {
    icon: <PiLaptop />, // Replace with an actual icon/image if necessary
    value: "+50%",
    description: "Conversion Rate Increase",
    borderColor: "border-indigo-500", // Adjust colors as needed
    iconColor: "text-indigo-500", // Adjust colors as needed
  },
  {
    icon: <LuCircleUserRound />, // Replace with an actual icon/image
    value: "25k+",
    description: "Active Instagram Links",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: <GrDiamond />, // Replace with an actual icon/image
    value: "4.8/5",
    description: "Highly Trusted Product",
    borderColor: "border-cyan-500",
    iconColor: "text-cyan-500",
  },
  {
    icon: <PiSealCheckDuotone />, // Replace with an actual icon/image
    value: "$0",
    description: "14-Day Free Trial",
    borderColor: "border-orange-500",
    iconColor: "text-orange-500",
  },
]

export const faqData = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a full refund within the first 14 days of purchase if you're not satisfied with the product.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support via email at support@example.com or through the contact form on our website.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time from your dashboard.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial. You can try all the features before making a purchase.",
  },
]

export const InformationCircle = <IoIosInformationCircleOutline />
