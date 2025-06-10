import React from 'react';
import { motion } from 'framer-motion';
import { getRelatedContent, generateAnchorText } from '../utils/internalLinking';

const InternalLinking = ({ currentPage }) => {
  const relatedContent = getRelatedContent(currentPage);

  return (
    <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Related Resources
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedContent.map((content, index) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-800/70 transition-all"
          >
            <a
              href={content.path}
              className="block group"
              aria-label={`Learn more about ${content.title}`}
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {content.title}
              </h3>
              {content.excerpt && (
                <p className="mt-2 text-gray-300 text-sm">
                  {content.excerpt}
                </p>
              )}
              <span className="mt-3 inline-block text-blue-400 text-sm group-hover:underline">
                {generateAnchorText(content)}
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InternalLinking; 