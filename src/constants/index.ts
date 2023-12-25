import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaCircleUser } from "react-icons/fa6";
import {
  Step1,
  Step2,
  Step3,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
  Feature7,
  Feature8,
} from "../../public";
import { MdOutlineDashboard } from "react-icons/md";
import { RxCheckCircled }from "react-icons/rx";
import {
  CompetitivePricing,
  Customization,
  DedicatedSupport,
  DeveloperFriendly,
  HighAccuracy,
  IndustryIntegration,
  RealTimeProcessing,
  Scalability,
} from "../../public/api/index";
import {
  AiFillApi,
  AiOutlineBulb,
  AiOutlineCode,
  AiOutlineCheck,
  AiOutlineVideoCamera,
  AiOutlineRead,
  AiOutlineFileText,
  AiTwotoneTag,
  AiFillProfile,
} from "react-icons/ai";

import {
  ComprehensiveDocumentation,
  DeverseLanguageSupport,
  EasyIntegration,
  Support,
} from "../../public/api/index";
import { ReactNode } from "react";

const tokens =
  typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

export const NAV_LINKS = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "About", route: "/#about" },
  { id: 3, title: "Content", route: "/user/dashbaord" },
  { id: 4, title: "Images", route: "/user/image-generator" },
  { id: 5, title: "APIs", route: "/api" },
  { id: 6, title: "Pricing", route: "/#pricing" },
  // { id: 7, title: "Blog", route: "https://intelliwriter.io/blog/" },
  { id: 8, title: "Contact", route: "/contact" },
];

export const HERO_CONTENT = {
  id: 1,
  heading: "Create Instant",
  description:
    "Unleash your creativity with digital art exploration. Dive into the world of creation and responsive prompts, fostering artistic expression.",
  buttonText: "Get Started",
  imageUrl: "/background.gif",
};

export const ABOUTUS_CONTENT = [
  {
    description:
      "Intelliwriter is an AI-based content generator designed to simplify and enhance your writing experience. Whether you are a content creator, marketer, student, or business owner, Intelliwriter is here to take your content creation process to a whole new level.",
    steps: [
      {
        image: Step1,
        description: "Description for Step 1",
      },

      {
        image: Step2,
        description: "Description for Step 2",
      },
      {

        image: Step3,

        description: "Description for Step 3",
      },
    ],
  },
];

export const pricingData = [
  {
    id: 0,
    price: "Free",
    currency: "",
    features: [
      "3000 Words / month",
      "10 Images / month",
      "10 Chats / month",
      "All access tools",
    ],
  },
  {
    id: 1,
    price: 4.99,
    currency: "USD",
    features: [
      "15000 Words / month",
      "500 Images / month",
      "250 Chats / month",
      "All access tools",
    ],
  },
  {
    id: 2,
    price: "59.99",
    currency: "USD",
    features: [
      "50000 words / month",
      "Unlimited Images / month",
      "Unlimited Chats / month",
      "All access tools",
    ],
  },
];

export const Accord = [
  {
    id: 1,
    question: "Is the content unique?",
    answer:
      "95% of the content generated by the AI is unique and original. We also provide a uniqueness score for longer form content generated so you can have peace of mind to know that the content you have received is unique.",
  },
  {
    id: 2,
    question: "How is the content generated?",
    answer:
      "We make use of a variety of AI models, with Generative Pre-trained Transformer 3 is an autoregressive language model which uses deep learning to produce human-like text. It's a game changer for content creators.",
  },
  {
    id: 3,
    question: "Who retains the copyright?",
    answer:
      "You do. We will not claim copyright over content generated by the AI for you.",
  },
  {
    id: 4,
    question: "What languages do you support?",
    answer: "We currently support all languages supported by Google Translate.",
  },
  {
    id: 5,
    question: "Is there discount for non-profits?",
    answer: "Please get in touch with us below.",
  },
];

