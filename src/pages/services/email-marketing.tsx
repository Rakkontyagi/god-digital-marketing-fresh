import React from 'react';
import { SEOHead } from '../../components/SEO/SEOHead';
import { ServiceLocationsFooter } from '../../components/Shared/ServiceLocationsFooter';
import { getAnchorText } from '../../components/Shared/AnchorTextUtils';
import { getServiceSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

const expert = {
  name: 'Amit Verma',
  title: 'Email Marketing Specialist',
  image: '/images/experts/amit-verma.jpg',
  bio: 'Amit has delivered 1M+ high-converting emails for Indian brands, specializing in automation, segmentation, and deliverability. Featured in Campaign India, YourStory, and Martech Advisor.',
  sameAs: [
    'https://www.linkedin.com/in/amitverma/',
    'https://twitter.com/amitverma'
  ]
};

const faqs = [
  {
    q: 'What is Email Marketing?',
    a: 'Email marketing is the use of targeted, personalized emails to nurture leads, engage customers, and drive sales.'
  },
  {
    q: 'How do you improve email deliverability?',
    a: 'We use advanced segmentation, clean lists, and optimized content to maximize inbox placement and open rates.'
  },
  {
    q: 'What types of campaigns do you run?',
    a: 'We run newsletters, drip campaigns, product launches, re-engagement, and more—tailored for your audience.'
  }
];

const canonicalUrl = "https://goddigitalmarketing.com/services/email-marketing/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'Email Marketing', url: canonicalUrl }
];

const EmailMarketingPage = () => {
  return (
    <>
      <SEOHead
        title="Email Marketing Services in India | God Digital"
        description="Drive conversions and nurture leads with India's top Email Marketing agency. Campaign strategy, automation, and analytics for every industry."
        keywords={["email marketing", "email automation", "lead nurturing", "email campaigns India", "newsletter marketing"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'Email Marketing',
            description: 'Drive conversions and nurture leads with India\'s top Email Marketing agency. Campaign strategy, automation, and analytics for every industry.',
            provider: 'God Digital',
            areaServed: 'India',
            url: canonicalUrl
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <main className="bg-white text-black min-h-screen">
        <section className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-4">Email Marketing Services in India</h1>
          <p className="mb-6 text-lg">Unlock the power of email to nurture leads, boost conversions, and build lasting customer relationships. Our expert team crafts high-converting campaigns, automates journeys, and ensures your message lands in the inbox—every time.</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Email automation & drip campaigns</li>
            <li>Segmentation & personalization</li>
            <li>Newsletter strategy & design</li>
            <li>Deliverability optimization</li>
            <li>Analytics & reporting</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose God Digital?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>1M+ emails delivered for Indian brands</li>
            <li>Proven results in E-commerce, Real Estate, Healthcare, and more</li>
            <li>Featured in Campaign India, YourStory, Martech Advisor</li>
            <li>100% compliance with anti-spam laws</li>
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
            {["Social Media Marketing", "Content Marketing", "PPC Advertising", "SEO Services", "Business Automation", "AI Automation", "Lead Generation"].map((service) => (
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
                <a href={`/${city.toLowerCase()}/email-marketing/`} className="text-blue-600 underline">
                  {getAnchorText('location', { name: city }, { service: 'Email Marketing' })}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Industries We Specialize In</h2>
          <ul className="mb-8 grid grid-cols-2 gap-2">
            {["Real Estate", "Healthcare", "Education", "E-commerce", "Manufacturing", "Finance"].map((industry) => (
              <li key={industry}>
                <a href={`/industries/${industry.toLowerCase().replace(/ /g, '-')}/email-marketing/`} className="text-blue-600 underline">
                  {getAnchorText('industry', { name: industry }, { service: 'Email Marketing' })}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <ServiceLocationsFooter service={{ name: 'Email Marketing', slug: 'email-marketing' }} />
      </main>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Email Marketing",
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
          "name": "Email Marketing Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Email Automation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drip Campaigns" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Newsletter Strategy" } }
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

export default EmailMarketingPage; 