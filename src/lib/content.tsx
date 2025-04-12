import dbsLogo from '@/static/logos/banks/dbs.svg?inline';
import ocbcLogo from '@/static/logos/banks/ocbc.svg?inline';
import citibankLogo from '@/static/logos/banks/citibank.svg?inline';
import uobLogo from '@/static/logos/banks/uob.svg?inline';
import scbLogo from '@/static/logos/banks/standard-chartered-bank.svg?inline';
import maybankLogo from '@/static/logos/banks/maybank.svg?inline';
import cimbLogo from '@/static/logos/banks/cimb.svg?inline';
import rhbLogo from '@/static/logos/banks/rhb-bank.svg?inline';
import bocLogo from '@/static/logos/banks/bank-of-china.svg?inline';
import sbiLogo from '@/static/logos/banks/state-bank-of-india.svg?inline';
import spfLogo from '@/static/logos/banks/singapura-finance.svg?inline';
import hsbcLogo from '@/static/logos/banks/hsbc.svg?inline';
import featureQualifyImage from '@/static/images/feature-qualify.png';
import featureQualify2xImage from '@/static/images/feature-qualify@2x.png';
import featureMatchImage from '@/static/images/feature-match.png';
import featureMatch2xImage from '@/static/images/feature-match@2x.png';
import featureApplyImage from '@/static/images/feature-apply.png';
import featureApply2xImage from '@/static/images/feature-apply@2x.png';
import verifiedIcon from '@/static/icons/badge-verified.svg?inline';
import usersIcon from '@/static/icons/circle-users.svg?inline';
import calendarIcon from '@/static/icons/circle-calendar-checked.svg?inline';
import { PurchaseTimeline, SearchStage } from './enums';
import type {
  BenefitItemProps,
  FeatureCardProps,
  HighlightItemProps,
  OnboardingCardProps,
  OnboardingResult,
} from './types';

export const BENEFIT_ITEMS: Array<BenefitItemProps> = [
  {
    title: 'Check your loan eligibility',
    body: 'Our secure online tool streamlines bank rules into a few easy steps and estimates your potential loan amount.',
  },
  {
    title: 'Get matched to the right loan',
    body: 'Our team of dedicated experts will work with you on the best way to finance your dream home.',
  },
  {
    title: 'Apply online, anywhere, anytime',
    body: 'Loan applications, reimagined. Our online process is smooth and paper-free. Just drag, drop, and go!',
  },
];

export const BANK_ITEMS = [
  {
    id: 1,
    displayName: 'DBS',
    logo: dbsLogo,
  },
  {
    id: 2,
    displayName: 'OCBC',
    logo: ocbcLogo,
  },
  {
    id: 3,
    displayName: 'Citibank',
    logo: citibankLogo,
  },
  {
    id: 4,
    displayName: 'UOB',
    logo: uobLogo,
  },
  {
    id: 5,
    displayName: 'Standard Chartered Bank',
    logo: scbLogo,
  },
  {
    id: 6,
    displayName: 'Maybank',
    logo: maybankLogo,
  },
  {
    id: 7,
    displayName: 'RHB',
    logo: rhbLogo,
  },
  {
    id: 8,
    displayName: 'CIMB',
    logo: cimbLogo,
  },
  {
    id: 9,
    displayName: 'Bank of China',
    logo: bocLogo,
  },
  {
    id: 10,
    displayName: 'State Bank of India',
    logo: sbiLogo,
  },
  {
    id: 11,
    displayName: 'Singapura Finance',
    logo: spfLogo,
  },
  {
    id: 12,
    displayName: 'HSBC',
    logo: hsbcLogo,
  },
];

export const SEARCH_STAGE_QUESTION: OnboardingCardProps = {
  id: 'searchStage',
  title: (
    <>
      Where are you in your home <br className="lg:hidden" />
      ownership journey?
    </>
  ),
  options: [
    {
      label: 'Just researching',
      value: SearchStage.SEARCHING,
    },
    {
      label: 'Actively viewing properties',
      value: SearchStage.VIEWING,
    },
    {
      label: 'Making offers',
      value: SearchStage.SHORTLISTED,
    },
    {
      label: 'Looking to refinance',
      value: SearchStage.SELL_THEN_BUY,
    },
  ],
};

export const PURCHASE_TIMELINE_QUESTION: OnboardingCardProps = {
  id: 'purchaseTimeline',
  title: (
    <>
      When are you planning to purchase <br className="lg:hidden" />
      your home?
    </>
  ),
  options: [
    {
      label: 'In less than 3 months',
      value: PurchaseTimeline.ZERO_TO_THREE,
    },
    {
      label: 'In 4 - 6 months',
      value: PurchaseTimeline.FOUR_TO_SIX,
    },
    {
      label: 'In 7+ months',
      value: PurchaseTimeline.SEVEN_PLUS,
    },
    {
      label: 'Not sure',
      value: PurchaseTimeline.NOT_SURE,
    },
  ],
};

export const AFFORDABILITY_RESULT: OnboardingResult = {
  title: 'Decide how much you can comfortably spend on a home.',
  linkText: 'Calculate Your Affordability',
};

export const PRE_QUAL_RESULT: OnboardingResult = {
  title: 'Know the amount of home loan you are qualified for.',
  linkText: 'Get Pre-Qualified',
};

export const LOAN_COMPARISON_RESULT: OnboardingResult = {
  title: 'Explore your financing options and the latest loan rates.',
  linkText: 'Find Loans',
};

export const REFINANCE_RESULT: OnboardingResult = {
  title: 'Monitor and track your home loan.',
  linkText: 'Estimate Your Savings',
};

export const FEATURE_ITEMS: Array<FeatureCardProps> = [
  {
    id: 'qualify',
    number: 1,
    title: 'Qualify',
    description:
      'Quick, digital, bank-backed checks for fast, loan qualification.',
    linkText: 'Try Now',
    image: {
      src: featureQualifyImage,
      srcSet: `${featureQualify2xImage} 2x, ${featureQualifyImage} 1x`,
      alt: 'Your Pre-Qualification report is ready',
    },
  },
  {
    id: 'match',
    number: 2,
    title: 'Match',
    description:
      'Compare the latest rates from all banks and land on your ideal loan.',
    linkText: 'Check Rates',
    image: {
      src: featureMatchImage,
      srcSet: `${featureMatch2xImage} 2x, ${featureMatchImage} 1x`,
      alt: 'We recommend these packages with the lowest rates for you',
    },
  },
  {
    id: 'apply',
    number: 3,
    title: 'Apply',
    description: 'Streamlined and guided online application for all banks.',
    linkText: 'Apply Now',
    image: {
      src: featureApplyImage,
      srcSet: `${featureApply2xImage} 2x, ${featureApplyImage} 1x`,
      alt: 'Get started on your documents upload',
    },
  },
];

export const HIGHLIGHT_ITEMS: Array<HighlightItemProps> = [
  {
    title: 'S$ 6+ Billion',
    subtitle: 'Successful Loans',
    icon: {
      src: verifiedIcon,
      alt: 'Verified',
    },
  },
  {
    title: '25 Seasoned',
    subtitle: 'Mortgage Experts',
    icon: {
      src: usersIcon,
      alt: 'Users',
    },
  },
  {
    title: '3 Days',
    subtitle: 'Average Loan Approval',
    icon: {
      src: calendarIcon,
      alt: 'Calendar',
    },
  },
];
