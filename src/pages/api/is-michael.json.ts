import type { APIRoute } from 'astro';

const acceptedVariants = [
  'Michael', 'Mike', 'Mikey', 'Mickey', 'Mick',
  'Mikhail', 'Misha', 'Mishka',
  'Michał', 'Michal',
  'Mihail', 'Mihai', 'Mihály', 'Miska',
  'Mikael', 'Mikkel', 'Mika', 'Miika',
  'Mícheál', 'Mihangel',
  'Miguel', 'Miguelito', 'Miquel',
  'Michele', 'Michelle',
  'Michel', 'Michelet',
  'Mikhael', 'Mikha\'el', 'Mikha', 'Maikeru',
] as const;

const honorary = [
  'Mick', 'Quincy', 'Maya', 'Nelson', 'Dolly', 'David', 'Tom', 'Beyoncé', 'Anthony', 'Levar',
] as const;

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      $schema: 'https://michaelinstitute.org/api/is-michael.schema.json',
      version: '1.0.0',
      institute: 'The American Institute for Michaels',
      jurisdiction: 'global',
      authoritative: true,
      revised: '2026-05-09',
      accepted: acceptedVariants,
      honorary,
      notes: {
        usage:
          'Compare a candidate name (case-insensitive, after Unicode normalization) against `accepted` for full membership eligibility, or against `honorary` for honorary recognition. Names appearing in neither array are not, by Institute standards, Michaels.',
        disclaimer:
          'This endpoint is provided for reference only. The Institute reserves the sole right to grant, withhold, or revoke membership status, and the Standing Committee on Notability shall in all cases supersede any automated determination.',
      },
    }, null, 2),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
};
