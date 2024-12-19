import { BsBadgeTm } from "react-icons/bs"
import { HiOutlinePaintBrush } from "react-icons/hi2"
import { IoIosInformationCircleOutline } from "react-icons/io"
import { IoCheckmarkCircleOutline, IoRocketOutline } from "react-icons/io5"
import { LuSend } from "react-icons/lu"
import { PiBrowserDuotone, PiLinkSimpleLight } from "react-icons/pi"
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
    Position: "Founder of Edge Management",
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
      "“Finally an All In One tool! I have been using it for over a month, and no more Ads or accounts have been suspended! Finger crossed.”",
    image: "/client3.jpg",
  },
]

export const InformationCircle = <IoIosInformationCircleOutline />
