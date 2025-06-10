import React from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEO/SEOHead';
import { TrustSignals } from '../components/TrustSignals';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { getContactSchema, getBreadcrumbSchema } from '../../utils/seoStructuredData';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9999999999", "+91 8888888888"],
      color: "text-green-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@goddigitalmarketing.com", "support@goddigitalmarketing.com"],
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Digital Plaza, Cyber City", "Gurgaon, Haryana 122002"],
      color: "text-purple-400"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
      color: "text-orange-400"
    }
  ];

  const canonicalUrl = "https://goddigitalmarketing.com/contact/";
  const breadcrumbs = [
    { title: 'Home', url: 'https://goddigitalmarketing.com/' },
    { title: 'Contact', url: canonicalUrl }
  ];

  return (
    <>
      <SEOHead
        title="Contact Us | God Digital Marketing"
        description="Get in touch with India's leading digital marketing agency. Contact us for a free consultation and discover how we can transform your digital presence."
        keywords={["contact us", "digital marketing agency contact", "free consultation", "get in touch"]}
        canonicalUrl={canonicalUrl}
        structuredData={[
          getContactSchema(),
          getBreadcrumbSchema(breadcrumbs)
        ]}
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your digital presence? Get in touch with our team of experts for a free consultation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                    <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                      <span className="text-gray-300">Free initial consultation and strategy session</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                      <span className="text-gray-300">Dedicated account manager for personalized service</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                      <span className="text-gray-300">Transparent reporting and regular updates</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                      <span className="text-gray-300">Proven track record of delivering results</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
                  <p className="text-gray-300">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <TrustSignals />

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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Schedule a free consultation with our experts and discover how we can help transform your digital presence.
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 