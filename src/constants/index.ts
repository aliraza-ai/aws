"use client";

import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
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
  image_slide_1,
  image_slide_2,
  image_slide_3,
  nft_slide_1,
  nft_slide_2,
  nft_slide_3,
} from "../../public";
import { MdOutlineDashboard } from "react-icons/md";
import { RxCheckCircled } from "react-icons/rx";
import {
  AiOutlineHome,
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
  MdClosedCaption,
  MdOutlineTitle,
  MdQuiz,
  MdSupportAgent,
} from "react-icons/md";
import { IconType } from "react-icons";
import {
  FaHashtag,
  FaBuysellads,
  FaQuora,
  FaNewspaper,
  FaGripLines,
  FaBlog,
  FaCompactDisc,
  FaImage,
  FaComment,
  FaTwitterSquare,
  FaDiscourse,
  FaSuitcase,
  FaRocket,
  FaBullseye,
  FaEnvelopeOpen,
  FaBuilding,
  FaHandshake,
  FaBook,
} from "react-icons/fa";
import {
  blogCardImage1,
  blogCardImage2,
  blogCardImage3,
  blogCardImage4,
  blogCardImage5,
} from "../../public/index";
import { RiArticleFill } from "react-icons/ri";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { TfiLayoutListPost } from "react-icons/tfi";
import { ImParagraphJustify } from "react-icons/im";
import { IoListOutline } from "react-icons/io5";
import { TbArticle } from "react-icons/tb";
import { RiFilePaper2Fill } from "react-icons/ri";
import { ImCalendar } from "react-icons/im";
import { BiDockLeft } from "react-icons/bi";
import { RiArticleLine, RiKeyboardFill } from "react-icons/ri";
import { PiChatCenteredTextDuotone } from "react-icons/pi";
import { CgTranscript } from "react-icons/cg";
import { IoMdContacts } from "react-icons/io";
import {
  MdOutlineCallToAction,
  MdOutlineFeaturedPlayList,
  MdOutlineThumbsUpDown,
} from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { LuSubtitles, LuHash } from "react-icons/lu";

import { blogstep1, blogstep2, blogstep3, blogstep4 } from "../../public";
import { chatstep1, chatstep2, chatstep3, chatstep4 } from "../../public";
import {
  coursestep1,
  coursestep2,
  coursestep3,
  coursestep4,
} from "../../public";
import { imagestep1, imagestep2, imagestep3, imagestep4 } from "../../public";
import {
  socialStep1,
  socialStep2,
  socialStep3,
  socialStep4,
} from "../../public";
import {
  websitestep1,
  websitestep2,
  websitestep3,
  websitestep4,
} from "../../public";
import {
  marketingstep1,
  marketingstep2,
  marketingstep3,
  marketingstep4,
} from "../../public";
import { StepProps } from "@material-tailwind/react/components/Stepper/Step";

// import { StaticImageData } from "next/image";

// const tokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

