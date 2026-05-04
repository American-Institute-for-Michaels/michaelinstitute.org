import painePals from '../assets/partners/paine-pals.png';
import ashleyAlliance from '../assets/partners/ashley-alliance.png';
import leagueOfLauras from '../assets/partners/league-of-lauras.png';
import type { ImageMetadata } from 'astro';

export interface Partner {
  org: string;
  person: string;
  role: string;
  logo: ImageMetadata;
}

export const partners: ReadonlyArray<Partner> = [
  { org: 'Paine Pals', person: 'Paine Harris', role: 'Founder & CEO', logo: painePals },
  { org: 'Ashley Alliance', person: 'Ashley Ahrens', role: 'Founder & Managing Partner', logo: ashleyAlliance },
  { org: 'League of Lauras', person: 'Laura Power', role: 'Directeur Général', logo: leagueOfLauras },
];

export const friends: ReadonlyArray<string> = ['Max Drew', 'Eva'];

export const testimonial = {
  quote:
    "Finding an inclusive atmosphere with other like-minded and forenamed individuals has been a tremendous benefit to sharing and remedying issues I face as a small business owner. Without A.I.M, I would have been at a significant disadvantage in my industry.",
  attribution: 'Mike Spurlock',
  role: 'Carpet Cleaning & Accident Cleanup Expert',
} as const;
