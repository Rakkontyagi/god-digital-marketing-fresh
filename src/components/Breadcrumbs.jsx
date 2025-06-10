import React from 'react';
import { Link } from 'react-router-dom';
import { generateBreadcrumbs } from '../utils/internalLinking';

const Breadcrumbs = ({ currentPage }) => {
  const breadcrumbs = generateBreadcrumbs(currentPage);

  return (
    <nav className="py-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <svg
                className="h-4 w-4 text-gray-400 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-400" aria-current="page">
                {crumb.title}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {crumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 