export const NAV_LINKS = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "About", route: "/#about" },
  { id: 3, title: "Content", route: "/user/dashboard" },
  { id: 4, title: "Images", route: "/ai-image-generator" },
  { id: 5, title: "APIs", route: "/api" },
  { id: 6, title: "Pricing", route: "/#pricing" },
  { id: 7, title: "Blogs", route: "/blogs" },
  // { id: 8, title: "Contact", route: "/contact" },
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
    package: "Basic Pack",
    currency: "",
    features: [
      "3000 Words / month",
      "5 Images / month",
      "10 Chats / month",
      "All access tools",
    ],
    duration: "Unlimited",
  },
  {
    id: 1,
    price: 4.99,
    package: "Standard Pack",
    currency: "USD",
    features: [
      "15000 Words / month",
      "500 Images / month",
      "250 Chats / month",
      "All access tools",
    ],
    duration: "1 Month",
    link: "https://buy.stripe.com/14kbM9fM5dfV9d63co",
  },
  {
    id: 2,
    package: "Premium Pack",
    price: "59.99",
    currency: "USD",
    features: [
      "20000 words / month",
      "Unlimited Images / month",
      "Unlimited Chats / month",
      "All access tools",
    ],
    duration: "1 Month",
    link: "https://buy.stripe.com/4gwbM943ncbRaha00e",
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
    link: "/#about",
  },
  {
    title: "Content",
    link: "/user/dashboard",
  },
  {
    title: "APIs",
    link: "/api",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const FOOTER_FEATURES = [
  {
    title: "Social Media Content Generation",
    link: "/ai-social-media",
  },
  {
    title: "Blog Content Generation",
    link: "/ai-blog-generator",
  },
  {
    title: "Website Content Generation",
    link: "/website-content-generator",
  },
  {
    title: "Marketing Content Generation",
    link: "/ai-marketing-generator",
  },
  {
    title: "Image Generation",
    link: "/user/image-generator",
  },
  {
    title: "Chatting",
    link: "/ai-chat",
  },
];

export const SOCIAL_LINKS = [
  "https://twitter.com/intelliwriter1 ",
  "https://linkedin.com/company/intelliwriter.io",
  "https://www.facebook.com/Intelliwriter.io/",
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
    link: "https://twitter.com/intelliwriter1",
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
    link: "https://www.facebook.com/Intelliwriter.io/",
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
    title: "Dashboard",
    link: "/user/dashboard",
  },
  {
    id: 3,
    icon: MdSupportAgent,
    title: "Support",
    link: "/contact",
  },
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
    icon: AiOutlineBulb,
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

interface apiSectionData {
  id: number;
  icon: IconType;
  paragraph: string;
}

export const trust_api_section_data: apiSectionData[] = [
  {
    id: 1,
    icon: RxCheckCircled,
    paragraph:
      "Robust Data Encryption: Data is secure during transmission through advanced encryption, preventing unauthorized access.",
  },
  {
    id: 2,
    icon: RxCheckCircled,
    paragraph:
      "Data Privacy Compliance: Stringent adherence to data protection laws ensures data confidentiality and privacy.",
  },
  {
    id: 3,
    icon: RxCheckCircled,
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

interface sidebarProps {
  id: number;
  title: string;
  submenu: false;
  link: string;
  icon: IconType;
}

export const sidebarLinks: sidebarProps[] = [
  {
    id: 0,
    title: "Home",
    submenu: false,
    link: "/api",
    icon: AiOutlineHome,
  },
  {
    id: 0,
    title: "Documentations",
    submenu: false,
    link: "/api/docs",
    icon: AiOutlineFileText,
  },
  {
    id: 1,
    title: "Video Description",
    submenu: false,
    link: "/api/video-description",
    icon: AiOutlineVideoCamera,
  },
  {
    id: 2,
    title: "Article Provider",
    submenu: false,
    link: "/api/article-provider",
    icon: AiOutlineRead,
  },
  {
    id: 3,
    title: "Tags Provider",
    submenu: false,
    link: "/api/tags-provider",
    icon: AiTwotoneTag,
  },
  {
    id: 4,
    title: "Title Provider",
    submenu: false,
    link: "/api/title-provider",
    icon: MdOutlineTitle,
  },
  {
    id: 5,
    title: "Caption Provider",
    submenu: false,
    link: "/api/caption-provider",
    icon: MdClosedCaption,
  },
  {
    id: 6,
    title: "Description Provider",
    submenu: false,
    link: "/api/description-provider",
    icon: AiFillProfile,
  },
  {
    id: 7,
    title: "Hashtags Provider",
    submenu: false,
    link: "/api/hashtags-provider",
    icon: FaHashtag,
  },
  {
    id: 8,
    title: "Wanted Ad Provider",
    submenu: false,
    link: "/api/wanted-ad-provider",
    icon: FaBuysellads,
  },
  {
    id: 9,
    title: "FAQs Provider",
    submenu: false,
    link: "/api/faqs-provider",
    icon: FaQuora,
  },
  {
    id: 10,
    title: "Quiz Provider",
    submenu: false,
    link: "/api/quiz-provider",
    icon: MdQuiz,
  },
  // {
  //   id: 11,
  //   title: "Dynamic Images",
  //   submenu: false,
  //   link: "api/dynamic-images",
  //   icon: IoMdImages,
  // },
  // {
  //   id: 12,
  //   title: "Object Detection",
  //   submenu: false,
  //   link: "/api/object-detection",
  //   icon: FaRegObjectGroup,
  // },
  // {
  //   id: 13,
  //   title: "Gender Recognition",
  //   submenu: false,
  //   link: "/api/gender-recognition",
  //   icon: BiMaleFemale,
  // },
  // {
  //   id: 14,
  //   title: "Face Hide",
  //   submenu: false,
  //   link: "/api/gender-recognition",
  //   icon: BiSolidFace,
  // },
  // {
  //   id: 15,
  //   title: "Image to text",
  //   submenu: false,
  //   link: "/api/image-to-text",
  //   icon: RiImageEditLine,
  // },
  // {
  //   id: 16,
  //   title: "Text to speech",
  //   submenu: false,
  //   link: "/api/text-to-speech",
  //   icon: BsSoundwave,
  // },
  // {
  //   id: 17,
  //   title: "Noise Remover",
  //   submenu: false,
  //   link: "/api/noise-remover",
  //   icon: CgEditNoise,
  // },
];

export const IntelliApiData = [
  {
    id: 1,
    heading: "Video Description",
    paragraph: "Generate video descriptions for content creators.",
    link: "/api/video-description",
  },
  {
    id: 2,
    heading: "Article Provider",
    paragraph: "Generate Articles from Title and Keywords",
    link: "/api/article-provider ",
  },
  {
    id: 3,
    heading: "Tags Provider",
    paragraph: "Auto-Generate Tags from Video Titles",
    link: "/api/tags-provider ",
  },
  {
    id: 4,
    heading: "Title Provider",
    paragraph: "Generate SEO Titles from Descriptions",
    link: "/api/title-provider ",
  },
  {
    id: 5,
    heading: "Caption Provider",
    paragraph: "Auto-Generate Captions from Titles",
    link: "/api/caption-provider ",
  },
  {
    id: 6,
    heading: "Description Provider",
    paragraph: "Auto-Generate Descriptions from Titles",
    link: "/api/description-provider ",
  },
  {
    id: 7,
    heading: "Hashtags Provider",
    paragraph: "Auto-Generate Hashtags from Descriptions",
    link: "/api/hashtags-provider ",
  },
  {
    id: 8,
    heading: "Wanted Ad Provider",
    paragraph: "Auto-Generate Required Ads from Input",
    link: "/api/wanted-ad-provider ",
  },
  {
    id: 9,
    heading: "FAQs Provider",
    paragraph: "Auto-Generate FAQs from Description",
    link: "/api/faqs-provider ",
  },
  {
    id: 10,
    heading: "Quiz Provider",
    paragraph: "Auto-Generate Text-Based Quizzes from Inputs",
    link: "/api/quiz-provider ",
  },
];

export const VoiceApiData = [
  {
    id: 1,
    heading: "Text-to-Speech",
    paragraph: "Generate audio note from text descriptions for your videos.",
    link: "/api/text-to-speech",
  },
  {
    id: 2,
    heading: "Noise Remover",
    paragraph: "Remove noise from your audio/video.",
    link: "/api/noise-remover",
  },
];

export const ImageApiData = [
  {
    id: 1,
    heading: "Dynamic Images",
    paragraph: "Generate images with dynamic content.",
    link: "/api/dynamic-images",
  },
  {
    id: 2,
    heading: "Object Detection",
    paragraph: "Automatically detects objects from images.",
    link: "/api/object-detection",
  },
  {
    id: 3,
    heading: "Gender Recognition",
    paragraph: "Create and manipulate images with ease.",
    link: "/api/gender-recognition",
  },
  {
    id: 4,
    heading: "Face Hide",
    paragraph: "Hide face using AI APIs to control your visuals.",
    link: "/api/face-hide",
  },
  {
    id: 5,
    heading: "Image to text",
    paragraph: "Effortlessly generate text for your images.",
    link: "/api/image-to-text",
  },
];

export interface BlogPageDataProps {
  id: number;
  image: string;
  title: string;
  date: string;
}

export const BlogPageData = [
  {
    id: 1,
    image: blogCardImage5,
    title: "Lights, Camera, Action: Building a Multilingual Movie Recommended!",
    date: "Thu, 01 Dec 2023",
  },
  {
    id: 2,
    image: blogCardImage2,
    title: "Lights, Camera, Action: Building a Multilingual Movie Recommended!",
    date: "Sat, 31 Oct 2023",
  },
  {
    id: 3,
    image: blogCardImage3,
    title: "Lights, Camera, Action: Building a Multilingual Movie Recommended!",
    date: "Thu, 20 Nov 2023",
  },
  {
    id: 4,
    image: blogCardImage4,
    title: "Lights, Camera, Action: Building a Multilingual Movie Recommended!",
    date: "Mon, 15 Jan 2023",
  },
  {
    id: 5,
    image: blogCardImage2,
    title: "Lights, Camera, Action: Building a Multilingual Movie Recommended!",
    date: "Sat, 20 Sep 2023",
  },
  {
    id: 6,
    image: blogCardImage1,
    title: "Lights, Camera, Action: Building a Multilingual Movie Recommended!",
    date: "Sun, 01 Jun 2023",
  },
];

export const images = [
  {
    id: 1,
    img: image_slide_1,
  },
  {
    id: 2,
    img: image_slide_2,
  },
  {
    id: 3,
    img: image_slide_3,
  },
];

export const nfts = [
  {
    id: 1,
    img: nft_slide_1,
  },
  {
    id: 2,
    img: nft_slide_2,
  },
  {
    id: 3,
    img: nft_slide_3,
  },
];

// DATA FOR LANDING PAGES

// FOR AI CHAT LANDING PAGE

export interface MoretoolsProps {
  icon: IconType;
  description: string;
  title: string;
  bgcolor: string;
  color: string;
}

export const MoretoolsChat: MoretoolsProps[] = [
  {
    icon: FaBlog,
    title: "Blog content",
    description: "AI Blog Generator",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    icon: FaCompactDisc,
    title: "Social Media",
    description: "AI Social Media Tool",
    bgcolor: "#fef9c3",
    color: "#facc15",
  },
  {
    icon: FaGripLines,
    title: "Marketing",
    description: "AI Marketing Tool",
    bgcolor: "#dbeafe",
    color: "#2563eb",
  },
  {
    icon: FaNewspaper,
    title: "Website",
    description: "AI Web Tool",
    bgcolor: "#fee2e2",
    color: "#dc2626",
  },
  {
    icon: FaBook,
    title: "Course Builder",
    description: "AI Content Generator",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
  },
  {
    icon: FaImage,
    title: "Image Generator",
    description: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "#4e7471",
  },
];

export const MoretoolsImage: MoretoolsProps[] = [
  {
    icon: FaBlog,
    title: "Blog content",
    description: "AI Blog Generator",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    icon: FaCompactDisc,
    title: "Social Media",
    description: "AI Social Media Tool",
    bgcolor: "#fef9c3",
    color: "#facc15",
  },
  {
    icon: FaGripLines,
    title: "Marketing",
    description: "AI Marketing Tool",
    bgcolor: "#dbeafe",
    color: "#2563eb",
  },
  {
    icon: FaNewspaper,
    title: "Website",
    description: "AI Web Tool",
    bgcolor: "#fee2e2",
    color: "#dc2626",
  },
  {
    icon: FaBook,
    title: "Course Builder",
    description: "AI Content Generator",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
  },
  // {
  //   icon: FaImage ,
  //   title: "Image Generator",
  //   description: "AI Image Generator",
  //   bgcolor: "#80fcf0",
  //   color: "#4e7471",
  // },
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#9333ea",
    color: "#9e5aa4",
  },
];

export interface dataProps {
  icon: IconType;
  description: string;
  title: string;
}

export const dataBlog: dataProps[] = [
  {
    icon: RiArticleFill,
    title: "Article",
    description: "Generate articles based on title, keywords, and subheading.",
  },
  {
    icon: BsLayoutTextSidebarReverse,
    title: "Blog Intro",
    description:
      "Generate blog intros based on the blog post title and content.",
  },
  {
    icon: TfiLayoutListPost,
    title: "Blog Listicle",
    description:
      "Generate blog listicle based on the blog post title and content.",
  },
  {
    icon: IoListOutline,
    title: "Blog Outline",
    description:
      "Generate blog outline based on the blog post title and content.",
  },
  {
    icon: RiArticleFill,
    title: "Blog Outro",
    description:
      "Generate blog outro based on the blog post title and content.",
  },
  {
    icon: ImParagraphJustify,
    title: "Blog Paragraph",
    description:
      "Generate blog paragraph based on the blog post title and subheading.",
  },
  {
    icon: TbArticle,
    title: "Blog Post",
    description: "Generate blog posts, focused on keywords, about any topic.",
  },
  {
    icon: RiArticleFill,
    title: "Blog Section",
    description:
      "Generate blog section based on the blog post title and subheading.",
  },
];

export const MoretoolsBlog: MoretoolsProps[] = [
  // {
  //   icon: <FaBlog />,
  //   title: "Blog content",
  //   description: "AI Blog Generator",
  //   bgcolor: "#dcfce7",
  //   color: "#16a34a",
  // },
  {
    icon: FaCompactDisc,
    title: "Social Media",
    description: "AI Social Media Tool",
    bgcolor: "#fef9c3",
    color: "#facc15",
  },
  {
    icon: FaGripLines,
    title: "Marketing",
    description: "AI Marketing Tool",
    bgcolor: "#dbeafe",
    color: "#2563eb",
  },
  {
    icon: FaNewspaper,
    title: "Website",
    description: "AI Web Tool",
    bgcolor: "#fee2e2",
    color: "#dc2626",
  },
  {
    icon: FaBook,
    title: "Course Builder",
    description: "AI Content Generator",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
  },
  {
    icon: FaImage,
    title: "Image Generator",
    description: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "#4e7471",
  },
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#9333ea",
    color: "#9e5aa4",
  },
];

export const dataCourse: dataProps[] = [
  {
    icon: RiFilePaper2Fill,
    title: "Course Content",
    description: "Generate course outline, quiz and its assignment.",
  },
  {
    icon: RiFilePaper2Fill,
    title: "Course Outline",
    description: "Generate couse outline for your subject.",
  },
  {
    icon: MdQuiz,
    title: "Quiz Generator",
    description: "Generate quiz questions for your subject topic.",
  },
  {
    icon: ImCalendar,
    title: "Time Table",
    description: "Generate Time table schedule for your work!",
  },
  {
    icon: BiDockLeft,
    title: "Assignment Generator",
    description: "Generate assignment questions for your work!",
  },
];

export const MoretoolsCourse: MoretoolsProps[] = [
  {
    icon: FaBlog,
    title: "Blog content",
    description: "AI Blog Generator",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    icon: FaCompactDisc,
    title: "Social Media",
    description: "AI Social Media Tool",
    bgcolor: "#fef9c3",
    color: "#facc15",
  },
  {
    icon: FaGripLines,
    title: "Marketing",
    description: "AI Marketing Tool",
    bgcolor: "#dbeafe",
    color: "#2563eb",
  },
  {
    icon: FaNewspaper,
    title: "Website",
    description: "AI Web Tool",
    bgcolor: "#fee2e2",
    color: "#dc2626",
  },
  // {
  //   icon: FaBook,
  //   title: "Course Builder",
  //   description: "AI Content Generator",
  //   bgcolor: "#f3e8ff",
  //   color: "#9333ea",
  // },
  {
    icon: FaImage,
    title: "Image Generator",
    description: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "#4e7471",
  },
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#9333ea",
    color: "#9e5aa4",
  },
];

