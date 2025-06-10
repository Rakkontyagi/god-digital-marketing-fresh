import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Award, Users, Target, Zap } from 'lucide-react';
import { StatsGrid } from '../Shared/StatsGrid';

const primaryKeywords = [
  'God Digital Marketing',
  'digital marketing agency india',
  'lead generation services india',
  'ai automation services india'
];

const serviceKeywords = [
  'SEO services india',
  'PPC management india', 
  'social media marketing india',
  'content marketing india',
  'business automation india',
  'roi optimization india'
];

const indiaStats = [
  { icon: MapPin, label: 'States Covered', value: '28+' },
  { icon: Users, label: 'Cities Served', value: '500+' },
  { icon: TrendingUp, label: 'Average ROI', value: '340%' },
  { icon: Award, label: 'Success Rate', value: '98%' }
];

export const IndiaKeywordOptimization: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            India's Most Trusted
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Digital Marketing Partner
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            God Digital Marketing delivers exceptional results for businesses across all Indian states, 
            cities, and industry verticals with our comprehensive digital solutions
          </p>
        </motion.div>

        {/* Primary Keywords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {primaryKeywords.map((keyword, index) => (
            <motion.div
              key={keyword}
              className="p-8 border border-gray-800 bg-black/50 backdrop-blur-sm rounded-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                borderColor: '#ffffff40',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 capitalize">
                {keyword}
              </h3>
              <p className="text-gray-400">
                {index === 0 && "Revolutionary digital marketing solutions that transform businesses across India with AI-powered automation, lead generation, and growth strategies."}
                {index === 1 && "Leading digital marketing agency serving all Indian states with comprehensive SEO, PPC, social media, and automation services for maximum ROI."}
                {index === 2 && "Advanced lead generation systems delivering high-quality prospects across all industries and locations in India with proven conversion strategies."}
                {index === 3 && "Cutting-edge AI automation services streamlining business operations, enhancing productivity, and driving exponential growth across India."}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Service Keywords Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Comprehensive Digital Marketing Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceKeywords.map((keyword, index) => (
              <motion.div
                key={keyword}
                className="p-4 border border-gray-800 bg-black/30 text-center rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#ffffff60',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center justify-center mb-2">
                  {index === 0 && <Target className="w-5 h-5 text-white" />}
                  {index === 1 && <Zap className="w-5 h-5 text-white" />}
                  {index === 2 && <Users className="w-5 h-5 text-white" />}
                  {index === 3 && <TrendingUp className="w-5 h-5 text-white" />}
                  {index === 4 && <Award className="w-5 h-5 text-white" />}
                  {index === 5 && <MapPin className="w-5 h-5 text-white" />}
                </div>
                <span className="text-white text-sm font-medium capitalize">
                  {keyword.replace('india', '').trim()}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* India Statistics */}
        <StatsGrid stats={indiaStats} className="mb-16" />

        {/* India Coverage Content */}
        <motion.div
          className="p-8 border border-gray-800 bg-gradient-to-br from-black/60 to-gray-900/20 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Why Choose God Digital Marketing for Your Business Growth?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Pan-India Expertise</h4>
              <p className="text-gray-400 mb-6">
                Comprehensive understanding of diverse Indian markets, regional preferences, and local business dynamics. 
                Our strategies are tailored for success across all 28 states and 8 union territories.
              </p>
              <h4 className="text-xl font-semibold text-white mb-4">Proven Results</h4>
              <p className="text-gray-400">
                Track record of helping businesses achieve 340%+ ROI improvement with our integrated approach 
                combining lead generation, AI automation, and comprehensive digital marketing solutions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Industry Leadership</h4>
              <p className="text-gray-400 mb-6">
                Recognized expertise across all industry verticals including e-commerce, healthcare, real estate, 
                education, technology, and more with specialized strategies for each sector.
              </p>
              <h4 className="text-xl font-semibold text-white mb-4">Advanced Technology</h4>
              <p className="text-gray-400">
                Cutting-edge AI automation, predictive analytics, and advanced marketing technologies 
                ensuring your business stays ahead of competition and maximizes growth potential.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};