export const features = [
  {
    id: 0,
    title: "Text to Images",
    desc: "Effortlessly transform words into captivating, attention-grabbing visuals with our advanced AI tool.",
    icon: Feature1,
  },
  {
    id: 2,
    title: "Social Ads",
    desc: "Revolutionize social ads with our AI. Craft stunning posts in few clicks!",
    icon: Feature2,
  },
  {
    id: 3,
    title: "Course Builder",
    desc: "Craft comprehensive courses effortlessly with our AI. Build engaging courses.",
    icon: Feature3,
  },
  {
    id: 4,
    title: "Content Generator",
    desc: "Fuel your content effortlessly with our AI. Generate engaging content.",
    icon: Feature4,
  },
  {
    id: 5,
    title: "Website Content ",
    desc: "Craft your website effortlessly! Our AI generates compelling content for sites.",
    icon: Feature5,
  },
  {
    id: 6,
    title: "Content Summary ",
    desc: "Summarize content effortlessly with our AI to simplify complex material.",
    icon: Feature6,
  },
  {
    id: 7,
    title: "Content Rewrite",
    desc: "Effortlessly revamp your content and rewriting text with our AI tool.",
    icon: Feature7,
  },
  {
    id: 8,
    title: "Content Grammar",
    desc: "Perfect your content and enhance grammar flawlessly with our AI tool.",
    icon: Feature8,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "#about",
  },
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "APIs",
    link: "https://api.intelliwriter.io/",
  },
  {
    title: "Content",
    link: "/auth/login",
  },
];

export const FOOTER_FEATURES = [
  {
    title: "Social Media Content Generation",
    link: "/",
  },
  {
    title: "Blog Content Generation",
    link: "/",
  },
  {
    title: "Website Content Generation",
    link: "/",
  },
  {
    title: "Marketing Content Generation",
    link: "/",
  },
  {
    title: "Chatting",
    link: "/",
  },
];

export const SOCIAL_LINKS = [
  "https://twitter.com/AiRobx75090 ",
  "https://linkedin.com/company/intelliwriter.io",
  "https://facebook.com/Intelliwriter.io",
  "https://instagram.com/intelliwriter_",
];

interface CommunityCard {
  id: number;
  icon: IconType;
  title: string;
  content: string;
  link: string;
}

export const COMMUNITYCARD_DATA: CommunityCard[] = [
  {
    id: 1,
    icon: FaLinkedin,
    title: "Linkedin",
    content:
      "Join us on Linkedin for AI-powered content creation updates, insights, and engaging conversations!",
    link: "https://linkedin.com/company/intelliwriter.io",
  },
  {
    id: 2,
    icon: FaTwitter,
    title: "Twitter",
    content:
      "Join us on Twitter for active connections and engaging conversations!",
    link: "https://twitter.com/AiRobx75090",
  },
  {
    id: 3,
    icon: FaInstagram,
    title: "Instagram",
    content:
      "Connect with us on Instagram! Dive into creativity, discover trends, and be part of our vibrant community.",
    link: "https://instagram.com/intelliwriter_",
  },
  {
    id: 4,
    icon: FaFacebook,
    title: "Facebook",
    content:
      "Connect effortlessly with voice, video, and text on Facebook. Stay calm and chat with your communities!",
    link: "https://facebook.com/Intelliwriter.io",
  },
];

interface DropdownMenu {
  id: number;
  icon: IconType;
  title: string;
  link: string;
}

export const dropdownMenu: DropdownMenu[] = [
  {
    id: 1,
    icon: FaCircleUser,
    title: "Profile",
    link: "/user/profile",
  },
  {
    id: 2,
    icon: MdOutlineDashboard,
    title: "Dashbaord",
    link: "/user/dashbaord",
  },
];

// sidebar
export const SIDEBAR_LINKS = [
  // Start here
  { text: "Dashboard", url: "/dashboard" },
  { text: "Blog Content", url: "/dashboard/analytics" },
  { text: "Social Media", url: "/dashboard/reporting" },
  { text: "Marketing", url: "/dashboard/projects" },

  // User tool
  { text: "Website", url: "/ecommerce" },
  { text: "Course Builder", url: "/ecommerce/products" },
  { text: "Image Generator", url: "/settings" },

  // Support
  { text: "Chat", url: "/logout" },
];