export const dataSocialMedia: dataProps[] = [
  {
    icon: FaHashtag,
    title: "Hashtags",
    description: "Generate #hashtags for social network content.",
  },
  {
    icon: RiArticleLine,
    title: "Social Post",
    description:
      "Generate social posts ready to be published on social platforms.",
  },
  {
    icon: FaDiscourse,
    title: "Social Post Caption",
    description: "Generate social posts caption ready to grab attention.",
  },
  {
    icon: FaTwitter,
    title: "Tweet",
    description: "Generate engaging tweets based on a description.",
  },
  {
    icon: FaTwitterSquare,
    title: "Tweet Thread",
    description: "Generate engaging twitter threads based on a description.",
  },
  {
    icon: PiChatCenteredTextDuotone,
    title: "Video Description",
    description:
      "Generate compelling video descriptions based on a description.",
  },
  {
    icon: CgTranscript,
    title: "Video Script",
    description: "Generate compelling video scripts based on a description.",
  },
  {
    icon: RiKeyboardFill,
    title: "Video Tags",
    description: "Generate compelling video tags based on a video title.",
  },
];

export const MoretoolsSocialMedia: MoretoolsProps[] = [
  {
    icon: FaBlog,
    title: "Blog content",
    description: "AI Blog Generator",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  // {
  //   icon: FaCompactDisc ,
  //   title: "Social Media",
  //   description: "AI Social Media Tool",
  //   bgcolor: "#fef9c3",
  //   color: "#facc15",
  // },
  {
    icon: FaGripLines,
    title: "Marketing",
    description: "AI Marketing Tool",
    bgcolor: "#dbeafe",
    color: "#2563eb",
  },
  {
    icon: FaNewspaper,
    title: "Website",
    description: "AI Web Tool",
    bgcolor: "#fee2e2",
    color: "#dc2626",
  },
  {
    icon: FaBook,
    title: "Course Builder",
    description: "AI Content Generator",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
  },
  {
    icon: FaImage,
    title: "Image Generator",
    description: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "#4e7471",
  },
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#9333ea",
    color: "#9e5aa4",
  },
];

