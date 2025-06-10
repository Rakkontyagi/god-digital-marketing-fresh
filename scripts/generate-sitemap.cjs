// Import data directly as JavaScript objects to avoid TypeScript import issues
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://goddigitalmarketing.com';

// Define data directly to avoid import issues
const comprehensiveServices = [
  { slug: 'digital-marketing', subServices: [{ slug: 'seo-services' }, { slug: 'ppc-advertising' }, { slug: 'social-media-marketing' }] },
  { slug: 'ai-automation', subServices: [{ slug: 'marketing-automation' }, { slug: 'sales-automation' }] },
  { slug: 'business-automation', subServices: [{ slug: 'crm-automation' }, { slug: 'workflow-automation' }] },
  { slug: 'lead-generation', subServices: [{ slug: 'b2b-lead-generation' }, { slug: 'local-lead-generation' }] }
];

const allIndianLocations = [
  {
    state: 'Maharashtra',
    cities: [
      { slug: 'mumbai' }, { slug: 'pune' }, { slug: 'nagpur' }, { slug: 'nashik' }, { slug: 'aurangabad' }
    ]
  },
  {
    state: 'Delhi',
    cities: [{ slug: 'delhi' }, { slug: 'new-delhi' }, { slug: 'gurgaon' }, { slug: 'noida' }]
  },
  {
    state: 'Karnataka',
    cities: [{ slug: 'bangalore' }, { slug: 'mysore' }, { slug: 'hubli' }]
  },
  {
    state: 'Tamil Nadu',
    cities: [{ slug: 'chennai' }, { slug: 'coimbatore' }, { slug: 'madurai' }]
  },
  {
    state: 'Telangana',
    cities: [{ slug: 'hyderabad' }, { slug: 'warangal' }]
  }
];

const comprehensiveIndustries = [
  { slug: 'healthcare' }, { slug: 'real-estate' }, { slug: 'ecommerce' },
  { slug: 'education' }, { slug: 'finance' }, { slug: 'technology' }
];

const allCaseStudies = [
  { id: 'mumbai-ecommerce-success' }, { id: 'delhi-healthcare-growth' },
  { id: 'bangalore-tech-startup' }, { id: 'chennai-real-estate-leads' }
];

// Sitemap generation functions
function generateSitemap(routes) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join('dist', 'sitemap.xml'), sitemap);
}

function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

  fs.writeFileSync(path.join('dist', 'robots.txt'), robots);
}

// Generate service routes
const serviceRoutes = comprehensiveServices.flatMap(service => {
  const main = [{
    path: `/services/${service.slug}`,
    priority: '0.9',
    changefreq: 'weekly'
  }];
  const sub = (service.subServices || []).map(sub => ({
    path: `/services/${sub.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));
  return [...main, ...sub];
});

// Generate location routes
const locationRoutes = allIndianLocations.flatMap(state =>
  state.cities.map(city => ({
    path: `/locations/${city.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
);

// Generate industry routes
const industryRoutes = comprehensiveIndustries.map(ind => ({
  path: `/industries/${ind.slug}`,
  priority: '0.8',
  changefreq: 'monthly'
}));

// Generate case study routes
const caseStudyRoutes = allCaseStudies.map(cs => ({
  path: `/case-studies/${cs.id}`,
  priority: '0.7',
  changefreq: 'monthly'
}));

// Static routes
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' }
];

// Combine all routes
const routes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...locationRoutes,
  ...industryRoutes,
  ...caseStudyRoutes
];

// Generate sitemap and robots.txt
try {
  generateSitemap(routes);
  generateRobotsTxt();
  console.log('✅ Sitemap and robots.txt generated successfully!');
  console.log(`📊 Generated ${routes.length} routes in sitemap`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}