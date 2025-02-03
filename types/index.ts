import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';

export interface AboutItem {
    icon: LucideIcon
    text: string
  }

export interface Post {
    id: string;
    title: string;
    content: string;
  }
  

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
}

export type FormValues = {
  name: string;
  email: string;
  message: string;
};
