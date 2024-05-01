"use client";

import { IconType } from "react-icons";
import {
  AiFillApi,
  AiFillProfile,
  AiOutlineBulb,
  AiOutlineCheck,
  AiOutlineCode,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineVideoCamera,
  AiTwotoneTag,
} from "react-icons/ai";
import { BiDockLeft, BiSolidImageAlt } from "react-icons/bi";
import { BsLayoutTextSidebarReverse, BsStars,BsArrowsExpand } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FaBarcode } from "react-icons/fa6";
import { BsSlack } from "react-icons/bs";
import { CgTranscript, CgWebsite } from "react-icons/cg";
import {
  FaBlog,
  FaBook,
  FaBuilding,
  FaBullseye,
  FaBuysellads,
  FaComment,
  FaCompactDisc,
  FaDiscourse,
  FaEnvelopeOpen,
  FaFacebook,
  FaGripLines,
  FaHandshake,
  FaHashtag,
  FaImage,
  FaInstagram,
  FaLinkedin,
  FaNewspaper,
  FaQuestionCircle,
  FaQuora,
  FaRocket,
  FaSuitcase,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
  FaRegShareSquare,
} from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { ImCalendar, ImParagraphJustify } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import { LuHash, LuSubtitles } from "react-icons/lu";
import {
  SiBloglovin,
  SiChatbot,
  SiGooglemarketingplatform,
} from "react-icons/si";
import {
  MdClosedCaption,
  MdOutlineCallToAction,
  MdOutlineDashboard,
  MdOutlineFeaturedPlayList,
  MdOutlinePayment,
  MdOutlineThumbsUpDown,
  MdOutlineTitle,
  MdQuiz,
  MdSupportAgent,
  MdVoiceChat,
} from "react-icons/md";
import { PiChatCenteredTextDuotone } from "react-icons/pi";
import {
  RiArticleFill,
  RiArticleLine,
  RiFilePaper2Fill,
  RiKeyboardFill,
} from "react-icons/ri";
import { RxCheckCircled } from "react-icons/rx";
import { TbArticle, TbTextCaption } from "react-icons/tb";
import { TfiLayoutListPost } from "react-icons/tfi";
import {
  youtubestep1,
  youtubestep2,
  youtubestep3,
  youtubestep4,
  Captionstep1,
  Captionstep2,
  Step1,
  Step2,
  Step3,
  contentgen,
  coursebuilder,
  image_slide_1,
  image_slide_2,
  image_slide_3,
  imagegen,
  nft_slide_1,
  nft_slide_2,
  nft_slide_3,
  slider_1,
  slider_2,
  slider_3,
  slider_4,
  slider_5,
  slider_6,
  slider_7,
  socialads,
  speechgen,
  voicegen,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
  Feature7,
  Feature8,
  Feature9,
  Feature10,
} from "../../public";
import {
  blogCardImage1,
  blogCardImage2,
  blogCardImage3,
  blogCardImage4,
  blogCardImage5,
  blogCardImage6,
} from "../../public/index";

import {
  blogstep1,
  blogstep2,
  blogstep3,
  blogstep4,
  chatstep1,
  chatstep2,
  chatstep3,
  chatstep4,
  coursestep1,
  coursestep2,
  coursestep3,
  coursestep4,
  imagestep1,
  imagestep2,
  imagestep3,
  imagestep4,
  marketingstep1,
  marketingstep2,
  marketingstep3,
  marketingstep4,
  socialStep1,
  socialStep2,
  socialStep3,
  socialStep4,
  voicestep1,
  voicestep2,
  voicestep3,
  voicestep4,
  websitestep1,
  websitestep2,
  websitestep3,
  websitestep4,
  SpeechTextstep1,
  SpeechTextstep2,
  SpeechTextstep3,
  SpeechTextstep4,
  // SpeechTextstep3,
} from "../../public";
import { post1 } from "../../public";

// import { StaticImageData } from "next/image";

// const tokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

