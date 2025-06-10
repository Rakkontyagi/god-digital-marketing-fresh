import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

interface ContactSectionProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get Started Today",
  description,
  phone = "+91 9999999999",
  email = "contact@goddigitalmarketing.com",
  buttonText = "Get Free Consultation",
  onButtonClick
}) => {
  return (
    <motion.div
      className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      
      {description && (
        <p className="text-gray-300 mb-6">{description}</p>
      )}
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-white" />
          <span className="text-gray-300">{phone}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-white" />
          <span className="text-gray-300">{email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-white" />
          <span className="text-gray-300">24/7 Support Available</span>
        </div>
      </div>
      
      <motion.button
        className="w-full px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onButtonClick}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};