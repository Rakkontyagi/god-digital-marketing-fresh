import React from "react";
import { ServiceLocationTemplate } from "../components/Templates/ServiceLocationTemplate";
import { getServiceSchema, getBreadcrumbSchema, getProfessionalServiceSchema } from '../../utils/seoStructuredData';
import { SEOHead } from '../../components/SEOHead';
import { EnhancedServiceLocationsFooter } from '../../components/Shared/EnhancedServiceLocationsFooter';
import { allIndianLocations } from '../../data/comprehensiveLocations';

const serviceData = {
  "name": "PPC Advertising",
  "slug": "ppc-advertising",
  "description": "Pay-per-click advertising campaigns for maximum ROI."
};

const canonicalUrl = "https://goddigitalmarketing.com/services/ppc-advertising/";
const breadcrumbs = [
  { title: 'Home', url: 'https://goddigitalmarketing.com/' },
  { title: 'Services', url: 'https://goddigitalmarketing.com/services/' },
  { title: 'PPC Advertising', url: canonicalUrl }
];

// Extract cities and states for schema
const allCities = allIndianLocations.flatMap(state => 
  state.cities.map(city => ({ name: city.name, state: state.state }))
);
const allStates = allIndianLocations.map(state => ({ name: state.state }));

// PPC service offers for schema
const serviceOffers = [
  { name: "Google Ads Management", description: "Complete Google Ads campaign management and optimization", priceRange: "₹20,000 - ₹50,000/month" },
  { name: "Facebook Ads Campaign", description: "Facebook and Instagram advertising campaigns", priceRange: "₹15,000 - ₹40,000/month" },
  { name: "LinkedIn Ads Management", description: "B2B focused LinkedIn advertising campaigns", priceRange: "₹25,000 - ₹60,000/month" },
  { name: "Display Advertising", description: "Banner and display ad campaigns across networks", priceRange: "₹18,000 - ₹45,000/month" }
];

export default function PPCAdvertisingMainPage() {
  return (
    <>
      <SEOHead
        title="PPC Advertising Services in India | God Digital"
        description="Drive targeted traffic with expert PPC advertising. Google Ads, Facebook Ads, and LinkedIn campaigns with proven ROI across Indian cities."
        keywords={["ppc advertising", "google ads management", "facebook ads", "pay per click india", "linkedin ads", "digital advertising"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getServiceSchema({
            name: 'PPC Advertising',
            description: 'Drive targeted traffic with expert PPC advertising. Google Ads, Facebook Ads, and LinkedIn campaigns with proven ROI across Indian cities.',
            provider: 'God Digital',
            areaServed: 'India',
            url: canonicalUrl
          }),
          getProfessionalServiceSchema({
            serviceName: 'PPC Advertising',
            description: 'Professional pay-per-click advertising services including Google Ads, Facebook Ads, and LinkedIn campaigns with data-driven optimization.',
            cities: allCities.slice(0, 50), // Limit for performance
            states: allStates,
            url: canonicalUrl,
            aggregateRating: {
              ratingValue: 4.9,
              reviewCount: 89,
              bestRating: 5
            },
            hasOfferCatalog: serviceOffers
          }),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />
      
      <main className="bg-white text-black min-h-screen">
        {/* Main Content */}
        <section className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-4">PPC Advertising Services in India</h1>
          <p className="mb-6 text-lg">Drive targeted traffic and maximize ROI with India's leading PPC advertising experts. We specialize in Google Ads, Facebook Ads, and LinkedIn campaigns that deliver measurable results.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our PPC Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Ads Management & Optimization</li>
                <li>Facebook & Instagram Advertising</li>
                <li>LinkedIn B2B Campaign Management</li>
                <li>Display & Banner Advertising</li>
                <li>Shopping Ads for E-commerce</li>
                <li>YouTube Video Advertising</li>
                <li>Remarketing & Retargeting Campaigns</li>
                <li>Landing Page Optimization</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our PPC Services?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Average 7.5x Return on Ad Spend (ROAS)</li>
                <li>Google Ads Certified Specialists</li>
                <li>Transparent Real-time Reporting</li>
                <li>24/7 Campaign Monitoring</li>
                <li>Industry-specific Strategies</li>
                <li>A/B Testing & Optimization</li>
                <li>Conversion Tracking Setup</li>
                <li>Custom Dashboard Access</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">ROI by Industry</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8.5x</div>
                <div className="text-sm">E-commerce & Retail</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">6.8x</div>
                <div className="text-sm">B2B Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">9.2x</div>
                <div className="text-sm">Healthcare & Finance</div>
              </div>
            </div>
          </div>

          <ServiceLocationTemplate
            service={serviceData}
            location={null}
            relatedServices={[]}
            nearbyLocations={[]}
          />
        </section>
        
        {/* Enhanced Service Locations Footer with ROI Focus */}
        <EnhancedServiceLocationsFooter 
          service={serviceData}
          enableAnalytics={true}
          customTitle="High-ROI PPC Advertising Services Across India"
          maxMobileCities={10}
        />
      </main>
    </>
  );
}