export const NAV_LINKS = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "About", route: "/#about" },
  { id: 3, title: "AI Tools", route: " " },
  // { id: 4, title: "Images", route: "/ai-image-generator" },
  { id: 4, title: "APIs", route: "/api" },
  { id: 5, title: "Pricing", route: "/#pricing" },
  { id: 6, title: "Blogs", route: "/blogs" },
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
    price: 0,
    icon: CiCircleCheck,
    packagehint: "Starter plan",
    package: "Basic Pack",
    featuresName: [
      "2000 Content Words",
      "No Free Images",
      "GPT-4 Integration",
      "10 Chats Prompts",
      "Voice Over(20 words per attempt)",
      "All Tools Access",
    ],
    features: ["2000", "No", "Yes", "10", "(20 words / prompt)", "All"],
    duration: "Unlimited",
    // icon: <cicircle/>,
  },
  {
    id: 1,
    price: 4.99,
    icon: FaBarcode,
    packagehint: "Most popular",
    package: "Standard Pack",
    featuresName: [
      "Unlimited Content Words",
      "500 Images prompts",
      "GPT-4 Integration",
      "250 Chats Prompts",
      "Voice Over(200 words per attempt)",
      "All Tools Access",
    ],
    features: ["Unlimited", "500", "Yes", "250", "(200 words / prompt)", "All"],
    duration: "1 Month",
    link: "https://buy.stripe.com/cN24jHgQ96RxahaaET",
  },
  {
    id: 2,
    icon: BsSlack,
    packagehint: "Best one",
    package: "Premium Pack",
    price: "19.99",
    featuresName: [
      "Unlimited Content Words",
      "Unlimited Images prompts",
      "GPT-4 Integration",
      "Unlimited Chats Prompts",
      "Voice Over(Unlimited words)",
      "All Tools Access",
    ],
    features: [
      "Unlimited",
      "Unlimited ",
      "Yes",
      "Unlimited ",
      "(Unlimited words)",
      "All",
    ],
    duration: "1 Month",
    link: "https://buy.stripe.com/cN24jHczT6Rx2OIfZe",
  },
];

