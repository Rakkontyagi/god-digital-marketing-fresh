import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features?: string[];
}

interface ServiceGridProps {
  services: Service[];
  title?: string;
  description?: string;
  columns?: 2 | 3 | 4;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  title,
  description,
  columns = 3
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {(title || description) && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
            )}
            {description && (
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">{description}</p>
            )}
          </motion.div>
        )}

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              {service.features && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1 h-1 bg-white rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex items-center text-white group-hover:text-gray-300 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};