export interface CompetitorData {
  name: string; // Full display name, e.g., "NextGen Automations Inc. (Fictional)"
  slug: string; // e.g., "nextgen-automations"
  fictionalUnderview?: string; // A brief, neutral overview of the fictional competitor
  fictionalStrengths: string[]; // List of their perceived strengths
  fictionalWeaknesses: string[]; // List of their perceived weaknesses or areas for comparison
}

export interface OurServiceComparisonPoints {
  ourServiceSlug: string; // Slug of your service being positioned as an alternative
  competitorSlug: string; // Slug of the competitor
  ourAdvantages: string[]; // Key advantages your service offers over this competitor
  ourDifferentiators: string[]; // Unique selling points of your service in this comparison
  comparisonTitle?: string; // e.g., "Why Choose Our AI Automation over NextGen?"
}

export const fictionalCompetitors: CompetitorData[] = [
  {
    name: "AutomateLeads Corp (Fictional)",
    slug: "automateleads-corp",
    fictionalUnderview: "A well-known fictional provider of general sales and marketing automation tools, often catering to larger enterprises with established, though sometimes rigid, solutions.",
    fictionalStrengths: ["Broad feature set for general purposes", "Large existing fictional customer base", "Established fictional brand presence"],
    fictionalWeaknesses: ["Can be complex and costly for specialized needs like AI-driven personalization", "Slower to adopt cutting-edge AI advancements", "Customer support can be impersonal for smaller clients (fictional observation)"]
  },
  {
    name: "QuickReach Digital (Fictional)",
    slug: "quickreach-digital",
    fictionalUnderview: "A fictional digital marketing agency known for rapid deployment of standard SEO and PPC campaigns, popular with small businesses needing quick online visibility.",
    fictionalStrengths: ["Fast setup for basic campaigns", "Affordable entry-level packages (fictional pricing)", "Good for local SEO (fictional focus)"],
    fictionalWeaknesses: ["Limited expertise in advanced AI-powered marketing strategies", "Less focus on deep data analytics and ROI optimization", "May not offer highly customized solutions for niche industries (fictional assessment)"]
  }
];

export const ourServiceComparisons: OurServiceComparisonPoints[] = [
  {
    ourServiceSlug: "ai-automation",
    competitorSlug: "automateleads-corp",
    ourAdvantages: [
      "More agile and specialized in AI-driven marketing and business automation.",
      "Faster implementation of bespoke AI models tailored to specific business challenges.",
      "Focus on cutting-edge AI technologies like predictive analytics and hyper-personalization.",
      "Dedicated expert support with a focus on achieving measurable ROI through AI."
    ],
    ourDifferentiators: [
      "Proprietary AI algorithms for deeper insights (fictional).",
      "Flexible engagement models suitable for businesses of all sizes looking for specialized AI solutions.",
      "Commitment to transparent reporting and continuous AI performance optimization."
    ],
    comparisonTitle: "Why Our AI Automation is a Smarter Choice Than AutomateLeads Corp (Fictional)"
  },
  {
    ourServiceSlug: "ai-automation",
    competitorSlug: "quickreach-digital",
    ourAdvantages: [
      "Goes beyond standard campaigns by embedding AI for superior targeting and efficiency.",
      "Provides deep data analytics and predictive insights, not just visibility reports.",
      "Automates complex decision-making processes in marketing, not just task execution.",
      "Focuses on long-term strategic growth through AI, not just short-term wins."
    ],
    ourDifferentiators: [
      "Ability to build custom AI solutions that integrate seamlessly with your existing marketing stack (fictional capability).",
      "Expertise in leveraging AI for significant competitive advantages in niche markets.",
      "Proactive AI-driven strategy recommendations and performance forecasting."
    ],
    comparisonTitle: "Advance Beyond Basic Digital: AI Automation vs. QuickReach Digital (Fictional)"
  }
];