export const packagesData = [
  // {
  //   planId: 0,
  //   package: "Basic Pack",
  //   words: 2000,
  //   chats: 10,
  //   images:0,
  // },
  {
    planId: 1,
    package: "Standard Pack",
    words: 15000,
    chats: 250,
    images: 500,
  },
  {
    planId: 2,
    package: "Premium Pack",
    words: 200000,
    chats: Infinity,
    images: Infinity,
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
    title: "Image Generator",
    desc: "Effortlessly transform words into captivating visuals with our advanced AI tool.",
    icon: imagegen,
  },
  {
    id: 2,
    title: "Social Ads",
    desc: "Transform social ads with AI. Craft stunning posts effortlessly in just a few clicks!",
    icon: Feature2,
  },
  {
    id: 3,
    title: "Youtube Content",
    desc: "Craft comprehensive content for you Youtube Channel effortlessly with our AI. Build engaging content.",
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
    title: "Voice Generator ",
    desc: "Transform your words into captivating AI speech with our innovative voice generator. ",
    icon: voicegen,
  },
   {
    id: 6,
    title: "Digital Marketing ",
    desc: "Boost your marketing with AI-generated content, crafting captivating messages for effortless conversion.",
    icon: Feature5,
  },
  {
    id: 7,
    title: "Content Rewrite",
    desc: "Effortlessly revamp your content and rewriting text with our AI tool.",
    icon: Feature6,
  },
   {
    id: 8,
    title: "Speech Generator",
    desc: "Unleash the power of speech with your voice, effortlessly converting voice to captivating text with AI.",
    icon: speechgen,
  },
  {
    id: 9,
    title: "Course Builder",
    desc: "Craft comprehensive courses effortlessly with our AI. Build engaging courses.",
    icon: Feature7,
  },
  {
    id: 10,
    title: "Content Summary ",
    desc: "Summarize content effortlessly with our AI to simplify complex material.",
    icon: Feature8,
  },
  {
    id: 11,
    title: "Website Content ",
    desc: "Craft your website effortlessly! Our AI generates compelling content for sites.",
    icon: Feature9,
  },
  {
    id: 12,
    title: "Content Grammar",
    desc: "Perfect your content and enhance grammar flawlessly with our AI tool.",
    icon: Feature10,
  },
];
export const RoadmapData = [
  {
    Question: "Q1",
    heading: "Algorithmic Enhancement",
    description:
      "We're committed to delivering top-notch services by perpetually refining AI algorithms, guaranteeing superior content and image generation with improved quality, coherence, and diversity.",
  },
  {
    Question: "Q2",
    heading: "Personalized Content Delivery",
    description:
      "Tailor content based on user preferences and behavior, offering a unique and engaging experience for every visitor.",
  },
  {
    Question: "Q3",
    heading: "Quality Control Measures",
    description:
      "Implement stringent checks and human-in-the-loop validation processes to ensure high-quality, accurate content output.",
  },
  {
    Question: "Q4",
    heading: "Multimedia Expansion",
    description:
      "Diversifying our offerings, we&apos;re expanding content generation to include images, videos, audio, and interactive formats, aiming to elevate user engagement across various multimedia channels.",
  },
  {
    Question: "Q5",
    heading: "Ethical Compliance Frameworks",
    description:
      "Prioritize adherence to ethical and legal standards, ensuring generated content aligns with copyright laws and ethical guidelines.",
  },
  {
    Question: "Q6",
    heading: "Community-Centric Iteration",
    description:
      "Promote engagement from users to continually enhance content creation, nurturing a cycle of community-driven improvement through iterative refinements.",
  },
  {
    Question: "Q7",
    heading: "AI-Driven Ethics",
    description:
      "Embed ethical considerations into AI models, safeguarding against the creation of misleading or harmful content and respecting user privacy",
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
    title: "Social Content",
    link: "/ai-social-media",
  },
  {
    title: "Blog Content",
    link: "/ai-blog-generator",
  },
  {
    title: "Website Content",
    link: "/website-content-generator",
  },
  {
    title: "Marketing Content",
    link: "/ai-marketing-generator",
  },
  {
    title: "Image Generator",
    link: "/ai-image-generator",
  },
  {
    title: "Voice Generator",
    link: "/ai-voice-generator",
  },
  {
    title: "Text Generator",
    link: "/speech-content-generator",
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
  {
    id: 4,
    icon: MdOutlinePayment,
    title: "Payment History",
    link: "/user/payment-history",
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
  link: string;
  desc: string;
  date: string;
}

export interface ImageProps {
  id: number;
  img: string;
}

export const images: ImageProps[] = [
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

export const nfts: ImageProps[] = [
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

export const slider: ImageProps[] = [
  {
    id: 1,
    img: slider_5,
  },
  {
    id: 2,
    img: image_slide_2,
  },
  {
    id: 3,
    img: nft_slide_3,
  },
  {
    id: 4,
    img: slider_3,
  },
  {
    id: 5,
    img: nft_slide_2,
  },
  {
    id: 6,
    img: image_slide_3,
  },
  {
    id: 7,
    img: slider_1,
  },
  {
    id: 8,
    img: slider_2,
  },
  {
    id: 9,
    img: nft_slide_1,
  },
  {
    id: 10,
    img: slider_4,
  },
  {
    id: 11,
    img: image_slide_1,
  },
  {
    id: 12,
    img: slider_6,
  },
  {
    id: 13,
    img: slider_7,
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
  // {
  //   icon: FaComment,
  //   title: "Chat",
  //   description: "AI Chat Tool",
  //   bgcolor: "#e58409",
  //   color: "#e2bf93",
  // },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
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
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
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
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
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
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
  },
];

export const MoretoolsVoice: MoretoolsProps[] = [
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
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  // {
  //   icon: GiSoundWaves,
  //   title: "Voice generator",
  //   description: "AI Voice generator",
  //   bgcolor: "#e17be8",
  //   color: "#f545f7",
  // },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
  },
];

export const MoretoolsSpeechtext: MoretoolsProps[] = [
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
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  // {
  //   icon: MdVoiceChat,
  //   title: "Speech to Text",
  //   description: "Speech content generator",
  //   bgcolor: "#ff8a65",
  //   color: "#ff5722",
  // },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
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
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
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
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
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
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
  },
];

export const MoretoolsImageCaption: MoretoolsProps[] = [
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
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },  
  // {
  //   icon: TbTextCaption,
  //   title: "Image Caption Generator",
  //   description: "Image Caption Generator",
  //   bgcolor: "#3b9409",
  //   color: "#a5dc86",
  // },
  {
    icon: FaYoutube,
    title: "Youtube Content Generator",
    description: "Youtube Content Generator",
    bgcolor: "#ff0000",
    color: "#ffffff",
  },
];


export const MoretoolsYoutubeContent: MoretoolsProps[] = [
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
  {
    icon: FaComment,
    title: "Chat",
    description: "AI Chat Tool",
    bgcolor: "#e58409",
    color: "#e2bf93",
  },
  {
    icon: GiSoundWaves,
    title: "Voice generator",
    description: "AI Voice generator",
    bgcolor: "#e17be8",
    color: "#f545f7",
  },
  {
    icon: MdVoiceChat,
    title: "Speech to Text",
    description: "Speech text generator",
    bgcolor: "#ff8a65",
    color: "#ff5722",
  },  
  {
    icon: TbTextCaption,
    title: "Image Caption Generator",
    description: "Image Caption Generator",
    bgcolor: "#3b9409",
    color: "#a5dc86",
  },
  // {
  //   icon: FaYoutube,
  //   title: "Youtube Content Generator",
  //   description: "Youtube Content Generator",
  //   bgcolor: "#ff0000",
  //   color: "#ffffff",
  // },
];


export const dataYoutube: dataProps[] = [
  {
    icon: FaYoutube,
    title: "Content Generator",
    description: "Generate title, description, keywords and tags based on your youtube video title.",
  },
  {
    icon: BsArrowsExpand,
    title: "Video Summarizer",
    description:"Summarize any youtube video and experience full video within a second.",
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
      "Access Intelliwriter AI Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
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
      "Access Intelliwriter AI Chat Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
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
      "Access Intelliwriter AI Course Builder: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
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
      "Access Intelliwriter AI Image Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
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
      "Access Intelliwriter AI Social media Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard Click on Social Media",
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
      "Access Intelliwriter AI website Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: websitestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Website content Generator, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your ideas transform into art.",
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
      "Access Intelliwriter AI Marketing tool: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: marketingstep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Marketing tool , you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch the transformation of your idea.",
    image: marketingstep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: marketingstep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your content is ready.",
    image: marketingstep4,
  },
];

export const stepsVoice: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Voice generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: voicestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Voice generator , you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch the transformation of your words into voice.",
    image: voicestep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: voicestep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your AI voice is ready.",
    image: voicestep4,
  },
];

