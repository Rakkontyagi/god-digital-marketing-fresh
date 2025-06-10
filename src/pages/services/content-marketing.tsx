import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { ServiceLocationsFooter } from '../../components/Shared/ServiceLocationsFooter';
import { getAnchorText } from '../../components/Shared/AnchorTextUtils';
import { getServiceSchema, getFAQSchema, getPersonSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

const expert = {
  name: 'Priya Sharma',
  title: 'Content Marketing Strategist',
  image: '/images/experts/priya-sharma.jpg',
  bio: 'Priya has crafted high-converting content strategies for 300+ Indian brands, driving organic growth and thought leadership. Featured in Content Marketing Institute, YourStory, and Entrepreneur India.',
  sameAs: [
    'https://www.linkedin.com/in/priyasharma/',
    'https://twitter.com/priyawrites'
  ]
};

const faqs = [
  {
    q: 'What is Content Marketing?',
    a: 'Content marketing is the creation and distribution of valuable, relevant content to attract and engage your target audience, driving profitable customer action.'
  },
  {
    q: 'How does content marketing help SEO?',
    a: 'High-quality content improves your search rankings, attracts backlinks, and keeps users engaged, all of which boost SEO.'
  },
  {
    q: 'What types of content do you create?',
    a: 'We create blogs, guides, case studies, infographics, videos, and more—tailored for your industry and audience.'
  }
];

const canonicalUrl = "https://goddigitalmarketing.com/services/content-marketing/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'Content Marketing', url: canonicalUrl }
];

const ContentMarketingPage = () => {
  return (
    <>
      <SEOHead
        title="Content Marketing Services in India | God Digital"
        description="Build authority and drive organic growth with India's top Content Marketing agency. Expert strategies, SEO content, and storytelling for every city and industry."
        keywords={["content marketing", "content strategy", "SEO content", "thought leadership", "brand storytelling", "content writing India"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'Content Marketing',
            description: 'Build authority and drive organic growth with India\'s top Content Marketing agency. Expert strategies, SEO content, and storytelling for every city and industry.',
            provider: 'God Digital',
            areaServed: 'India',
            url: canonicalUrl
          }),
          getFAQSchema(faqs),
          getPersonSchema(expert),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <main className="bg-white text-black min-h-screen">
        <section className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-4">Content Marketing Services in India</h1>
          <p className="mb-6 text-lg">Establish your brand as an industry leader with high-impact content marketing. We help you attract, engage, and convert your ideal customers through SEO-driven blogs, guides, videos, and more—crafted for India's diverse markets.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>SEO content & blog strategy</li>
            <li>Thought leadership & storytelling</li>
            <li>Case studies & whitepapers</li>
            <li>Infographics & video content</li>
            <li>Content for every city & industry</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose God Digital?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>300+ brands grown with content in India's top cities</li>
            <li>Proven results in Real Estate, Healthcare, E-commerce, and more</li>
            <li>Featured in Content Marketing Institute, YourStory, Entrepreneur India</li>
            <li>100% original, research-driven content</li>
          </ul>
          <div className="bg-gray-100 rounded-lg p-6 mb-8 flex items-center">
            <img src={expert.image} alt={expert.name} className="w-20 h-20 rounded-full mr-6" />
            <div>
              <div className="font-bold text-lg">{expert.name}</div>
              <div className="text-sm text-gray-600 mb-2">{expert.title}</div>
              <div className="text-gray-700 text-sm">{expert.bio}</div>
              <div className="flex space-x-2 mt-2">
                {expert.sameAs.map((url) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs">{url.replace('https://', '').replace('www.', '')}</a>
                ))}
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
          <ul className="mb-8">
            {faqs.map((faq, i) => (
              <li key={i} className="mb-4">
                <strong>Q: {faq.q}</strong>
                <div className="ml-2">A: {faq.a}</div>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Related Services</h2>
          <ul className="mb-8 grid grid-cols-2 gap-2">
            {["Social Media Marketing", "PPC Advertising", "SEO Services", "Email Marketing", "Business Automation", "AI Automation", "Lead Generation"].map((service) => (
              <li key={service}>
                <a href={`/services/${service.toLowerCase().replace(/ /g, '-')}/`} className="text-blue-600 underline">
                  {getAnchorText('service', { name: service }, { city: 'India' })}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Top Cities We Serve</h2>
          <ul className="mb-8 grid grid-cols-2 gap-2">
            {["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"].map((city) => (
              <li key={city}>
                <a href={`/${city.toLowerCase()}/content-marketing/`} className="text-blue-600 underline">
                  {getAnchorText('location', { name: city }, { service: 'Content Marketing' })}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Industries We Specialize In</h2>
          <ul className="mb-8 grid grid-cols-2 gap-2">
            {["Real Estate", "Healthcare", "Education", "E-commerce", "Manufacturing", "Finance"].map((industry) => (
              <li key={industry}>
                <a href={`/industries/${industry.toLowerCase().replace(/ /g, '-')}/content-marketing/`} className="text-blue-600 underline">
                  {getAnchorText('industry', { name: industry }, { service: 'Content Marketing' })}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <ServiceLocationsFooter service={{ name: 'Content Marketing', slug: 'content-marketing' }} />
      </main>
    </>
  );
};

export default ContentMarketingPage; 