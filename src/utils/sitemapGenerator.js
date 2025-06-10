import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://goddigitalmarketing.com';

const generateSitemap = (routes) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq || 'weekly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};

const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  // Write robots.txt to public directory
  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
};

export { generateSitemap, generateRobotsTxt }; 