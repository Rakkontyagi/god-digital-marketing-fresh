import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { ServiceLocationsFooter } from '../../components/Shared/ServiceLocationsFooter';
import { getAnchorText } from '../../components/Shared/AnchorTextUtils';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

const expert = {
  name: 'Rakesh Tyagi',
  title: 'Social Media Marketing Expert',
  image: '/images/experts/rakesh-tyagi.jpg',
  bio: 'Rakesh has helped 500+ Indian brands go viral and build loyal communities on Instagram, Facebook, and LinkedIn. As seen in Economic Times, YourStory, and Social Samosa.',
  sameAs: [
    'https://www.linkedin.com/in/rakeshtyagi/',
    'https://twitter.com/rakeshtyagi'
  ]
};

const faqs = [
  {
    q: 'What is Social Media Marketing?',
    a: 'Social Media Marketing (SMM) is the strategic use of platforms like Instagram, Facebook, and LinkedIn to grow brand awareness, engage audiences, and drive business results.'
  },
  {
    q: 'How can SMM help my business?',
    a: 'SMM helps you reach new customers, build trust, and drive sales through targeted content, influencer partnerships, and paid campaigns.'
  },
  {
    q: 'Which platforms do you specialize in?',
    a: 'We specialize in Instagram, Facebook, LinkedIn, Twitter, and YouTube marketing for Indian brands.'
  }
];

const canonicalUrl = "https://goddigitalmarketing.com/services/social-media-marketing/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'Social Media Marketing', url: canonicalUrl }
];

const SocialMediaMarketingPage = () => {
  return (
    <>
      <SEOHead
        title="Social Media Marketing Services in India | God Digital"
        description="Grow your brand and engage your audience with India's top Social Media Marketing agency. Expert strategies for every platform and industry."
        keywords={["social media marketing", "smm", "facebook marketing", "instagram marketing", "linkedin marketing", "brand engagement India"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'Social Media Marketing',
            description: 'Grow your brand and engage your audience with India\'s top Social Media Marketing agency. Expert strategies for every platform and industry.',
            provider: 'God Digital',
            areaServed: 'India',
            url: canonicalUrl
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <main className="bg-white text-black min-h-screen">
        <section className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-4">Social Media Marketing Services in India</h1>
          <p className="mb-6 text-lg">Grow your brand, go viral, and build a loyal community with India's leading SMM experts. We help you dominate Instagram, Facebook, LinkedIn, and more—using the latest AI-powered strategies, influencer partnerships, and creative content.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Instagram growth & viral campaigns</li>
            <li>Facebook & LinkedIn lead generation</li>
            <li>Influencer marketing & UGC</li>
            <li>AI-powered content & analytics</li>
            <li>Community management & engagement</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose God Digital?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>500+ brands scaled across India's top cities</li>
            <li>Proven results in Real Estate, Healthcare, E-commerce, and more</li>
            <li>Featured in Economic Times, YourStory, Social Samosa</li>
            <li>100% transparent reporting & ROI focus</li>
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
            {["Content Marketing", "PPC Advertising", "SEO Services", "Email Marketing", "Business Automation", "AI Automation", "Lead Generation"].map((service) => (
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
                <a href={`/${city.toLowerCase()}/social-media-marketing/`} className="text-blue-600 underline">
                  {getAnchorText('location', { name: city }, { service: 'Social Media Marketing' })}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Industries We Specialize In</h2>
          <ul className="mb-8 grid grid-cols-2 gap-2">
            {["Real Estate", "Healthcare", "Education", "E-commerce", "Manufacturing", "Finance"].map((industry) => (
              <li key={industry}>
                <a href={`/industries/${industry.toLowerCase().replace(/ /g, '-')}/social-media-marketing/`} className="text-blue-600 underline">
                  {getAnchorText('industry', { name: industry }, { service: 'Social Media Marketing' })}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <ServiceLocationsFooter service={{ name: 'Social Media Marketing', slug: 'social-media-marketing' }} />
      </main>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Social Media Marketing",
        "provider": {
          "@type": "LocalBusiness",
          "name": "God Digital"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Social Media Marketing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instagram Growth" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facebook Ads" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Influencer Marketing" } }
          ]
        }
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": expert.name,
        "jobTitle": expert.title,
        "image": expert.image,
        "sameAs": expert.sameAs
      }) }} />
    </>
  );
};

export default SocialMediaMarketingPage; 