import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";
import { getServiceSchema, getBreadcrumbSchema, getProfessionalServiceSchema } from '../../utils/seoStructuredData';
import { SEOHead } from '../../components/SEOHead';
import { EnhancedServiceLocationsFooter } from '../../components/Shared/EnhancedServiceLocationsFooter';
import { allIndianLocations } from '../../data/comprehensiveLocations';

const serviceData = {
  "name": "SEO Services",
  "slug": "seo-services",
  "description": "Search engine optimization for higher Google rankings."
};

const canonicalUrl = "https://goddigitalmarketing.com/services/seo-services/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'SEO Services', url: canonicalUrl }
];

// Extract cities and states for schema
const allCities = allIndianLocations.flatMap(state => 
  state.cities.map(city => ({ name: city.name, state: state.state }))
);
const allStates = allIndianLocations.map(state => ({ name: state.state }));

// Sample service offers for schema
const serviceOffers = [
  { name: "Local SEO Package", description: "Optimize for local search results", priceRange: "₹15,000 - ₹25,000/month" },
  { name: "Enterprise SEO", description: "Comprehensive SEO for large businesses", priceRange: "₹50,000 - ₹100,000/month" },
  { name: "E-commerce SEO", description: "Product and category page optimization", priceRange: "₹30,000 - ₹60,000/month" }
];

export default function SEOServicesMainPage() {
  return (
    <>
      <SEOHead
        title="SEO Services in India | God Digital"
        description="Rank #1 on Google with India's top SEO Services agency. Proven strategies, technical SEO, and local expertise for every city and industry."
        keywords={["seo services", "search engine optimization", "google ranking India", "technical seo", "local seo India"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'SEO Services',
            description: 'Rank #1 on Google with India\'s top SEO Services agency. Proven strategies, technical SEO, and local expertise for every city and industry.',
            provider: 'God Digital',
            areaServed: 'India',
            url: canonicalUrl
          }),
          getProfessionalServiceSchema({
            serviceName: 'SEO Services',
            description: 'Professional search engine optimization services to improve Google rankings and organic traffic.',
            cities: allCities.slice(0, 50), // Limit for performance
            states: allStates,
            url: canonicalUrl,
            aggregateRating: {
              ratingValue: 4.8,
              reviewCount: 127,
              bestRating: 5
            },
            hasOfferCatalog: serviceOffers
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      
      <main className="bg-white text-black min-h-screen">
        {/* Main Content */}
        <ServiceLocationTemplate
          service={serviceData}
          location={null}
          relatedServices={[]}
          nearbyLocations={[]}
        />
        
        {/* Enhanced Service Locations Footer */}
        <EnhancedServiceLocationsFooter 
          service={serviceData}
          enableAnalytics={true}
          maxMobileCities={12}
        />
      </main>
    </>
  );
}
