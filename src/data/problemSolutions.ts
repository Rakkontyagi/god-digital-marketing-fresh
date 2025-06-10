export interface ProblemData {
  problemSlug: string;
  problemTitle: string;
  problemDescription: string;
  symptoms: string[];
  relatedKeywords?: string[]; // Keywords related to this problem for SEO
}

export interface SolutionDetail {
  serviceSlug: string;
  // serviceName will be fetched/mapped in the component using comprehensiveServices
  relevanceToProblem: string; // How this service specifically addresses the problem
  specificActions?: string[]; // Concrete actions taken as part of this service for this problem
  // icon?: string; // Optional: if we want to associate an icon with this solution/service
}

export interface SolutionSet {
  problemSlug: string; // Links to a ProblemData entry
  solutionSetTitleTemplate: string; // e.g., "Solutions for {problemTitle} in {cityName}" - to be interpolated
  introductionToSolutions: string; // Overview of your general approach to solving this problem
  solutions: SolutionDetail[]; // Array of services that act as solutions
}

export const allProblems: ProblemData[] = [
  {
    problemSlug: "low-website-traffic",
    problemTitle: "Low Website Traffic",
    problemDescription: "Low website traffic refers to a situation where a website receives a minimal number of visitors, hindering its ability to generate leads, sales, or achieve its online objectives. It's a common challenge for businesses that can stem from various factors.",
    symptoms: [
      "Stagnant or declining visitor numbers in analytics.",
      "Poor search engine rankings for target keywords.",
      "Low engagement on content (e.g., few comments, shares).",
      "Difficulty generating online leads or sales.",
      "Website not appearing in relevant online searches."
    ],
    relatedKeywords: ["low website traffic", "increase website visitors", "website traffic solutions", "poor seo rankings", "get more leads online"]
  }
];

export const allSolutionSets: SolutionSet[] = [
  {
    problemSlug: "low-website-traffic",
    solutionSetTitleTemplate: "Effective Strategies to Combat {problemTitle} in {cityName}",
    introductionToSolutions: "Boosting your website traffic requires a multi-faceted approach. We analyze the root causes of low traffic and implement targeted strategies across SEO, content, and paid channels to attract qualified visitors to your site.",
    solutions: [
      {
        serviceSlug: "seo-services", // from comprehensiveServices
        relevanceToProblem: "Improves your website's visibility in search engine results for relevant keywords, driving organic (free) traffic.",
        specificActions: [
          "In-depth keyword research and competitor analysis.",
          "Comprehensive on-page SEO optimization (titles, metas, content, schema).",
          "Technical SEO audit and fixes (site speed, mobile-friendliness, crawlability).",
          "Quality link building and off-page SEO strategies."
        ]
      },
      {
        serviceSlug: "content-marketing", // from comprehensiveServices
        relevanceToProblem: "Creates valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.",
        specificActions: [
          "Content strategy development based on audience research and keywords.",
          "Creation of high-quality blog posts, articles, infographics, and other content formats.",
          "Content distribution and promotion across relevant channels.",
          "SEO content optimization to ensure visibility."
        ]
      },
      {
        serviceSlug: "ppc-advertising", // from comprehensiveServices
        relevanceToProblem: "Drives targeted traffic to your website quickly through paid search engine and social media ads.",
        specificActions: [
          "Campaign setup and management on Google Ads, Bing Ads, and social platforms.",
          "Keyword targeting and ad copy creation for PPC.",
          "Landing page optimization for conversion.",
          "Budget management and ROI tracking for paid campaigns."
        ]
      },
      {
        serviceSlug: "social-media-marketing", // from comprehensiveServices
        relevanceToProblem: "Increases brand visibility and drives traffic from social media platforms by engaging with your target audience.",
        specificActions: [
          "Social media strategy development.",
          "Content creation and scheduling for social platforms.",
          "Community engagement and management.",
          "Social media advertising campaigns."
        ]
      }
    ]
  }
];
