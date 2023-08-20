import { ReactNode } from "react";

export interface DataItem {
  label: string;
  image: ReactNode;
  url?: string;
  bgColor?: string;
}
