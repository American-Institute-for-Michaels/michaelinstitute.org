export interface Partner {
  org: string;
  person: string;
  role: string;
}

export const partners: ReadonlyArray<Partner> = [
  { org: 'Paine Pals', person: 'Paine Harris', role: 'Founder & CEO' },
  { org: 'Ashley Alliance', person: 'Ashley Ahrens', role: 'Founder & Managing Partner' },
  { org: 'League of Lauras', person: 'Laura Power', role: 'Directeur Général' },
];

export const friends: ReadonlyArray<string> = ['Max Drew', 'Eva'];

export const testimonial = {
  quote:
    "Finding an inclusive atmosphere with other like-minded and forenamed individuals has been a tremendous benefit to sharing and remedying issues I face as a small business owner. Without A.I.M, I would have been at a significant disadvantage in my industry.",
  attribution: 'Mike Spurlock',
  role: 'Carpet Cleaning & Accident Cleanup Expert',
} as const;