export const dataWebsite: dataProps[] = [
  {
    icon: IoMdContacts,
    title: "About Us",
    description:
      "Generate about us text on the title and description of a page.",
  },
  {
    icon: MdOutlineCallToAction,
    title: "Call To Action",
    description:
      "Generate CTA lines based on the name and description of a product or service.",
  },
  {
    icon: FaQuestionCircle,
    title: "FAQ",
    description:
      "Generate frequently asked questions for a product or service.",
  },
  {
    icon: BsStars,
    title: "Feature Section",
    description: "Generate feature sections to highlight a product or service.",
  },
  {
    icon: LuSubtitles,
    title: "Headline",
    description: "Generate engaging headlines for products and services.",
  },
  {
    icon: MdOutlineFeaturedPlayList,
    title: "Meta Description",
    description:
      "Generate meta descriptions based on the title and description of a page.",
  },
  {
    icon: LuHash,
    title: "Meta Keywords",
    description:
      "Generate meta dkeywords based on the title and description of a page.",
  },
  {
    icon: MdOutlineThumbsUpDown,
    title: "Pros and Cons",
    description: "Generate pros and cons for a product or service.",
  },
];

export const MoretoolsWebsite: MoretoolsProps[] = [
  {
    icon: FaBlog,
    title: "Blog content",
    description: "AI Blog Generator",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    icon: FaCompactDisc,
    title: "Social Media",
    description: "AI Social Media Tool",
    bgcolor: "#fef9c3",
    color: "#facc15",
  },
  {
    icon: FaGripLines,
    title: "Marketing",
    description: "AI Marketing Tool",
    bgcolor: "#dbeafe",
    color: "#2563eb",
  },
  // {
  //   icon: FaNewspaper,
  //   title: "Website",
  //   description: "AI Web Tool",
  //   bgcolor: "#fee2e2",
  //   color: "#dc2626",
  // },
  {
    icon: FaBook,
    title: "Course Builder",
    description: "AI Content Generator",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
  },
  {
    icon: FaImage,
    title: "Image Generator",
    description: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "#4e7471",
  },
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#9333ea",
    color: "#9e5aa4",
  },
];

