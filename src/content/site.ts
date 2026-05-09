export const site = {
  title: 'The American Institute for Michaels',
  short: 'AIM',
  tagline: 'Connecting the World Through Michaels',
  motto: 'Diversify Uniformity',
  description:
    'A community dedicated to individuals who share the given name Michael — fostering connection, innovation, and societal advancement.',
  copyrightStart: 2020,
  twitter: {
    handle: '@MichaeInstitute',
    url: 'https://twitter.com/MichaeInstitute',
  },
  contactEmail: 'hello@michaelinstitute.org',
} as const;

export const nav: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/chapters', label: 'Chapters' },
  { href: '/fellowship', label: 'Fellowship' },
  { href: '/friends', label: 'Friends' },
  { href: '/donate', label: 'Donate' },
];

export interface FooterLink { href: string; label: string; }
export interface FooterColumn { heading: string; links: ReadonlyArray<FooterLink>; }

export const footerColumns: ReadonlyArray<FooterColumn> = [
  {
    heading: 'The Institute',
    links: [
      { href: '/about', label: 'About' },
      { href: '/bylaws', label: 'Bylaws' },
      { href: '/annual-report', label: 'Annual Report' },
      { href: '/etymology', label: 'Etymology' },
      { href: '/wordmark', label: 'Wordmark Standards' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { href: '/fellowship', label: 'Fellowship' },
      { href: '/grants', label: 'Grants' },
      { href: '/chapters', label: 'Chapters' },
      { href: '/michael-of-the-month', label: 'Michael of the Month' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { href: '/friends', label: 'Friends' },
      { href: '/notable-michaels', label: 'Notable Michaels' },
      { href: '/honorary-michaels', label: 'Honorary Michaels' },
      { href: '/partners', label: 'Partners' },
      { href: '/press', label: 'Press' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/donate', label: 'Support the Institute' },
      { href: '/api', label: 'Public API' },
      { href: 'mailto:hello@michaelinstitute.org', label: 'Contact' },
    ],
  },
];
