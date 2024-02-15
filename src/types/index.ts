import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  className?: string;
  width?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  disbaled?: boolean  ;
}

export interface PricingData {
  id: number;
  plan_id?: number;
  price: string | number;
  package: string;
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
