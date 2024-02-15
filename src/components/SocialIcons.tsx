import React from "react";
import { SocialIcon } from "react-social-icons";

interface SocialIconsProps {
  socialLinks: string[];
  iconColor?: string;
  bgColor?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  socialLinks,
  iconColor = "#ffffff",
  bgColor = "transparent",
}) => {
  return (
    <ul className="flex gap-2 p-1">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <SocialIcon
            url={link}
            className="w-3 h-3 bg-slate-800 rounded-xl cursor-pointer"
            target="_blank"
            style={{ backgroundColor: bgColor, fill: iconColor }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