export const staticNotifications = [
  {
    id: 1,
    profileImage: "/user.png",
    userName: "Micky John",
    message: "New message received",
    time: "just now",
  },
  {
    id: 2,
    profileImage: "/user.png",
    userName: "Micky John",
    message: "New message received",
    time: "just now",
  },
  {
    id: 3,
    profileImage: "/user.png",
    userName: "Micky John",
    message: "New message received",
    time: "just now",
  },
];


export const HowItWorks = [
  {
    id: 1,
    title: "Fast API access",
    icon: AiFillApi,
    paragraph: "Get access to our powerful and fast API for your project.",
  },
  {
    id: 2,
    title: "Smart Content Generation",
    icon: AiOutlineBulb ,
    paragraph:
      "Intelliwriter's AI-powered algorithms create high-quality content tailored to your needs.",
  },
  {
    id: 3,
    title: "Seamless Integration",
    icon: AiOutlineCode,
    paragraph:
      "Easily integrate our API into your application, website, or platform with our developer-friendly documentation.",
  },
  {
    id: 4,
    title: "Real-time Updates",
    icon: AiOutlineCheck,
    paragraph:
      "Receive real-time updates and maintain your content quality with continuous AI enhancements.",
  },
];

export const apiFeatures = [
  {
    id: 0,
    title: "High Accuracy",
    desc: "Precise AI results you can trust",
    icon: HighAccuracy,
  },
  {
    id: 2,
    title: "Scalability",
    desc: "Grow your AI capabilities effortlessly",
    icon: Scalability,
  },
  {
    id: 3,
    title: "Real-time Processing",
    desc: "Immediate responses for dynamic applications",
    icon: RealTimeProcessing,
  },
  {
    id: 4,
    title: "Customization",
    desc: "Tailor AI solutions to your specific needs",
    icon: Customization,
  },
  {
    id: 5,
    title: "Industry Integration",
    desc: "Seamlessly fits into various sectors",
    icon: IndustryIntegration,
  },
  {
    id: 6,
    title: "Developer-Friendly",
    desc: "Simplifies integration for coders",
    icon: DeveloperFriendly,
  },
  {
    id: 7,
    title: "Competitive Pricing",
    desc: "Cost-effective plans for all users",
    icon: CompetitivePricing,
  },
  {
    id: 8,
    title: "Dedicated Support",
    desc: "24/7 assistance when you need it",
    icon: DedicatedSupport,
  },
];

interface  apiSectionData
{
  id: number;
  icon: ReactNode;
  paragraph: string;
}
export const trust_api_section_data:apiSectionData[] = [
  {
    id: 1,
    icon: RxCheckCircled ,
    paragraph: 
      "Robust Data Encryption: Data is secure during transmission through advanced encryption, preventing unauthorized access.",
  },
  {
    id: 2,
    icon: RxCheckCircled ,
    paragraph:
      "Data Privacy Compliance: Stringent adherence to data protection laws ensures data confidentiality and privacy.",
  },
  {
    id: 3,
    icon: RxCheckCircled ,
    paragraph:
      "Access Control: Only authorized personnel can access and manage systems, with regular monitoring and auditing.",
  },
  {
    id: 4,
    icon: RxCheckCircled,
    paragraph:
      "Regular Security Audits: Ongoing tests identify vulnerabilities and address potential threats to maintain security.",
  },
  {
    id: 5,
    icon: RxCheckCircled,
    paragraph:
      "Dedicated Security Team: A team of experts continuously monitors for potential threats and vulnerabilities.",
  },
  {
    id: 6,
    icon: RxCheckCircled,
    paragraph:
      "Incident Response: A well-defined plan ensures swift response to security incidents, minimizing impact on users.",
  },
];

