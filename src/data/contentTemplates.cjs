// Enhanced content utility for world-class, LSI/entity/E-E-A-T-rich, human-quality content

const lsiKeywords = {
  'seo-services': [
    'search engine optimization', 'Google ranking', 'local SEO', 'organic traffic', 'on-page optimization',
    'link building', 'technical SEO', 'Google My Business', 'SERP', 'website audit', 'keyword research',
    'content marketing', 'digital growth', 'online visibility', 'SEO audit', 'authority building',
    'backlinks', 'conversion rate', 'mobile SEO', 'local business',
  ],
  'ppc-advertising': [
    'pay-per-click', 'Google Ads', 'Facebook Ads', 'ad campaigns', 'ROI', 'conversion tracking',
    'ad spend', 'targeted traffic', 'search ads', 'display ads', 'remarketing', 'ad copy',
    'bid management', 'landing pages', 'cost per click', 'ad extensions', 'campaign optimization',
    'lead generation', 'digital advertising', 'local business',
  ],
  'social-media-marketing': [
    'social media strategy', 'Facebook marketing', 'Instagram growth', 'LinkedIn campaigns',
    'brand awareness', 'engagement', 'content creation', 'influencer marketing', 'social ads',
    'community management', 'social analytics', 'viral content', 'audience targeting', 'social proof',
    'reputation management', 'local business', 'digital branding', 'customer loyalty', 'Twitter marketing', 'YouTube promotion',
  ],
};

const eeatSignals = [
  'award-winning', 'proven results', 'trusted by local businesses', 'case studies', 'transparent reporting',
  'local expertise', 'years of experience', 'track record', 'free consultation', 'transparent analytics',
  'dedicated support', 'client testimonials', 'professional', 'value', 'growth', 'authority', 'expertise', 'trust'
];

function getRandom(arr, n) {
  return arr.slice().sort(() => 0.5 - Math.random()).slice(0, n);
}

function getInternalLinks(city, state, service, allPages) {
  // Pick 3-5 other relevant pages (different city or service)
  const candidates = allPages.filter(p =>
    (p.city.slug !== city.slug || p.service.slug !== service.slug)
  );
  const links = getRandom(candidates, 4);
  return links.map(p =>
    `<a href="/${p.city.slug}/${p.service.slug}/">${p.city.name} ${p.service.name.replace(/Services|Marketing|Advertising/, '').trim()} ${getRandom(lsiKeywords[p.service.slug], 1)}</a>`
  ).join(', ');
}