export const dataMarketing: dataProps[] = [
  {
    icon: FaBullseye,
    title: "Advertisement",
    description: "Generate Creative ad description for product or services",
  },
  {
    icon: FaSuitcase,
    title: "Job Description",
    description:
      "Generate professional job description to attract top talents.",
  },
  {
    icon: FaRocket,
    title: "Mission Statement",
    description: "Generate Comprehensive and informative mission statement.",
  },
  {
    icon: FaEnvelopeOpen,
    title: "Newsletter",
    description: "Generate Engaging and comprehensive newsletters.",
  },
  {
    icon: FaNewspaper,
    title: "Press Release",
    description: "Generate Comprehensive and informative press release.",
  },
  {
    icon: FaBuilding,
    title: "Startup Ideas",
    description:
      "Generate innovative startup name and ideas based on the domain.",
  },

  {
    icon: FaHandshake,
    title: "Help Wanted Ad",
    description:
      "Generate job hiring adds for your business.And attract top talent seamlessly.",
  },
  {
    icon: FaGripLines,
    title: "Business Tagline",
    description: "Generate slogans for your business.And attract top client.",
  },
];

export const MoretoolsMarketing: MoretoolsProps[] = [
  {
    icon: FaBlog,
    title: "Blog content",
    description: "AI Blog Generator",
    bgcolor: "#dcfce7",
    color: "#16a34a",
  },
  {
    icon: FaCompactDisc,
    title: "Social Media",
    description: "AI Social Media Tool",
    bgcolor: "#fef9c3",
    color: "#facc15",
  },
  // {
  //   icon: FaGripLines,
  //   title: "Marketing",
  //   description: "AI Marketing Tool",
  //   bgcolor: "#dbeafe",
  //   color: "#2563eb",
  // },
  {
    icon: FaNewspaper,
    title: "Website",
    description: "AI Web Tool",
    bgcolor: "#fee2e2",
    color: "#dc2626",
  },
  {
    icon: FaBook,
    title: "Course Builder",
    description: "AI Content Generator",
    bgcolor: "#f3e8ff",
    color: "#9333ea",
  },
  {
    icon: FaImage,
    title: "Image Generator",
    description: "AI Image Generator",
    bgcolor: "#80fcf0",
    color: "#4e7471",
  },
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#9333ea",
    color: "#9e5aa4",
  },
];