export const missions = [
  {
    id: 0,
    title: "Easy Integration:",
    desc: "Integrate AI into your applications effortlessly with our API. In just a few lines of code, you can unlock the potential of machine learning and natural language processing.",
    icon: ComprehensiveDocumentation,
  },
  {
    id: 1,
    title: "Diverse Language Support",
    desc: "Our AI APIs support a wide range of programming languages, including Python, JavaScript, Ruby, and more. No matter your preferred language, you can harness the power of AI.",
    icon: DeverseLanguageSupport,
  },
  {
    id: 2,
    title: "Customization and Personalization",
    desc: "Our extensive documentation provides you with step-by-step guides, code samples, and real-world examples. We make sure you have everything you need to get started quickly.",
    icon: EasyIntegration,
  },
  {
    id: 3,
    title: "Learning Course Builder",
    desc: "Our dedicated support team is here around the clock to assist you. Have a question or run into an issue? We're just a message away, ready to help.",
    icon: Support,
  },
];

export const Plans = [
{
  name: "Learner",
  price: 9.99,
  offer: "20% off monthly price",
  desc: "Build real projects with real data",
  features: [
    {
      id: 1,
      icon: true,
      boldWord: "Unlimited",
      feature: "users",
    },
    {
      id: 2,
      icon: true,
      boldWord: "Standard",
      feature: "support",
    },
    {
      id: 3,
      icon: true,
      boldWord: "Yes",
      feature: "commercial use",
    },
    {
      id: 4,
      icon: true,
      boldWord: "Premium",
      feature: "server",
    },
    {
      id: 5,
      icon: true,
      boldWord: "Uptime",
      feature: "gaurantee",
    },
    {
      id: 6,
      icon: false,
      boldWord: "No",
      feature: "data catching",
    },
    {
      id: 7,
      icon: false,
      boldWord: "No",
      feature: "custom feature",
    },
  ],
  calls: "20,000",
},
{
  name: "Developer",
  price: 34.99,
  offer: "20% off monthly price",
  desc: "Take your project to the next level",
  features: [
    {
      id: 1,
      icon: true,
      boldWord: "Unlimited",
      feature: "users",
    },
    {
      id: 2,
      icon: true,
      boldWord: "Standard",
      feature: "support",
    },
    {
      id: 3,
      icon: true,
      boldWord: "Yes",
      feature: "commercial use",
    },
    {
      id: 4,
      icon: true,
      boldWord: "Premium",
      feature: "server",
    },
    {
      id: 5,
      icon: true,
      boldWord: "Uptime",
      feature: "gaurantee",
    },
    {
      id: 6,
      icon: true,
      boldWord: "No",
      feature: "data catching",
    },
    {
      id: 7,
      icon: false,
      boldWord: "No",
      feature: "custom feature",
    },
  ],
  calls: "50,000",
},
{
  name: "Business",
  price: 99.99,
  offer: "20% off monthly price",
  desc: "Enterprise and corporate clients",
  features: [
    {
      id: 1,
      icon: true,
      boldWord: "Unlimited",
      feature: "users",
    },
    {
      id: 2,
      icon: true,
      boldWord: "Standard",
      feature: "support",
    },
    {
      id: 3,
      icon: true,
      boldWord: "Yes",
      feature: "commercial use",
    },
    {
      id: 4,
      icon: true,
      boldWord: "Premium",
      feature: "server",
    },
    {
      id: 5,
      icon: true,
      boldWord: "Uptime",
      feature: "gaurantee",
    },
    {
      id: 6,
      icon: true,
      boldWord: "No",
      feature: "data catching",
    },
    {
      id: 7,
      icon: true,
      boldWord: "No",
      feature: "custom feature",
    },
  ],
  calls: "2,00,000",
},
];

export const pricingCards = [
{
  title: "Starter",
  description: "For most businesses that want to optimize web queries",
  features: [
    "All Limited Links",
    "Own Analytics Platform",
    "Chat Support",
    "Unlimited Users",
  ],
  price: "Free",
},
{
  title: "Standard",
  description: "Description for the Standard package",
  features: [
    "Feature 1 for Standard",
    "Feature 2 for Standard",
    "Feature 3 for Standard",
    "Feature 4 for Standard",
  ],
  price: "$9.99",
},
{
  title: "Premium",
  description: "Description for the Premium package",
  features: [
    "Feature 1 for Premium",
    "Feature 2 for Premium",
    "Feature 3 for Premium",
    "Feature 4 for Premium",
  ],
  price: "$19.99",
},
];
