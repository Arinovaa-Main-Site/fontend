import { StaticImageData } from "next/image";

export interface TeamMember {
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  experience: string;
  expertise: string[];
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface QuoteType {
  quote: string;
  name: string;
  designation: string;
  image: string | StaticImageData;
}
