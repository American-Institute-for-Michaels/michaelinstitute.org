import type { APIRoute } from 'astro';
import { chapters } from '../../content/chapters';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      $schema: 'https://michaelinstitute.org/api/chapters.schema.json',
      version: '1.0.0',
      institute: 'The American Institute for Michaels',
      revised: '2026-05-09',
      count: chapters.length,
      regions: Array.from(new Set(chapters.map((c) => c.region))),
      countries: Array.from(new Set(chapters.map((c) => c.country))).sort(),
      chapters: chapters.map((c) => ({
        city: c.city,
        country: c.country,
        region: c.region,
        coordinator: c.coordinator,
        chartered: c.chartered,
        cadence: c.cadence,
        active: c.cadence !== 'In abeyance',
      })),
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
