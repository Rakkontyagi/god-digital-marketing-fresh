import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
  isActive?: boolean;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ items }) => {
  return (
    <motion.nav
      className="py-4 px-4 bg-black/30 backdrop-blur-sm border-b border-gray-800"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <a
              href="/"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
            </a>
          </li>
          
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-gray-600" />
              {item.isActive ? (
                <span className="text-white font-medium">{item.name}</span>
              ) : (
                <a
                  href={item.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
};