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
import { cn } from './utils';
import { PurchaseTimeline, SearchStage } from './enums';
import type {
  AccordionProps,
  ArticleItemProps,
  BenefitItemProps,
  FeatureCardProps,
  HighlightItemProps,
  OnboardingCardProps,
  OnboardingResult,
  ReviewItemProps,
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

export const REVIEW_ITEMS: Array<ReviewItemProps> = [
  {
    id: 1,
    reviewerName: 'Fabio Prainito',
    starRating: 5,
    timeAgo: '2 months ago',
    comment:
      'I highly recommend Joanne Pang! She has been incredibly helpful throughout the entire process. Professional, patient and always willing to assist, even outside regular working hours. Her dedication and expertise made everything smooth and stress free. Thank you, Joanne!',
  },
  {
    id: 2,
    reviewerName: 'Jennifer Wang',
    starRating: 5,
    timeAgo: '2 months ago',
    comment:
      'Lily Koh is a star! She is very knowledgeable about the home loan stuff. Responds super quick even beyond working hours. Highly recommend if you need a professional home loan expert.',
  },
  {
    id: 3,
    reviewerName: 'soh shan shan',
    starRating: 5,
    timeAgo: '2 months ago',
    comment:
      'Joanne is a professional financial advisor who is fast responding and knowledgeable about the loan enquiry you might have.',
  },
  {
    id: 4,
    reviewerName: 'Choy Meng Poh',
    starRating: 5,
    timeAgo: '3 months ago',
    comment:
      'Outstanding swift action. Everything well planned and executed. Impeccable service. Thank you Sheryl',
  },
  {
    id: 5,
    reviewerName: 'Joanna Ye',
    starRating: 5,
    timeAgo: '3 months ago',
    comment:
      'I appreciate Sheryl with her prompt replies and detailed explanation. Thanks for the great and efficient service!',
  },
  {
    id: 6,
    reviewerName: 'ShuoYu Yuan',
    starRating: 5,
    timeAgo: '3 months ago',
    comment:
      'I strongly recommend Sheryl to anyone in need of home loan. Her professionalism has made a significant difference in our experience to find a best loan package .',
  },
  {
    id: 7,
    reviewerName: 'Koon Min Wong',
    starRating: 5,
    timeAgo: '3 months ago',
    comment:
      'Sheryl is very helpful and made the mortgage process very smooth. Much appreciated!',
  },
  {
    id: 8,
    reviewerName: 'Tianyu Lang',
    starRating: 5,
    timeAgo: '4 months ago',
    comment: 'Excellent service with Agent Sheryl for housing loan application',
  },
  {
    id: 9,
    reviewerName: 'Chen Haoran',
    starRating: 5,
    timeAgo: '4 months ago',
    comment:
      'Was a great experience with Joanne as a mortgage adviser. As a first time buyers, being very helpful and patient.',
  },
];

export const ARTICLE_ITEMS: Array<ArticleItemProps> = [
  {
    id: 1,
    title: 'Will Singapore Interest Rates for Home Loans Go Down in 2025?',
    image:
      'https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/3/2023/11/will-mortgage-rates-in-singapore-come-down-in-2024.jpg',
    type: 'Article',
    date: '3 Feb 2025',
    url: 'https://www.propertyguru.com.sg/property-guides/pgf-rising-interest-rates-post-covid-57668',
  },
  {
    id: 2,
    title:
      'Can I Use CPF to Buy Condo or HDB Flat in Singapore? 4 Reasons Not to',
    image:
      'https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/3/2022/09/tdsr-calculator-how-to-calculate-tdsr.jpeg',
    type: 'Article',
    date: '16 Dec 2024',
    url: 'https://www.propertyguru.com.sg/property-guides/cpf-pay-house-singapore-10391',
  },
  {
    id: 3,
    title:
      '6 Ways to Utilise Your Year-end Bonus Towards Your Home Loan in Singapore',
    image:
      'https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/3/2023/01/how-much-cpf-can-I-use-for-condo-monthly-installment.jpeg',
    type: 'Article',
    date: '3 Dec 2024',
    url: 'https://www.propertyguru.com.sg/property-guides/pgf-bonus-calculator-housing-loan-prepayment-95709',
  },
  {
    id: 4,
    title: 'How do US Fed Interest Rates Impact Mortgage Rates in Singapore?',
    image:
      'https://img.iproperty.com.my/angel/520x300-crop/wp-content/uploads/sites/3/2022/08/propertyguru-finance-benefits.jpg',
    type: 'Article',
    date: '28 Nov 2024',
    url: 'https://www.propertyguru.com.sg/property-guides/pgf-current-fed-interest-rates-95149',
  },
];

export const QUESTION_ITEMS: Array<AccordionProps> = [
  {
    id: 1,
    title: 'What types of loans can PropertyGuru Finance help me with?',
    content:
      'PropertyGuru Finance can help you secure the best in-line home and HDB bank loans. Soon, we will be able to assist you with commercial property loans and overseas property loans as well.',
  },
  {
    id: 2,
    title: 'Why should I choose PropertyGuru Finance instead of a bank?',
    content: (
      <p>
        We partner with all major banks to bring you the best home loan packages
        in Singapore. Why waste time visiting bank branches and making sense of
        home loan packages?
        <br />
        From sharing customised recommendations to processing your home loan
        application, our Mortgage Experts will be with you every step of the
        way.
      </p>
    ),
  },
  {
    id: 3,
    title:
      'Will I be charged for processing a home loan with PropertyGuru Finance?',
    content:
      'No. You can put your mind at ease as our service is free with no hidden charges.',
  },
  {
    id: 4,
    title: 'How does PropertyGuru Finance get compensated?',
    content: (
      <>
        We receive a small referral fee from the bank when you have accepted the
        loan. Our team partners with all major banks, giving you access to the
        lowest interest rates, limited-time bank promotions, and unbiased
        advice.
      </>
    ),
  },
  {
    id: 5,
    title: 'How do I contact a Mortgage Expert?',
    content: (
      <>
        Simply submit an enquiry for a mortgage loan{' '}
        <a
          href="#"
          className={cn(
            'underline',
            'hover:text-[#37474F] active:text-[#263238]'
          )}
        >
          here
        </a>{' '}
        and our Mortgage Expert will call you within 1 business day.
      </>
    ),
  },
  {
    id: 6,
    title: 'What documents do I need to apply for a home loan?',
    content: (
      <>
        <div>To get started, you&apos;ll need:</div>
        <ul>
          <li>- A copy of your NRIC/Passport</li>
          <li>- Latest 3 month payslips</li>
          <li>
            - Latest Income Tax Notice Assessment (latest two years if
            you&apos;re self-employed)
          </li>
          <li>- Your CPF contribution history</li>
          <li>
            - Your{' '}
            <abbr title="Option to Purchase" className="no-underline">
              OTP
            </abbr>{' '}
            or Sale and Purchase Agreement
          </li>
        </ul>
        <div>
          We&apos;ll walk you through the rest when you contact us{' '}
          <a
            href="#"
            className={cn(
              'underline',
              'hover:text-[#37474F] active:text-[#263238]'
            )}
          >
            here
          </a>
          .
        </div>
      </>
    ),
  },
];
