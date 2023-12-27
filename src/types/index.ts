import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface PricingData {
  id: number;
  price: string | number;
  currency: string;
  features: string[];
  link?: string;
}

export interface IconPlaceholderProps {
  className?: string;
}
