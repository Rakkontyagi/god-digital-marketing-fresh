import React, { useState, useEffect, useRef } from 'react';
import { allIndianLocations } from '../../data/comprehensiveLocations';
import { getServiceMetrics, searchCities, type CityLinkAnalytics } from '../../data/serviceLocationData';

interface ServiceLocationFooterProps {
  service: {
    name: string;
    slug: string;
  };
  enableAnalytics?: boolean;
  customTitle?: string;
  maxMobileCities?: number;
}

export const EnhancedServiceLocationsFooter: React.FC<ServiceLocationFooterProps> = ({ 
  service, 
  enableAnalytics = true,
  customTitle,
  maxMobileCities = 10
}) => {
  // Flatten all cities and add state info
  const allCities = allIndianLocations.flatMap(state =>
    state.cities.map(city => ({ ...city, state: state.state, stateSlug: state.stateSlug }))
  );

  // Get service-specific metrics
  const serviceMetrics = getServiceMetrics(service.slug);
  
  // Priority cities with enhanced data
  const priorityCities = serviceMetrics?.metroCities || 
    allCities.filter(city => city.isMetro).slice(0, 8).map(city => ({
      name: city.name,
      slug: city.slug,
      performance: `Tier ${city.tier} City`
    }));

  // State-wise grouping
  const states = allIndianLocations;
  
  // Search state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Mobile show more state
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);
  const [loadedStates, setLoadedStates] = useState<string[]>([]);

  // User location detection (mock implementation)
  const [userLocation, setUserLocation] = useState<string | null>(null);

  // Analytics tracking function
  const trackCityLinkClick = (analyticsData: CityLinkAnalytics) => {
    if (!enableAnalytics) return;
    
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'city_link_click', {
        city: analyticsData.city,
        service: analyticsData.service,
        source_page: analyticsData.source_page,
        link_type: analyticsData.link_type
      });
    }

    // Console logging for development
    console.log('City link clicked:', analyticsData);
  };

  // Handle search with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      if (searchQuery.trim()) {
        const results = searchCities(searchQuery, allCities);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery, allCities]);

  // Lazy load state sections
  const handleStateExpand = (stateSlug: string) => {
    if (!loadedStates.includes(stateSlug)) {
      setLoadedStates((prev: string[]) => [...prev, stateSlug]);
    }
  };

  // Get user's nearby states (mock implementation)
  useEffect(() => {
    // In a real implementation, you'd use geolocation API
    // For now, we'll prioritize a few major states
    const priorityStates = ['maharashtra', 'karnataka', 'delhi', 'tamil-nadu'];
    setLoadedStates(priorityStates);
  }, []);

  // Service-specific title and description
  const getServiceSpecificContent = () => {
    switch (service.slug) {
      case 'seo-services':
        return {
          title: customTitle || `SEO Services Available in 500+ Cities Across India`,
          description: `Get professional SEO services in your city. We help businesses rank higher on Google in these locations:`,
          metroTitle: `Metro Cities - SEO Services`,
          linkSuffix: 'SEO'
        };
      case 'social-media-marketing':
        return {
          title: customTitle || `Social Media Marketing Services in 500+ Cities`,
          description: `Boost your social media presence with our expert SMM services available in these cities:`,
          metroTitle: `Top Cities for Social Media Marketing`,
          linkSuffix: 'SMM'
        };
      case 'ppc-advertising':
        return {
          title: customTitle || `PPC Advertising Services Across India`,
          description: `Drive targeted traffic with our Google Ads & Facebook Ads management in these cities:`,
          metroTitle: `High-ROI PPC Markets`,
          linkSuffix: 'PPC'
        };
      default:
        return {
          title: customTitle || `${service.name} Available in 500+ Cities Across India`,
          description: `Get professional ${service.name.toLowerCase()} in your city. We help businesses grow in these locations:`,
          metroTitle: `Metro Cities - ${service.name}`,
          linkSuffix: service.name.split(' ')[0]
        };
    }
  };

  const content = getServiceSpecificContent();

  return (
    <section className="service-locations-footer bg-gray-900 border-t border-gray-700 py-12 mt-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Priority Cities Section */}
        <div className="priority-cities mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            {content.metroTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {priorityCities.map(city => (
              <a
                key={city.slug}
                href={`/${city.slug}/${service.slug}/`}
                className="city-link featured group p-4 bg-white/5 rounded-lg hover:bg-blue-900/20 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                onClick={() => trackCityLinkClick({
                  city: city.name,
                  service: service.name,
                  source_page: typeof window !== 'undefined' ? window.location.pathname : '',
                  link_type: 'priority'
                })}
                data-city={city.name}
                data-service={service.slug}
              >
                <div className="flex flex-col space-y-2">
                  <span className="city-name text-white font-semibold text-lg group-hover:text-blue-300">
                    {city.name}
                  </span>
                  {serviceMetrics?.serviceSlug === 'seo-services' && 'clientCount' in city && city.clientCount && (
                    <span className="service-count text-green-400 text-sm font-medium">
                      {city.clientCount}
                    </span>
                  )}
                  {serviceMetrics?.serviceSlug === 'social-media-marketing' && 'highlight' in city && city.highlight && (
                    <span className="highlight text-purple-400 text-sm font-medium">
                      {city.highlight}
                    </span>
                  )}
                  {serviceMetrics?.serviceSlug === 'ppc-advertising' && 'roiIndicator' in city && city.roiIndicator && (
                    <span className="roi-indicator text-yellow-400 text-sm font-bold">
                      {city.roiIndicator}
                    </span>
                  )}
                  {'performance' in city && city.performance && (
                    <span className="performance text-gray-400 text-xs">
                      {city.performance}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* State-wise Expandable Sections */}
        <div className="state-wise-cities mb-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Explore by State
          </h3>
          <div className="grid gap-4">
            {states.map(state => (
              <details 
                className="state-section bg-white/5 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors" 
                key={state.stateSlug}
                open={loadedStates.includes(state.stateSlug)}
                onToggle={(e) => {
                  if ((e.target as HTMLDetailsElement).open) {
                    handleStateExpand(state.stateSlug);
                  }
                }}
              >
                <summary className="state-header cursor-pointer px-6 py-4 text-white font-semibold flex items-center justify-between hover:bg-white/5 rounded-lg">
                  <h4 className="text-lg">
                    {state.state} - {service.name}
                    <span className="city-count text-blue-400 ml-2 text-base font-normal">
                      ({state.cities.length} Cities)
                    </span>
                  </h4>
                  <svg className="w-5 h-5 transform transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                {loadedStates.includes(state.stateSlug) && (
                  <div className="cities-grid p-6 pt-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-4">
                      {state.cities.map(city => (
                        <a
                          key={city.slug}
                          href={`/${city.slug}/${service.slug}/`}
                          className="text-blue-300 hover:text-white text-sm py-1 px-2 rounded hover:bg-white/10 transition-colors"
                          onClick={() => trackCityLinkClick({
                            city: city.name,
                            service: service.name,
                            source_page: typeof window !== 'undefined' ? window.location.pathname : '',
                            link_type: 'state'
                          })}
                        >
                          {city.name} {content.linkSuffix}
                        </a>
                      ))}
                    </div>
                    <a
                      href={`/${state.stateSlug}/${service.slug}/`}
                      className="view-all-state inline-flex items-center text-blue-400 hover:text-white text-sm font-medium group"
                    >
                      View All {state.state} Cities
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>

        {/* Advanced City Search */}
        <div className="city-search-section mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            Find {service.name} in Your City
          </h3>
          <div className="search-container relative">
            <div className="relative">
              <input
                type="search"
                id="citySearch"
                placeholder="Type your city name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="city-search-input w-full p-4 pr-12 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                autoComplete="off"
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {(searchQuery || isSearchFocused) && (
              <div className="search-results absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl z-50 max-h-80 overflow-y-auto">
                {searchResults.length === 0 && searchQuery && (
                  <div className="p-4 text-gray-400 text-center">
                    No cities found matching "{searchQuery}"
                  </div>
                )}
                {searchResults.length === 0 && !searchQuery && (
                  <div className="p-4 text-gray-400 text-center">
                    Start typing to search cities...
                  </div>
                )}
                <div className="grid gap-1 p-2">
                  {searchResults.map(city => (
                    <a
                      key={`${city.slug}-search`}
                      href={`/${city.slug}/${service.slug}/`}
                      className="flex items-center justify-between p-3 text-blue-300 hover:text-white hover:bg-gray-700 rounded text-sm transition-colors"
                      onClick={() => {
                        trackCityLinkClick({
                          city: city.name,
                          service: service.name,
                          source_page: typeof window !== 'undefined' ? window.location.pathname : '',
                          link_type: 'search'
                        });
                        setSearchQuery('');
                        setIsSearchFocused(false);
                      }}
                    >
                      <span>
                        <strong>{city.name}</strong> {content.linkSuffix}
                      </span>
                      <span className="text-xs text-gray-400">
                        {city.state} • Tier {city.tier}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 mt-3 text-center">
            Don't see your city? <a href="/contact/" className="text-blue-400 hover:text-blue-300 underline">Contact us</a> - we're expanding rapidly!
          </p>
        </div>

        {/* Mobile Progressive Loading */}
        <div className="mobile-city-links md:hidden">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Quick Access Cities
          </h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {allCities.slice(0, showAllMobile ? Math.min(50, allCities.length) : maxMobileCities).map(city => (
              <a
                key={`${city.slug}-mobile`}
                href={`/${city.slug}/${service.slug}/`}
                className="text-blue-300 hover:text-white text-sm py-2 px-3 bg-white/5 rounded hover:bg-white/10 transition-colors text-center"
                onClick={() => trackCityLinkClick({
                  city: city.name,
                  service: service.name,
                  source_page: typeof window !== 'undefined' ? window.location.pathname : '',
                  link_type: 'mobile'
                })}
              >
                {city.name} {content.linkSuffix}
              </a>
            ))}
          </div>
          {!showAllMobile && allCities.length > maxMobileCities && (
            <div className="text-center">
              <button
                className="load-more-mobile bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => setShowAllMobile(true)}
              >
                Load More Cities 
                <span className="remaining-count ml-2 text-blue-200">
                  ({allCities.length - maxMobileCities}+ remaining)
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Performance Stats Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">28</div>
              <div className="text-gray-400 text-sm">States & UTs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Serving businesses across India with localized {service.name.toLowerCase()} strategies
          </p>
        </div>
      </div>
    </section>
  );
};