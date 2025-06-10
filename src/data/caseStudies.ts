export interface Metric {
  metric: string;
  value: string;
  improvement?: string; // e.g., "+30%" or "from X to Y"
}

export interface FictionalTestimonial {
  text: string;
  authorName: string; // e.g., "Jane Doe (Fictional CEO)"
  authorRole: string; // e.g., "CEO, Innovate Solutions (Fictional)"
}

export interface CaseStudyData {
  id: string; // Unique slug, e.g., "healthcare-digital-marketing-mumbai-success"
  title: string;
  fictionalClientName: string;
  industrySlug: string; // Matches a slug in comprehensiveIndustries
  citySlug: string; // Matches a city slug in allIndianLocations
  stateSlug: string; // Matches a state slug for context
  serviceSlugs: string[]; // Slugs of your services involved
  heroImage?: string; // Optional placeholder URL for a relevant image
  metaDescription: string;

  beforeState: {
    challengeSummary: string;
    keyMetrics: Metric[];
  };
  transformationProcess: {
    strategySummary: string;
    timeline: string;
    toolsUsed?: string[]; // Optional
  };
  afterState: {
    resultsSummary: string;
    keyResults: Metric[];
    fictionalTestimonial?: FictionalTestimonial;
  };
  keywords?: string[];
}

export const allCaseStudies: CaseStudyData[] = [
  {
    id: "healthcare-ai-automation-pune-patient-engagement",
    title: "Boosting Patient Engagement by 40% for a Pune Clinic via AI Automation",
    fictionalClientName: "WellnessFirst Clinic Pune (Fictional)",
    industrySlug: "healthcare",
    citySlug: "pune",
    stateSlug: "maharashtra",
    serviceSlugs: ["ai-automation", "chatbot-development", "crm-automation"],
    heroImage: "/placeholders/case-study-healthcare-hero.jpg", // Generic placeholder path
    metaDescription: "Discover how WellnessFirst Clinic Pune (Fictional), a healthcare provider, leveraged AI automation to increase patient engagement by 40% and streamline appointment bookings.",
    beforeState: {
      challengeSummary: "WellnessFirst Clinic faced challenges with inconsistent patient follow-up post-consultation, high no-show rates for appointments (around 25%), and their front-desk staff being overwhelmed with repetitive queries about services and appointment scheduling.",
      keyMetrics: [
        { metric: "Average Patient Follow-up Rate (Post-Consultation)", value: "30%" },
        { metric: "Appointment No-Show Rate", value: "25%" },
        { metric: "Staff Time on Repetitive Queries (Est.)", value: "15 hours/week" }
      ]
    },
    transformationProcess: {
      strategySummary: "Implemented a multi-pronged AI automation strategy: 1. An AI-powered chatbot on their website and WhatsApp for instant query resolution and appointment booking. 2. Automated SMS and email reminders for appointments. 3. Personalized post-consultation follow-up sequences via email, triggered by CRM data, providing relevant health tips and check-in prompts.",
      timeline: "3 Months (Phase 1: Chatbot & Reminders), +2 Months (Phase 2: Personalized Follow-ups)",
      toolsUsed: ["Custom AI Chatbot Platform (Fictional)", "Twilio (for SMS)", "Brevo (for Email Automation - Fictional Use)", "In-house CRM Integration Module (Fictional)"]
    },
    afterState: {
      resultsSummary: "The AI automation initiative led to significant improvements in patient engagement, operational efficiency, and a reduction in missed appointments. The clinic was able to provide better proactive care and improve overall patient satisfaction.",
      keyResults: [
        { metric: "Average Patient Follow-up Rate (Post-Consultation)", value: "70%", improvement: "Increased by 133%" },
        { metric: "Appointment No-Show Rate", value: "10%", improvement: "Reduced by 60%" },
        { metric: "Staff Time on Repetitive Queries (Est.)", value: "3 hours/week", improvement: "Reduced by 80%" },
        { metric: "Online Appointment Bookings via Chatbot", value: "75 new appointments/month" }
      ],
      fictionalTestimonial: {
        text: "The AI automation solution transformed how we interact with our patients. Our no-show rates have plummeted, and our staff can now focus on more critical patient care tasks. The automated follow-ups have been particularly well-received by our patients!",
        authorName: "Dr. Ananya Sharma (Fictional)",
        authorRole: "Chief Medical Officer, WellnessFirst Clinic Pune (Fictional)"
      }
    },
    keywords: ["healthcare ai automation", "patient engagement pune", "clinic chatbot", "medical crm automation", "reduce no-shows healthcare"]
  }
];
