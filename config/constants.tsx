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
    description: "\u201CPerfect for individuals starting their journey.\u201D",
    priceMonthly: "$5",
    priceYearly: "$50",
    features: [
      {
        img: <TbBrowserOff />,
        description: "Basic Analytics",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiBrowserDuotone />,
        description: "5 Custom Links",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiLinkSimpleLight />,
        description: "Email Support",
        isInformationCircleIncluded: true,
      },
      {
        img: <HiOutlinePaintBrush />,
        description: "Daily Data Refresh",
        isInformationCircleIncluded: true,
      },
    ],
  },
  {
    logo: planeLogo,
    title: "Pro",
    description:
      "\u201CSend fans directly to your page, analyze traffic, boost engagement, and customize content by location\u201D",
    priceMonthly: "$15",
    priceYearly: "$150",
    features: [
      {
        img: <IoCheckmarkCircleOutline />,
        description: "Advanced Analytics",
        isInformationCircleIncluded: true,
      },
      {
        img: <LuSend />,
        description: "Unlimited Links",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbWorldPin />,
        description: "Priority Support",
        isInformationCircleIncluded: true,
      },
      {
        img: <TiChartAreaOutline />,
        description: "10 Team Members",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbClick />,
        description: "Customizable Reports",
        isInformationCircleIncluded: true,
      },
      {
        img: <IoRocketOutline />,
        description: "24-Hour Data Refresh",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiBrowserDuotone />,
        description: "SEO Optimization Tools",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiLinkSimpleLight />,
        description: "Premium Security Features",
        isInformationCircleIncluded: true,
      },
    ],
  },
  {
    logo: shuttleRocketLogo,
    title: "Premium",
    description: "The ultimate solution for professionals.",
    priceMonthly: "$30",
    priceYearly: "$300",
    features: [
      {
        img: <IoCheckmarkCircleOutline />,
        description: "All Pro Features",
      },
      {
        img: <PiLinkSimpleLight />,
        description: "Custom Integrations",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbShieldPin />,
        description: "24/7 VIP Support",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbDashboard />,
        description: "Unlimited Users",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbBrandGoogleAnalytics />,
        description: "Dedicated Account Manager",
        isInformationCircleIncluded: true,
      },
      {
        img: <BsBadgeTm />,
        description: "Real-Time Data Insights",
        isInformationCircleIncluded: true,
      },
      {
        img: <TbBrandTelegram />,
        description: "Priority Bug Fixing",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiBrowserDuotone />,
        description: "White-Label Branding",
        isInformationCircleIncluded: true,
      },
      {
        img: <PiLinkSimpleLight />,
        description: "API Access for Automation",
        isInformationCircleIncluded: true,
      },
    ],
  },
]

export const reviewCardData = [
  {
    Name: "Pablo",
    Position: "Founder",
    description: "This tool has saved me hours of work. Highly recommended!",
    image: "/client1.png",
  },
  {
    Name: "Roy",
    Position: "Talent Manager",
    description:
      "ReddKarma made posting to subreddits much easier. A game-changer!",
    image: "/client2.jpg",
  },
  {
    Name: "Golden",
    Position: "Creator",
    description:
      "Thanks to ReddKarma, I now know the minimum requirements for any subreddit!",
    image: "/client3.jpg",
  },
  {
    Name: "Roy",
    Position: "Talent Manager",
    description:
      "ReddKarma is a fantastic tool! It makes posting on Reddit seamless and efficient.",
    image: "/client4.png",
  },
]

export const reviewPanelDatas = [
  {
    icon: <PiLaptop />, // Replace with an actual icon/image if necessary
    value: "5x",
    description: "Faster subreddit insights",
    borderColor: "border-indigo-500", // Adjust colors as needed
    iconColor: "text-indigo-500", // Adjust colors as needed
  },
  {
    icon: <LuCircleUserRound />, // Replace with an actual icon/image
    value: "1M+",
    description: "Users helped",
    borderColor: "border-green-500",
    iconColor: "text-green-500",
  },
  {
    icon: <GrDiamond />, // Replace with an actual icon/image
    value: "99%",
    description: "Customer satisfaction",
    borderColor: "border-cyan-500",
    iconColor: "text-cyan-500",
  },
  {
    icon: <PiSealCheckDuotone />, // Replace with an actual icon/image
    value: "24/7",
    description: "Support availability",
    borderColor: "border-orange-500",
    iconColor: "text-orange-500",
  },
]

export const faqData = [
  {
    question: "What is ReddKarma, and how does it work?",
    answer:
      "ReddKarma is a tool designed to retrieve minimum posting requirements (account age, post karma, and comment karma) for any subreddit on Reddit. Simply input a subreddit, and ReddKarma provides dynamic requirements via our control panel or Telegram bot.",
  },
  {
    question: "Is ReddKarma free to use?",
    answer:
      "We offer both free and premium plans. The free plan provides access to basic features, while the premium plan unlocks advanced tools like historical data, priority support, and API integrations.",
  },
  {
    question: "How do I integrate ReddKarma with Telegram?",
    answer:
      "To integrate ReddKarma with Telegram, connect your account in the control panel. You’ll receive a bot token that allows you to query subreddit requirements directly through the Telegram bot.",
  },
  {
    question: "Can I track multiple subreddits simultaneously?",
    answer:
      "Yes! Our premium plan allows you to monitor multiple subreddits at once. Set up your preferences in the dashboard to receive alerts and updates in real-time.",
  },
  {
    question: "What types of support are available?",
    answer:
      "We provide 24/7 email support for all users. Premium users also receive priority support and direct access to our support team via live chat or Telegram.",
  },
]

export const InformationCircle = <IoIosInformationCircleOutline />
