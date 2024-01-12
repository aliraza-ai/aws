import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface PricingData {
  id: number;
  plan_id?: number;
  price: string | number;
  package: string;
  currency: string;
  features: string[];
  duration: string;
  link?: string;
}

export type PlanData = {
  plan_id: number;
  price: string;
  package: string;
  currency: string;
  features: string[] | any;
  duration: string;
  link: string | null;
};

export interface IconPlaceholderProps {
  className?: string;
}

