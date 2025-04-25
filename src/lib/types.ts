import type { HTMLProps, ReactNode } from 'react';

export interface BenefitItemProps {
  title: string;
  body: string;
}

export interface Bank {
  id: number;
  displayName: string;
  logo: string;
}

export interface OnboardingOption {
  label: string;
  value: string;
}

export interface OnboardingCardProps {
  id?: string;
  title: ReactNode;
  options?: Array<OnboardingOption>;
  value?: string;
  children?: ReactNode;
  onChange?: (value: string) => void;
}

export interface OnboardingResult {
  title: string;
  linkText: string;
}

export interface FeatureCardProps {
  id: string;
  number: number;
  title: string;
  description: string;
  linkText: string;
  image: HTMLProps<HTMLImageElement>;
}

export interface HighlightItemProps {
  icon: HTMLProps<HTMLImageElement>;
  title: string;
  subtitle: string;
}

export interface ReviewItemProps {
  id: number;
  reviewerName: string;
  starRating: number;
  timeAgo: string;
  comment: string;
}

export interface ArticleItemProps {
  id: number;
  title: string;
  image: string;
  type: string;
  date: string;
  url: string;
}
