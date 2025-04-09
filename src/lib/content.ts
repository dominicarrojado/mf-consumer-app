import type { BenefitItemProps } from './types';
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
