import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEO/SEOHead';
import { TrustSignals } from '../components/TrustSignals';
import { Testimonials } from '../components/Testimonials';
import { MapPin, Users, Award, Clock } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: MapPin, label: "Cities Served", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "2000+" },
    { icon: Award, label: "Success Rate", value: "98%" },
    { icon: Clock, label: "Years Experience", value: "8+" }
  ];

  return (
    <>
      <SEOHead
        title="About Us | God Digital Marketing"
        description="Learn about God Digital Marketing - India's leading digital marketing agency. Discover our mission, values, and commitment to delivering exceptional results."
        keywords={["digital marketing agency", "about us", "our story", "our mission", "our team", "our values"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                About God Digital Marketing
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                India's premier digital marketing agency, delivering exceptional results through innovation, expertise, and dedication.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-center mb-4 text-blue-400">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Founded in 2016, God Digital Marketing has grown from a small team of passionate marketers to India's leading digital marketing agency. Our journey has been marked by continuous innovation, unwavering commitment to client success, and a deep understanding of the Indian digital landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses across India with cutting-edge digital marketing solutions that drive growth, enhance brand visibility, and deliver measurable ROI. We believe in creating lasting partnerships with our clients and helping them achieve their business objectives through innovative digital strategies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Innovation and continuous learning</li>
                  <li>• Client success and satisfaction</li>
                  <li>• Data-driven decision making</li>
                  <li>• Transparency and accountability</li>
                  <li>• Excellence in execution</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <TrustSignals />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join thousands of successful businesses that trust God Digital Marketing for their digital growth.
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 