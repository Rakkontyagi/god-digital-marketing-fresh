// CommonJS export of comprehensiveServices and comprehensiveIndustries for batch scripts

const comprehensiveServices = [
  {
    name: "Digital Marketing Services",
    slug: "digital-marketing",
    description: "Comprehensive digital marketing solutions for business growth",
    keywords: ["digital marketing", "online marketing", "internet marketing", "digital advertising"],
    subServices: [
      { name: "SEO Services", slug: "seo-services" },
      { name: "PPC Advertising", slug: "ppc-advertising" },
      { name: "Social Media Marketing", slug: "social-media-marketing" },
      { name: "Content Marketing", slug: "content-marketing" },
      { name: "Google Ads Management", slug: "google-ads-management" },
      { name: "Facebook Advertising", slug: "facebook-advertising" },
      { name: "Instagram Marketing", slug: "instagram-marketing" },
      { name: "LinkedIn Marketing", slug: "linkedin-marketing" },
      { name: "YouTube Marketing", slug: "youtube-marketing" }
    ]
  },
  {
    name: "AI Automation Services",
    slug: "ai-automation",
    description: "Advanced AI-powered business automation solutions",
    keywords: ["ai automation", "artificial intelligence", "machine learning", "business automation"],
    subServices: [
      { name: "Marketing Automation", slug: "marketing-automation" },
      { name: "Chatbot Development", slug: "chatbot-development" },
      { name: "CRM Automation", slug: "crm-automation" },
      { name: "Email Automation", slug: "email-automation" },
      { name: "Lead Scoring Automation", slug: "lead-scoring-automation" },
      { name: "Customer Service Automation", slug: "customer-service-automation" },
      { name: "Sales Process Automation", slug: "sales-process-automation" },
      { name: "Workflow Automation", slug: "workflow-automation" },
      { name: "AI Analytics", slug: "ai-analytics" }
    ]
  },
  {
    name: "Business Automation Services",
    slug: "business-automation",
    description: "Complete business process automation solutions",
    keywords: ["business automation", "process automation", "workflow optimization", "operational efficiency"],
    subServices: [
      { name: "Process Automation", slug: "process-automation" },
      { name: "Document Automation", slug: "document-automation" },
      { name: "Inventory Management Automation", slug: "inventory-management-automation" },
      { name: "HR Automation", slug: "hr-automation" },
      { name: "Accounting Automation", slug: "accounting-automation" },
      { name: "Customer Onboarding Automation", slug: "customer-onboarding-automation" },
      { name: "Reporting Automation", slug: "reporting-automation" },
      { name: "Compliance Automation", slug: "compliance-automation" }
    ]
  },
  {
    name: "Lead Generation Services",
    slug: "lead-generation",
    description: "Proven lead generation strategies for business growth",
    keywords: ["lead generation", "prospect generation", "customer acquisition", "sales leads"],
    subServices: [
      { name: "B2B Lead Generation", slug: "b2b-lead-generation" },
      { name: "B2C Lead Generation", slug: "b2c-lead-generation" },
      { name: "Qualified Lead Generation", slug: "qualified-lead-generation" },
      { name: "Cold Email Campaigns", slug: "cold-email-campaigns" },
      { name: "Telemarketing Services", slug: "telemarketing-services" },
      { name: "LinkedIn Lead Generation", slug: "linkedin-lead-generation" },
      { name: "Landing Page Optimization", slug: "landing-page-optimization" },
      { name: "Conversion Rate Optimization", slug: "conversion-rate-optimization" }
    ]
  },
  {
    name: "Email Marketing Services",
    slug: "email-marketing",
    description: "Targeted email marketing campaigns for customer engagement",
    keywords: ["email marketing", "email campaigns", "email automation", "newsletter marketing"],
    subServices: []
  },
  {
    name: "Social Media Management",
    slug: "social-media-management",
    description: "Professional social media marketing and management",
    keywords: ["social media marketing", "social media management", "social media advertising"],
    subServices: []
  },
  {
    name: "Online Reputation Management",
    slug: "online-reputation-management",
    description: "Protect and enhance your online brand reputation",
    keywords: ["reputation management", "online reputation", "brand management"],
    subServices: []
  },
  {
    name: "Web Design Development",
    slug: "web-design-development",
    description: "Professional website design and development services",
    keywords: ["web design", "website development", "web development"],
    subServices: []
  },
  {
    name: "E-commerce Marketing",
    slug: "ecommerce-marketing",
    description: "Specialized marketing for e-commerce businesses",
    keywords: ["ecommerce marketing", "online store marketing", "ecommerce seo"],
    subServices: []
  },
  {
    name: "Mobile App Marketing",
    slug: "mobile-app-marketing",
    description: "Marketing strategies for mobile applications",
    keywords: ["app marketing", "mobile marketing", "app store optimization"],
    subServices: []
  },
  {
    name: "Video Marketing",
    slug: "video-marketing",
    description: "Video content marketing and promotion services",
    keywords: ["video marketing", "video content", "video advertising"],
    subServices: []
  },
  {
    name: "Affiliate Marketing",
    slug: "affiliate-marketing",
    description: "Performance-based affiliate marketing programs",
    keywords: ["affiliate marketing", "performance marketing", "affiliate programs"],
    subServices: []
  },
  {
    name: "Marketing Automation",
    slug: "marketing-automation",
    description: "Streamline, automate, and measure marketing tasks and workflows to grow revenue and improve efficiency.",
    keywords: ["marketing automation", "automated email marketing", "lead nurturing", "crm integration", "customer journey mapping"],
    subServices: [
      { name: "Email Automation Strategy", slug: "email-automation-strategy" },
      { name: "Lead Scoring Systems Design", slug: "lead-scoring-systems-design" },
      { name: "Automated Customer Journey Builder", slug: "automated-customer-journey-builder" }
    ]
  }
];

const comprehensiveIndustries = [
  { name: "Healthcare", slug: "healthcare", description: "Digital marketing for healthcare providers" },
  { name: "Real Estate", slug: "real-estate", description: "Marketing solutions for real estate businesses" },
  { name: "E-commerce", slug: "ecommerce", description: "Specialized marketing for online stores" },
  { name: "Education", slug: "education", description: "Marketing for educational institutions" },
  { name: "Manufacturing", slug: "manufacturing", description: "Industrial marketing solutions" },
  { name: "Financial Services", slug: "financial-services", description: "Marketing for financial companies" },
  { name: "Hospitality", slug: "hospitality", description: "Tourism and hospitality marketing" },
  { name: "Technology", slug: "technology", description: "Tech industry marketing solutions" },
  { name: "Retail", slug: "retail", description: "Retail business marketing strategies" },
  { name: "Automotive", slug: "automotive", description: "Automotive industry marketing" },
  { name: "Food & Beverage", slug: "food-beverage", description: "F&B industry marketing" },
  { name: "Fashion", slug: "fashion", description: "Fashion industry marketing" },
  { name: "Legal Services", slug: "legal-services", description: "Marketing for law firms" },
  { name: "Fitness & Wellness", slug: "fitness-wellness", description: "Health and fitness marketing" },
  { name: "Beauty & Cosmetics", slug: "beauty-cosmetics", description: "Beauty industry marketing" }
];

module.exports = { comprehensiveServices, comprehensiveIndustries };
