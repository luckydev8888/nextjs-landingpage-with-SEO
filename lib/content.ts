interface Testimonial {
    avatar: string
    content: string
    title: string
}


export const testimonialData: Testimonial[] = [
    {
        avatar: "/rocket.png",
        content:
            "Direct Instagram users straight to your page on their native browser, like Safari.",
        title: "Deeplink Technology",
    },
    {
        avatar: "/keyboard.png",
        content:
            "Create a beautiful landing page with all your custom links and socials.",
        title: "Landing Page",
    },
    {
        avatar: "/paper.png",
        content:
            "Redirect users directly to any website without an intermediary page.",
        title: "Direct Link",
    },
    {
        avatar: "/laptop.png",
        content:
            "Activate Shield Protection to protect your Instagram account against mods & bots.",
        title: "Shield Protection",
    },{
        avatar: "/user.png",
        content:
            "Redirect users directly to any website without an intermediary page.",
        title: "Geo Filter",
    },{
        avatar: "/check.png",
        content:
            "Track activity & engagement in real-time (clicks, devices, demographics, IPs).",
        title: "Analytics",
    },
]



//  Footer content

interface FooterLink {
    label: string;
    url: string;
}

interface FooterSectionProps {
    title: string;
    urls: FooterLink[];
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
    }
];