function generateContent({ city, state, service, allPages }) {
  const lsi = getRandom(lsiKeywords[service.slug], 8);
  const eeat = getRandom(eeatSignals, 5);
  const internalLinks = allPages ? getInternalLinks(city, state, service, allPages) : '';
  // Hero/Intro
  const hero = `
    <section className="service-hero">
      <h1>${service.name} in ${city.name} – Drive Real Business Growth</h1>
      <p>Unlock the full potential of your business in ${city.name} with our award-winning ${service.name.toLowerCase()}. We combine ${lsi[0]}, ${lsi[1]}, and ${lsi[2]} to deliver measurable results and sustainable growth. <strong>Trusted by local businesses</strong>, our team brings ${eeat[0]} and ${eeat[1]} to every project.</p>
    </section>
  `;
  // Why Choose Us
  const whyChoose = `
    <section className="why-choose-us">
      <h2>Why Choose Us for ${service.name} in ${city.name}?</h2>
      <ul>
        <li><strong>${eeat[0]}</strong> and ${eeat[2]} in the ${city.name} market</li>
        <li>Proven expertise in ${lsi[3]}, ${lsi[4]}, and ${lsi[5]}</li>
        <li>Transparent reporting, analytics, and <strong>${eeat[3]}</strong></li>
        <li>Custom strategies for every business size and industry</li>
        <li>Dedicated support and ongoing optimization</li>
      </ul>
    </section>
  `;
  // Our Process
  const process = `
    <section className="our-process">
      <h2>Our Proven Process</h2>
      <ol>
        <li><strong>Discovery & Audit:</strong> In-depth analysis of your business, competitors, and market in ${city.name}.</li>
        <li><strong>Strategy Development:</strong> Custom plan leveraging ${lsi[0]}, ${lsi[1]}, and ${lsi[2]} for your goals.</li>
        <li><strong>Execution:</strong> Implementation of campaigns, creative, and technical improvements.</li>
        <li><strong>Measurement:</strong> Transparent reporting, conversion tracking, and ROI analysis.</li>
        <li><strong>Optimization:</strong> Continuous improvement based on data and industry trends.</li>
      </ol>
    </section>
  `;
  // Service Features
  const features = `
    <section className="service-features">
      <h2>Key Features of Our ${service.name}</h2>
      <ul>
        <li>Advanced ${lsi[0]} and ${lsi[1]} techniques</li>
        <li>Expert management of ${lsi[2]}, ${lsi[3]}, and ${lsi[4]}</li>
        <li>Conversion-focused landing pages and ad copy</li>
        <li>Comprehensive analytics and reporting</li>
        <li>Local targeting for ${city.name} and ${state.name}</li>
      </ul>
    </section>
  `;
  // Case Study/Results (fictionalized)
  const caseStudy = `
    <section className="case-study">
      <h2>Case Study: Success Story in ${city.name}</h2>
      <p><strong>Challenge:</strong> A local business in ${city.name} struggled with low online visibility and high ad costs.</p>
      <p><strong>Solution:</strong> We implemented a tailored ${service.name.toLowerCase()} strategy using ${lsi[0]}, ${lsi[1]}, and ${lsi[2]}, combined with ${eeat[0]} and ${eeat[1]} best practices.</p>
      <p><strong>Results:</strong> 3x increase in qualified leads, 40% lower cost per acquisition, and a top-3 Google ranking within 4 months.</p>
      <blockquote>“The team's expertise and transparent reporting made all the difference. We saw real growth in just a few months!” – Local Business Owner, ${city.name}</blockquote>
    </section>
  `;
  // Expert Insights
  const expertInsights = `
    <section className="expert-insights">
      <h2>Expert Insights: ${service.name} Trends in ${city.name}</h2>
      <p>Staying ahead in ${city.name} means leveraging the latest in ${lsi[5]}, ${lsi[6]}, and ${lsi[7]}. Our team continuously adapts to Google algorithm updates, new ad formats, and evolving consumer behavior to keep your business at the forefront.</p>
    </section>
  `;
  // Industry Trends
  const industryTrends = `
    <section className="industry-trends">
      <h2>Industry Trends & Best Practices</h2>
      <ul>
        <li>Data-driven decision making and automation</li>
        <li>Personalization and audience segmentation</li>
        <li>Omnichannel marketing strategies</li>
        <li>Focus on E-E-A-T: ${eeat.join(', ')}</li>
      </ul>
    </section>
  `;
  // Comprehensive FAQ
  const faq = `
    <section className="service-faq">
      <h2>Frequently Asked Questions</h2>
      <dl>
        <dt>How does ${service.name.toLowerCase()} help businesses in ${city.name}?</dt>
        <dd>It increases your online visibility, drives targeted traffic, and helps you win more customers using ${lsi[0]}, ${lsi[1]}, and ${lsi[2]}.</dd>
        <dt>What makes your ${service.name.toLowerCase()} unique?</dt>
        <dd>We use advanced techniques like ${lsi[3]}, ${lsi[4]}, and ${lsi[5]}, tailored for the ${city.name} market, and focus on ${eeat[0]} and ${eeat[1]}.</dd>
        <dt>How soon can I see results?</dt>
        <dd>Most clients in ${city.name} see measurable improvements within 2-3 months, depending on competition and goals.</dd>
        <dt>Do you offer transparent reporting?</dt>
        <dd>Yes, we provide detailed analytics and reporting for every campaign, so you always know your ROI.</dd>
        <dt>Can you help with other digital marketing services?</dt>
        <dd>Absolutely! We offer a full suite of services including SEO, content marketing, social media, and more.</dd>
      </dl>
    </section>
  `;
  // Client Testimonials (fictionalized)
  const testimonials = `
    <section className="client-testimonials">
      <h2>What Our Clients Say</h2>
      <blockquote>"Outstanding results and a truly professional team. Highly recommended for any business in ${city.name}!"</blockquote>
      <blockquote>"Their expertise in ${service.name.toLowerCase()} and transparent reporting set them apart."</blockquote>
    </section>
  `;
  // Comparison Table (fictionalized)
  const comparison = `
    <section className="comparison-table">
      <h2>How We Compare to Other Agencies</h2>
      <table>
        <thead><tr><th>Feature</th><th>Our Agency</th><th>Typical Agency</th></tr></thead>
        <tbody>
          <tr><td>Local Expertise</td><td>✔️ Deep knowledge of ${city.name}</td><td>❌ Generic approach</td></tr>
          <tr><td>Transparent Reporting</td><td>✔️ Real-time dashboards</td><td>❌ Monthly PDFs</td></tr>
          <tr><td>Custom Strategies</td><td>✔️ Tailored for your business</td><td>❌ One-size-fits-all</td></tr>
          <tr><td>E-E-A-T Focus</td><td>✔️ ${eeat[0]}, ${eeat[1]}</td><td>❌ Not prioritized</td></tr>
        </tbody>
      </table>
    </section>
  `;
  // Internal Links
  const links = `
    <section className="service-internal-links">
      <h2>Related Services & Locations</h2>
      <p>Explore more: ${internalLinks}</p>
    </section>
  `;
  // Strong CTA
  const cta = `
    <section className="service-cta">
      <h2>Ready to Grow in ${city.name}?</h2>
      <p>Contact us for a <strong>free consultation</strong> and discover how our ${service.name.toLowerCase()} can transform your business in ${city.name}. We are <strong>${eeat[0]}</strong> and <strong>${eeat[1]}</strong> in the industry. <a href="/contact/">Book your strategy session now</a>.</p>
    </section>
  `;
  // Compose all sections
  return [hero, whyChoose, process, features, caseStudy, expertInsights, industryTrends, faq, testimonials, comparison, links, cta].join('\n');
}

module.exports = { generateContent }; 