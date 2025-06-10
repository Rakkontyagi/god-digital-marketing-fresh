// This is a stub. Replace with actual LLM/MCP call for real use.
export async function generateLSIKeywordsAI(topic) {
  // Simulate LLM output for demo
  const lsi = [
    `${topic} company`,
    `${topic} agency`,
    `${topic} experts`,
    `${topic} pricing`,
    `${topic} packages`,
    `${topic} for small business`,
    `${topic} for startups`,
    `${topic} results`,
    `${topic} case studies`,
    `${topic} reviews`,
    `${topic} best practices`,
    `digital marketing in ${topic.split(' ').pop()}`,
    `online marketing in ${topic.split(' ').pop()}`,
    `local SEO in ${topic.split(' ').pop()}`,
    `Google ranking ${topic.split(' ').pop()}`,
    `lead generation ${topic.split(' ').pop()}`
  ];
  const entities = [
    'Google', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube',
    'SERP', 'organic traffic', 'conversion rate', 'keyword research',
    'on-page SEO', 'off-page SEO', 'backlinks', 'content marketing',
    'Google My Business', 'local citations', 'analytics', 'ROI'
  ];
  const questions = [
    `How to choose the best ${topic}?`,
    `What are the benefits of ${topic}?`,
    `How much does ${topic} cost in India?`,
    `What is the ROI of ${topic}?`,
    `How to improve ${topic} results?`
  ];
  return Array.from(new Set([...lsi, ...entities, ...questions]));
} 