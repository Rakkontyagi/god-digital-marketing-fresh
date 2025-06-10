// Global trust signals for use across the website

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Award {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, TechSolutions India",
    image: "/images/testimonials/rajesh.jpg",
    quote: "Working with God Digital Marketing was a game-changer for us. Our organic traffic grew by 160% in just 5 months, and we started getting quality leads from across India.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Marketing Director, FashionHub",
    image: "/images/testimonials/priya.jpg",
    quote: "Their team's expertise in SEO and social media helped us become a household name in Mumbai. The ROI has been phenomenal.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Founder, StartupIndia",
    image: "/images/testimonials/amit.jpg",
    quote: "We saw a 3x increase in online sales after their PPC and content marketing campaigns. Highly recommended for any growing business.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Ananya Sharma",
    position: "Chief Medical Officer, WellnessFirst Clinic Pune",
    image: "/images/testimonials/ananya.jpg",
    quote: "Their digital strategies brought us more patient bookings and improved our reputation online. The team is responsive and truly understands the healthcare sector.",
    rating: 5
  },
  {
    id: 5,
    name: "Suresh Menon",
    position: "Managing Director, Menon Retail Group",
    image: "/images/testimonials/suresh.jpg",
    quote: "From local SEO to influencer campaigns, God Digital Marketing delivered results every time. Our store footfall and online reviews have never been better.",
    rating: 5
  }
];

export const awards: Award[] = [
  {
    id: 1,
    name: "Best Digital Marketing Agency India 2023",
    image: "/images/awards/best-digital-marketing-2023.png",
    description: "Awarded by the Indian Marketing Excellence Forum for outstanding results and innovation in digital campaigns."
  },
  {
    id: 2,
    name: "Google Premier Partner",
    image: "/images/awards/google-premier-partner.png",
    description: "Recognized as a top-tier Google Partner for exceptional performance in Google Ads management."
  },
  {
    id: 3,
    name: "Top Social Media Agency 2022 - Social Samosa",
    image: "/images/awards/social-samosa-top-agency.png",
    description: "Honored by Social Samosa for excellence in social media strategy and campaign execution."
  },
  {
    id: 4,
    name: "Best SEO Agency 2023 - Indian Digital Marketing Awards",
    image: "/images/awards/best-seo-agency-2023.png",
    description: "Recognized for excellence in search engine optimization and organic growth strategies."
  },
  {
    id: 5,
    name: "Most Innovative Digital Marketing Company 2023",
    image: "/images/awards/innovative-digital-2023.png",
    description: "Awarded by the Indian Business Excellence Forum for innovative digital marketing solutions."
  },
  {
    id: 6,
    name: "Best Content Marketing Agency 2023",
    image: "/images/awards/best-content-2023.png",
    description: "Honored for exceptional content creation and distribution strategies."
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Google Ads Certified Partner",
    issuer: "Google",
    year: "2024",
    description: "Demonstrates advanced proficiency in Google Ads campaign management and optimization."
  },
  {
    id: 2,
    name: "Meta (Facebook) Blueprint Certification",
    issuer: "Meta Platforms Inc.",
    year: "2023",
    description: "Certified expertise in Facebook and Instagram advertising, analytics, and creative strategy."
  },
  {
    id: 3,
    name: "HubSpot Inbound Marketing Certified",
    issuer: "HubSpot Academy",
    year: "2023",
    description: "Recognized for mastery in inbound marketing, content strategy, and lead nurturing."
  },
  {
    id: 4,
    name: "Microsoft Advertising Certified Professional",
    issuer: "Microsoft",
    year: "2024",
    description: "Expert certification in Microsoft Advertising platform and Bing Ads management."
  },
  {
    id: 5,
    name: "LinkedIn Marketing Solutions Certified",
    issuer: "LinkedIn",
    year: "2024",
    description: "Professional certification in LinkedIn advertising and B2B marketing strategies."
  },
  {
    id: 6,
    name: "Google Analytics 4 Certified",
    issuer: "Google",
    year: "2024",
    description: "Advanced certification in GA4 implementation, tracking, and data analysis."
  },
  {
    id: 7,
    name: "Twitter Flight School Certified",
    issuer: "Twitter",
    year: "2023",
    description: "Expert certification in Twitter advertising and social media marketing."
  },
  {
    id: 8,
    name: "Pinterest Marketing Certified",
    issuer: "Pinterest",
    year: "2023",
    description: "Professional certification in Pinterest advertising and visual marketing strategies."
  },
  {
    id: 9,
    name: "Amazon Advertising Certified",
    issuer: "Amazon",
    year: "2024",
    description: "Expert certification in Amazon Advertising and e-commerce marketing."
  },
  {
    id: 10,
    name: "Semrush SEO Certified",
    issuer: "Semrush",
    year: "2024",
    description: "Advanced certification in SEO tools, techniques, and best practices."
  }
]; 