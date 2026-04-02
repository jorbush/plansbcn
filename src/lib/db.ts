import { createClient } from '@libsql/client';
import type { Plan } from '../data/plans';

function getClient() {
  const url = import.meta.env.TURSO_DB_URL;
  const authToken = import.meta.env.TURSO_DB_AUTH_TOKEN;

  if (!url) throw new Error('Missing TURSO_DB_URL environment variable');

  return createClient({ url, authToken });
}

/** Row shape as returned by the database. */
interface PlanRow {
  id: string;
  title_ca: string;
  title_es: string;
  title_en: string;
  desc_ca: string;
  desc_es: string;
  desc_en: string;
  date: string;
  location: string;
  url: string;
  source: string;
  author: string;
  upvotes: number;
  created_at: string;
  updated_at: string;
}

/** Returns the bare hostname without leading "www.", or empty string on failure. */
function extractDomain(rawUrl: string): string {
  try {
    return new URL(rawUrl).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

/**
 * Returns true if the event URL belongs to the same domain we scraped.
 * A mismatch signals an ad or sponsored link pointing to an external site.
 */
function isNotAd(row: PlanRow): boolean {
  const urlDomain = extractDomain(row.url);
  return urlDomain === row.source || urlDomain.endsWith('.' + row.source);
}

function rowToPlan(row: PlanRow): Plan {
  const r = row;
  return {
    id: r.id,
    date: r.date,
    location: r.location,
    url: r.url,
    source: r.source,
    author: r.author,
    upvotes: r.upvotes,
    title: { ca: r.title_ca, es: r.title_es, en: r.title_en },
    description: { ca: r.desc_ca, es: r.desc_es, en: r.desc_en },
  };
}

/**
 * Fetch all plans from Turso, ordered by creation date descending.
 * Ads (rows whose URL points to a different domain than the scraped source) are excluded.
 * Falls back to an empty array if the DB is unreachable (e.g. missing env vars in local dev).
 */
export async function getPlans(): Promise<Plan[]> {
  try {
    const client = getClient();
    const result = await client.execute(
      'SELECT * FROM plans ORDER BY created_at DESC'
    );
    return result.rows
      .map((r) => r as unknown as PlanRow)
      .filter(isNotAd)
      .map(rowToPlan);
  } catch (err) {
    console.warn('[db] Could not fetch plans from Turso:', err);
    return [];
  }
}
