import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';

// /sitemap.xml - nayi pages banao toh yahan add kar dena
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ];
}
