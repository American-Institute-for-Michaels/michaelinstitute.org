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
      { href: '/foundation-stone', label: 'The Founding' },
      { href: '/bylaws', label: 'Bylaws' },
      { href: '/precedents', label: 'Resolutions' },
      { href: '/etymology', label: 'Etymology' },
      { href: '/seal', label: 'The Seal' },
      { href: '/wordmark', label: 'Wordmark Standards' },
      { href: '/style-guide', label: 'Style Guide' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/colophon', label: 'Colophon' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { href: '/fellowship', label: 'Fellowship' },
      { href: '/grants', label: 'Grants' },
      { href: '/chapters', label: 'Chapters' },
      { href: '/calendar', label: 'Calendar' },
      { href: '/michael-of-the-month', label: 'Michael of the Month' },
      { href: '/awards', label: 'Awards' },
      { href: '/library', label: 'The Library' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { href: '/friends', label: 'Friends' },
      { href: '/notable-michaels', label: 'Notable Michaels' },
      { href: '/honorary-michaels', label: 'Honorary Michaels' },
      { href: '/in-memoriam', label: 'In Memoriam' },
      { href: '/partners', label: 'Partners' },
      { href: '/press', label: 'Press' },
      { href: '/the-mike-test', label: 'The Mike Test' },
      { href: '/oath', label: 'The Oath' },
    ],
  },
  {
    heading: 'Office',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/donate', label: 'Support the Institute' },
      { href: '/annual-report', label: 'Annual Report' },
      { href: '/presidents-letters', label: 'President\'s Letters' },
      { href: '/dispatches', label: 'Quarterly Dispatches' },
      { href: '/api', label: 'Public API' },
      { href: '/c-and-d', label: 'Cease & Desist' },
    ],
  },
];
