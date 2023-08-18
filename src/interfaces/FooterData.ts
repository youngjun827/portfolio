import { ReactNode } from "react";

interface FooterItem {
  link: string;
  icon: ReactNode;
  label: string;
}

export interface FooterData extends Array<FooterItem> {}