export const stepsSpeechText: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter AI Speech Text Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: SpeechTextstep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the AI Speech text generator , you'll find a Voice recorder and option to upload any speech file and then submit eagerly awaiting your inspiration. Guide the AI with your speech and watch the transformation of your speech into text.",
    image: SpeechTextstep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: SpeechTextstep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your AI Speech text is ready.",
    image: SpeechTextstep4,
  },
];

//Image Caption Generator
export const stepsImageCaption: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter Image Caption Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: Captionstep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the Image Caption Generator, you'll find a dropdown to select caption tone, blank for additional Information and a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your image transform into caption.",
    image: Captionstep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: Captionstep2,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your image caption is ready.",
    image: Captionstep2,
  },
];

//Youtube Content Generator
export const stepsYoutubeContent: Steps[] = [
  {
    id: 1,
    step: "Step#1",
    detail:
      "Access Intelliwriter Youtube Content Generator: Open your preferred web browser and navigate to the Intelliwriter.io website. Login and from the user dashboard choose what you want to create.",
    image: youtubestep1,
  },
  {
    id: 2,
    step: "Step#2",
    detail:
      "Enter Prompt to Search: Within the Youtube Content Generator, you'll find a blank canvas eagerly awaiting your inspiration. Guide the AI with your words and watch your title transform into youtube content.",
    image: youtubestep2,
  },
  {
    id: 3,
    step: "Step#3",
    detail:
      "Wait For the Response: Creativity takes time, even for AI. Sit back, relax, and let the magic unfold.",
    image: youtubestep3,
  },
  {
    id: 4,
    step: "Step#4",
    detail: "Get ready to be amazed – your Youtube content is ready.",
    image: youtubestep4,
  },
];



export interface BlogPostProps {
  id: number;
  title: string;
  link: string;
  image: string;
  desc: string;
  date: string;
  tags: string;
}

