import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';
import { treatments } from '../lib/treatments';

// /sitemap.xml - treatment pages lib/treatments.ts se apne aap add ho jaate hain
// Koi aur naya page banao toh yahan add kar dena
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/treatments`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...treatments.map((treatment) => ({
      url: `${SITE_URL}/treatments/${treatment.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/about-dr-qadir-shaikh`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
