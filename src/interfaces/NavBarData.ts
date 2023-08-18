import { ReactNode } from "react";

interface SocialLink {
  label: string;
  icon: ReactNode;
  url: string;
  bgColor: string;
}

export interface SocialLinks extends Array<SocialLink> {}