export const blogpost: BlogPostProps[] = [
  {
    id: 1,
    image: blogCardImage1,
    title: "Intelliwriter is the Present of AI",
    link: "/blogs/presence-of-ai",
    desc: "<h1>The Presence of Artificial Intelligence</h1><p>Artificial Intelligence (AI) has become ubiquitous in today's world, influencing various aspects of our lives. From virtual assistants like Siri and Alexa to advanced algorithms powering recommendation systems, AI is revolutionizing industries and reshaping how we interact with technology.</p><h2>Impact on Society</h2><p>One of the most significant impacts of AI is its effect on society. With AI-powered automation, tasks that were once labor-intensive are now performed efficiently and accurately, leading to increased productivity and cost savings for businesses.</p><h2>Applications in Healthcare</h2><p>AI is making strides in healthcare by enabling early disease detection, personalized treatment plans, and predictive analytics. With AI algorithms analyzing vast amounts of medical data, doctors can make more informed decisions and provide better patient care.</p><h2>Ethical Considerations</h2><p>Despite its benefits, AI raises ethical concerns regarding privacy, bias, and job displacement. As AI systems become more autonomous, ensuring transparency and accountability becomes crucial to mitigate potential risks and ensure fair treatment for all.</p><h2>The Future of AI</h2><p>The future of AI holds immense potential. From advancements in natural language processing to breakthroughs in machine learning algorithms, the possibilities are endless. As AI continues to evolve, it's essential to prioritize ethical development and responsible use to create a future where AI benefits society as a whole.</p><h2>Conclusion</h2><p>In conclusion, the presence of AI is transforming the way we live, work, and interact with the world around us. By harnessing the power of AI responsibly, we can unlock its full potential to solve complex problems, improve decision-making, and create a brighter future for generations to come.</p><h2>Benefits of AI:</h2><ul><li>Increased efficiency and productivity</li><li>Improved decision-making</li><li>Enhanced customer experiences</li><li>Cost savings</li><li>New job opportunities</li></ul>",
    date: "Thu, 08 Feb 2024",
    tags: "",
  },
  {
    id: 2,
    title: "Intelliwriter providing APIs for developers",
    image: blogCardImage2,
    link: "/blogs/intelliwriter-apis",
    desc: "<h1>Intelliwriter Providing APIs for Developers</h1><p>Intelliwriter, the leading AI-powered writing platform, is now offering APIs for developers, enabling seamless integration of advanced language generation capabilities into various applications and platforms.</p><h2>Benefits of Intelliwriter APIs</h2><ul><li><strong>Enhanced Content Generation:</strong> With Intelliwriter APIs, developers can access cutting-edge language generation models to create engaging and personalized content.</li><li><strong>Streamlined Workflow:</strong> Integrating Intelliwriter APIs streamlines the content creation process, saving time and resources for developers and content creators.</li><li><strong>Customization Options:</strong> Intelliwriter APIs offer extensive customization options, allowing developers to tailor the language generation process to meet specific requirements and use cases.</li><li><strong>Scalability:</strong> Whether building a small-scale application or a large-scale platform, Intelliwriter APIs offer scalability to handle varying levels of demand and workload.</li><li><strong>Developer-Friendly Documentation:</strong> Intelliwriter provides comprehensive documentation and support resources to help developers integrate and utilize the APIs effectively.</li></ul><h2>Getting Started with Intelliwriter APIs</h2><p>Intelliwriter makes it easy for developers to get started with its APIs. Simply sign up for an API key, explore the documentation, and start integrating advanced language generation capabilities into your applications today.</p>",
    date: "Sat, 31 Dec 2023",
    tags: "ai, ai blog posts , ai revolution",
  },
  {
    id: 3,
    image: blogCardImage3,
    title: "Best email Marketing with Intelliwriter",
    link: "/blogs/intelliwriter-email-marketing",
    desc: "ChatGPT (Conversational Generative Pre-trained Transformer) is a newly released open-source conversational AI platform. It has been praised for its ability to generate natural language responses to user inputs, and many have hailed it as the next step in creating more human-like conversations. However, despite its promise, certain limitations still prevent it from being a viable replacement for other conversational AI platforms. Let’s explore these limitations and how they can be addressed.The title and description of the bundle will be displayed to potential buyers, in the same way a regular prompt's title and description is used.The discount is applied to each individual prompt within the bundle.    The following restrictions apply to creating bundles.",
    date: "Thu, 05 Jan 2024",
    tags: "",
  },
  {
    id: 4,
    image: blogCardImage4,
    title: "Ready to go Viral? Start with Intelliwriter Recommended!",
    link: "/blogs/begin-with-intelliwriter",
    desc: "ChatGPT (Conversational Generative Pre-trained Transformer) is a newly released open-source conversational AI platform. It has been praised for its ability to generate natural language responses to user inputs, and many have hailed it as the next step in creating more human-like conversations. However, despite its promise, certain limitations still prevent it from being a viable replacement for other conversational AI platforms. Let’s explore these limitations and how they can be addressed.The title and description of the bundle will be displayed to potential buyers, in the same way a regular prompt's title and description is used.The discount is applied to each individual prompt within the bundle.    The following restrictions apply to creating bundles.",
    date: "Mon, 15 Jan 2024",
    tags: "",
  },
  {
    id: 5,
    title:
      "Intelliwriter providing following features unlimited in premium package",
    image: blogCardImage5,
    link: "/blogs/intelliwriter-premium-package",
    desc: "ChatGPT (Conversational Generative Pre-trained Transformer) is a newly released open-source conversational AI platform. It has been praised for its ability to generate natural language responses to user inputs, and many have hailed it as the next step in creating more human-like conversations. However, despite its promise, certain limitations still prevent it from being a viable replacement for other conversational AI platforms. Let’s explore these limitations and how they can be addressed.The title and description of the bundle will be displayed to potential buyers, in the same way a regular prompt's title and description is used.The discount is applied to each individual prompt within the bundle.    The following restrictions apply to creating bundles:",
    date: "Thu, 01 Dec 2023",
    tags: "",
  },
  {
    id: 6,
    image: blogCardImage6,
    title: "AI Image generation with Intelliwriter",
    link: "/blogs/intelliwriter-image-generator",
    desc: "ChatGPT (Conversational Generative Pre-trained Transformer) is a newly released open-source conversational AI platform. It has been praised for its ability to generate natural language responses to user inputs, and many have hailed it as the next step in creating more human-like conversations. However, despite its promise, certain limitations still prevent it from being a viable replacement for other conversational AI platforms. Let’s explore these limitations and how they can be addressed.The title and description of the bundle will be displayed to potential buyers, in the same way a regular prompt's title and description is used.The discount is applied to each individual prompt within the bundle.    The following restrictions apply to creating bundles:",
    date: "Sat, 20 Jan 2024",
    tags: "",
  },
];

