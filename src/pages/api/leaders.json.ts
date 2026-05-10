import type { APIRoute } from 'astro';
import { leaders } from '../../content/leaders';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      $schema: 'https://michaelinstitute.org/api/leaders.schema.json',
      version: '1.0.0',
      institute: 'The American Institute for Michaels',
      revised: '2026-05-09',
      count: leaders.length,
      leaders: leaders.map((l) => ({
        name: l.name,
        role: l.role,
        bio: l.bio,
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
