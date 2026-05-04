import power from '../assets/portraits/power.jpg';
import doyle from '../assets/portraits/doyle.png';
import marcowitz from '../assets/portraits/marcowitz.jpg';
import wilson from '../assets/portraits/wilson.jpg';
import wan from '../assets/portraits/wan.jpg';
import jameson from '../assets/portraits/jameson.jpg';
import type { ImageMetadata } from 'astro';

export interface Leader {
  name: string;
  role: string;
  bio: string;
  portrait: ImageMetadata;
}

export const leaders: ReadonlyArray<Leader> = [
  {
    name: 'Michael Power',
    role: 'Founder & Chief Globalization Strategist',
    bio: 'Originator of Michael-binding ethics and architect of AIM\'s global key-value index. Power\'s theoretical work underpins much of the Institute\'s present cross-chapter coordination model.',
    portrait: power,
  },
  {
    name: 'Michael Doyle',
    role: 'Founder & President',
    bio: 'Departed Saint Michael\'s College to formalize connections among Michaels worldwide. Oversees Institute-wide strategy and the founding chapters.',
    portrait: doyle,
  },
  {
    name: 'Michael Marcowitz',
    role: 'Director of Finance',
    bio: 'A 25-year Silicon Valley venture capitalist and the author of nearly a dozen investment books. Stewards the Institute\'s endowment and member-facing financial programs.',
    portrait: marcowitz,
  },
  {
    name: 'Michael Wilson',
    role: 'Director of Local Engagement',
    bio: 'A native San Diegan focused on elevating local awareness of issues affecting Michaels. Founder of the Early Adulthood Michael Outreach (EAMO) initiative.',
    portrait: wilson,
  },
  {
    name: 'Michael Wan',
    role: 'Human Resources Director',
    bio: 'Psychology graduate of the University of Pittsburgh; MBA, University of Virginia. Leads the Institute\'s people operations across all chapters.',
    portrait: wan,
  },
  {
    name: 'Michael Jameson',
    role: 'General Secretary',
    bio: 'A former commercial real estate professional and seasoned operator in micro-crypto-currency exchange markets. Manages governance and minutes.',
    portrait: jameson,
  },
];
