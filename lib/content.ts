interface Features {
  avatar: string
  content: string
  title: string
}

export const featureData: Features[] = [
  {
    avatar: "/rocket.png",
    content:
      "Discover the minimum requirements for account age, post karma, and comment karma for any subreddit.",
    title: "Subreddit Insights",
  },
  {
    avatar: "/keyboard.png",
    content:
      "Receive real-time updates as subreddit requirements change dynamically.",
    title: "Dynamic Updates",
  },
  {
    avatar: "/paper.png",
    content:
      "Save time by instantly accessing necessary subreddit information in one place.",
    title: "Time Saver",
  },
  {
    avatar: "/laptop.png",
    content:
      "A user-friendly dashboard to access all subreddit requirements quickly and easily.",
    title: "Control Panel Access",
  },
  {
    avatar: "/user.png",
    content:
      "Retrieve subreddit requirements effortlessly using a Telegram command.",
    title: "Telegram Bot Integration",
  },
  {
    avatar: "/check.png",
    content:
      "Boost your Reddit engagement with tools that prepare you for hassle-free posting.",
    title: "Seamless Posting",
  },
]

//  Footer content

interface FooterLink {
  label: string
  url: string
}

interface FooterSectionProps {
  title: string
  urls: FooterLink[]
}

export const footerContent: FooterSectionProps[] = [
  {
    title: "Product",
    urls: [
      { label: "Digital Invoice", url: "#" },
      { label: "Insights", url: "#" },
      { label: "Reimbursements", url: "#" },
    ],
  },
  {
    title: "Company",
    urls: [
      { label: "About Us", url: "#" },
      { label: "Newsletters", url: "#" },
      { label: "Our Partners", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Resources",
    urls: [
      { label: "Blog", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "FAQ", url: "#" },
      { label: "Events", url: "#" },
      { label: "Ebooks & Guides", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    urls: [
      { label: "LinkedIn", url: "#" },
      { label: "Twitter", url: "#" },
      { label: "Facebook", url: "#" },
      { label: "Instagram", url: "#" },
      { label: "YouTube", url: "#" },
    ],
  },
]
