import React from 'react';

const AuthorBio = ({ author }) => {
  const {
    name,
    role,
    bio,
    image,
    socialLinks = {},
    certifications = [],
    expertise = []
  } = author;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 my-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-1">{role}</p>
          
          <p className="mt-4 text-gray-700">{bio}</p>
          
          {expertise.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900">Areas of Expertise:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {certifications.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900">Certifications:</h4>
              <ul className="mt-2 space-y-1">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {Object.keys(socialLinks).length > 0 && (
            <div className="mt-4 flex gap-4">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio; 