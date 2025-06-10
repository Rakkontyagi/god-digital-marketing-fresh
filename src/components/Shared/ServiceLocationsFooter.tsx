import React, { useState } from 'react';
import { allIndianLocations } from '../../data/comprehensiveLocations';

export const ServiceLocationsFooter = ({ service }) => {
  // Flatten all cities and add state info
  const allCities = allIndianLocations.flatMap(state =>
    state.cities.map(city => ({ ...city, state: state.state, stateSlug: state.stateSlug }))
  );
  // Metro cities for this service
  const metroCities = allCities.filter(city => city.isMetro).slice(0, 8);
  // State-wise grouping
  const states = allIndianLocations;
  // Search state
  const [search, setSearch] = useState('');
  const filteredCities = search
    ? allCities.filter(city => city.name.toLowerCase().includes(search.toLowerCase()))
    : [];
  // Mobile show more
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="service-locations-footer bg-black border-t border-gray-800 py-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.name} Available in 500+ Cities Across India</h2>
        <p className="text-gray-300 mb-8">Get professional {service.name.toLowerCase()} in your city. We help businesses rank higher on Google in these locations:</p>
        {/* Metro Cities */}
        <div className="priority-cities mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Metro Cities - {service.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {metroCities.map(city => (
              <a
                key={city.slug}
                href={`/${city.slug}/${service.slug}/`}
                className="city-link featured p-3 bg-white/5 rounded hover:bg-blue-900/20 transition-colors flex flex-col"
              >
                <span className="city-name text-white font-medium">{city.name}</span>
                <span className="text-xs text-blue-300">Metro City</span>
              </a>
            ))}
          </div>
        </div>
        {/* State-wise Sections */}
        <div className="state-wise-cities mb-8">
          {states.map(state => (
            <details className="state-section mb-4 bg-white/5 rounded" key={state.stateSlug} open>
              <summary className="state-header cursor-pointer px-4 py-2 text-white font-semibold flex items-center">
                <h3 className="mr-2">{state.state} - {service.name} <span className="city-count text-blue-300 ml-2">({state.cities.length} Cities)</span></h3>
              </summary>
              <div className="cities-grid grid grid-cols-2 md:grid-cols-4 gap-2 px-4 pb-4">
                {state.cities.map(city => (
                  <a
                    key={city.slug}
                    href={`/${city.slug}/${service.slug}/`}
                    className="text-blue-300 hover:text-white text-sm"
                  >
                    {city.name} {service.name.split(' ')[0]}
                  </a>
                ))}
                <a
                  href={`/${state.stateSlug}/${service.slug}/`}
                  className="view-all-state text-blue-400 hover:text-white text-xs col-span-full mt-2"
                >
                  View All {state.state} Cities →
                </a>
              </div>
            </details>
          ))}
        </div>
        {/* City Search */}
        <div className="city-search-section mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Find {service.name} in Your City</h3>
          <input
            type="search"
            placeholder="Type your city name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="city-search-input w-full p-2 rounded bg-gray-900 text-white border border-gray-700 mb-2"
            autoComplete="off"
          />
          {search && (
            <div className="search-results grid grid-cols-2 md:grid-cols-4 gap-2">
              {filteredCities.length === 0 && <span className="text-gray-400 col-span-full">No cities found.</span>}
              {filteredCities.map(city => (
                <a
                  key={city.slug}
                  href={`/${city.slug}/${service.slug}/`}
                  className="text-blue-300 hover:text-white text-sm"
                >
                  {city.name} {service.name.split(' ')[0]}
                </a>
              ))}
            </div>
          )}
          <p className="text-xs text-gray-400 mt-2">Don't see your city? <a href="/contact/" className="underline">Contact us</a> - we're expanding rapidly!</p>
        </div>
        {/* Mobile Show More */}
        <div className="mobile-city-links md:hidden">
          <div className="initial-cities grid grid-cols-2 gap-2 mb-2">
            {allCities.slice(0, showAll ? 50 : 10).map(city => (
              <a
                key={city.slug}
                href={`/${city.slug}/${service.slug}/`}
                className="text-blue-300 hover:text-white text-sm"
              >
                {city.name} {service.name.split(' ')[0]}
              </a>
            ))}
          </div>
          {!showAll && (
            <button
              className="load-more-mobile text-blue-400 underline text-xs mt-2"
              onClick={() => setShowAll(true)}
            >
              Show More Cities ({allCities.length - 10}+ remaining)
            </button>
          )}
        </div>
      </div>
    </section>
  );
}; 