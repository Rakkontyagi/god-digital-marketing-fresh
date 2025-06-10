// AnchorTextUtils.ts
// Centralized anchor text generator for all navigation, footer, sidebar, and body links

export type AnchorType = 'service' | 'location' | 'industry';

// Pools of LSI/entity/variation-rich anchor text for each type
const serviceAnchors = [
  (item: any, ctx?: any) => `${item.name} Solutions`,
  (item: any, ctx?: any) => `Expert ${item.name}`,
  (item: any, ctx?: any) => `Grow with ${item.name}`,
  (item: any, ctx?: any) => `Why Choose ${item.name}?`,
  (item: any, ctx?: any) => `Trusted ${item.name} Team`,
  (item: any, ctx?: any) => `Innovative ${item.name}`,
  (item: any, ctx?: any) => ctx?.city ? `${item.name} in ${ctx.city}` : null,
  (item: any, ctx?: any) => ctx?.state ? `${item.name} for ${ctx.state}` : null,
  (item: any, ctx?: any) => ctx?.industry ? `${item.name} for ${ctx.industry}` : null,
];

const locationAnchors = [
  (item: any, ctx?: any) => `Digital Growth in ${item.state || item.name}`,
  (item: any, ctx?: any) => `${item.state || item.name} Success Stories`,
  (item: any, ctx?: any) => `Why Brands in ${item.state || item.name} Choose Us`,
  (item: any, ctx?: any) => `Explore ${item.state || item.name} Services`,
  (item: any, ctx?: any) => `${item.state || item.name}: Business Automation`,
  (item: any, ctx?: any) => `Results in ${item.state || item.name}`,
  (item: any, ctx?: any) => ctx?.service ? `${ctx.service} in ${item.name}` : null,
];

const industryAnchors = [
  (item: any, ctx?: any) => `${item.name} Digitalization`,
  (item: any, ctx?: any) => `${item.name} Growth Solutions`,
  (item: any, ctx?: any) => `Marketing for ${item.name}`,
  (item: any, ctx?: any) => `AI for ${item.name}`,
  (item: any, ctx?: any) => `Best in ${item.name} Marketing`,
  (item: any, ctx?: any) => `Innovating ${item.name}`,
  (item: any, ctx?: any) => ctx?.service ? `${ctx.service} for ${item.name}` : null,
];

// Main utility: returns a diversified, deduplicated, context-aware anchor text
export function getAnchorText(type: AnchorType, item: any, context?: any, used: Set<string> = new Set()): string {
  if (!item || !item.name) return '';
  let pool: ((item: any, ctx?: any) => string | null)[] = [];
  if (type === 'service') pool = serviceAnchors;
  if (type === 'location') pool = locationAnchors;
  if (type === 'industry') pool = industryAnchors;
  // Shuffle pool for diversity
  const shuffled = pool.sort(() => 0.5 - Math.random());
  for (const fn of shuffled) {
    const anchor = fn(item, context);
    if (anchor && !used.has(anchor) && anchor !== item.name && !/undefined/i.test(anchor)) {
      used.add(anchor);
      return anchor;
    }
  }
  // Fallback to item.name if nothing else
  return item.name;
}
