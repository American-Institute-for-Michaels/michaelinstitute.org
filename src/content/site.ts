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
  { href: '/partners', label: 'Partners' },
  { href: '/friends', label: 'Friends' },
];