export interface Steps {
  id: number;
  detail: string;
  step: string;
  image: string;
}

export const stepsBlog: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard chose what you want to create.",
    image: blogstep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Blog Content tab, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into content.",
    image: blogstep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Sit back, relax, and let the AI generate your prompt.",
    image: blogstep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: blogstep4,
  },
];

export const stepsChat: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: chatstep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Chat, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art.",
    image: chatstep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: chatstep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: chatstep4,
  },
];

export const stepsCourse: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: coursestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Course Builder, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art.",
    image: coursestep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: coursestep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: coursestep4,
  },
];

export const stepsImage: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard chose what you want to create.",
    image: imagestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Image Generator, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art.",
    image: imagestep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: imagestep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: imagestep4,
  },
];

export const stepsSocial: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
    image: socialStep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail: "Look for your desired tab and hit a click ",
    image: socialStep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Enter Prompt to Search: Within the tab, You'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into hashtags",
    image: socialStep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: socialStep4,
  },
];

export const stepsWebsite: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: websitestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Image Generator, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art.",
    image: websitestep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: websitestep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: websitestep4,
  },
];

export const stepsMarketing: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Marketing tool: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard chose what you want to create.",
    image: marketingstep1.src,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Marketing tool , you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch the transformation of your idea.",
    image: marketingstep2.src,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: marketingstep3.src,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: marketingstep4.src,
  },
];
