import { MouseEventHandler } from "react";
import { IconType } from "react-icons";
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
  icon:IconType;
  price: string | number;
  packagehint:string;
  package: string;
  featuresName: string[];
  features: string[];
  duration: string;
  link?: any;
  }

export type PlanData = {
  plan_id: number;
  icon:IconType;
  price: string;
  packagehint:string;
  package: string;
  currency: string;
  featuresName: string[];
  features: string[] | any;
  duration: string;
  link: string | null;

};

export interface IconPlaceholderProps {
  className?: string;
}