export interface MegaMenuProps {
  id: number;
  icon: IconType;
  title: string;
  link: string;
  desc: string;
  route: string;
}

export const MegaMenu: MegaMenuProps[] = [
  {
    id: 0,
    icon: SiBloglovin,
    title: "Blog Content",
    link: "/user/blog-content",
    route: "/ai-blog-generator",
    desc: "It helps to generate blog content",
  },
  {
    id: 1,
    icon: FaRegShareSquare,
    title: "Social Media",
    link: "/user/social-media",
    route: "/ai-social-media",
    desc: "It helps to generate Social Media content",
  },
  {
    id: 2,
    icon: SiGooglemarketingplatform,
    title: "Marketing",
    link: "/user/marketing",
    route: "/ai-marketing-generator",
    desc: "It helps to generate Marketing content",
  },
  {
    id: 3,
    icon: CgWebsite,
    title: "Website",
    link: "/user/website",
    route: "/website-content-generator",
    desc: "It helps to generate Website content",
  },
  {
    id: 4,
    icon: FaBook,
    title: "Course Builder",
    link: "/user/course-builder",
    route: "/ai-course-builder",
    desc: "It helps to generate Course builder",
  },
  {
    id: 5,
    icon: BiSolidImageAlt,
    title: "AI Image Generator",
    link: "/user/image-generator",
    route: "/ai-image-generator",
    desc: "It helps to generate AI Images",
  },
  {
    id: 6,
    icon: GiSoundWaves,
    title: "AI Voice Generator",
    link: "/user/voice-generator",
    route: "/ai-voice-generator",
    desc: "It helps to convert text into AI Voice",
  },
  {
    id: 7,
    icon: TbTextCaption,
    title: "Image Caption Generator",
    link: "/user/image-caption-generator",
    route: "/image-caption-generator",
    desc: "It helps to generate Caption for Images",
  },
  {
    id: 8,
    icon: MdVoiceChat,
    title: "Speech Content",
    link: "/user/speech-content-generator",
    route: "/speech-content-generator",
    desc: "It helps to convert Voice into Text",
  },
  {
    id: 9,
    icon: FaYoutube,
    title: "Youtube Content",
    link: "/user/youtube-content",
    route: "/youtube-content",
    desc: "It helps to generate Youtube contents",
  },
  {
    id: 10,
    icon: SiChatbot,
    title: "AI Chat",
    link: "/user/chat",
    route: "/ai-chat",
    desc: "It helps to generate AI contents",
  },
];
