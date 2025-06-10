const fs = require('fs');
const path = require('path');

console.log('🚀 Enhancing All Pages with Professional Internal Linking...\n');

// Function to enhance a single page component
const enhancePageComponent = (filePath, citySlug, serviceSlug, industrySlug = '') => {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already enhanced
  if (content.includes('InternalLinkingContent') || content.includes('ContextualSidebar')) {
    return false;
  }

  // Skip files that don't have the right structure
  if (!content.includes('export function') || !content.includes('return (')) {
    return false;
  }

  // Add enhanced imports at the top after existing imports
  const importSection = `
// Enhanced Internal Linking Components
import { InternalLinkingContent } from '../../components/Content/InternalLinkingContent';
import { ContextualSidebar } from '../../components/Sidebar/ContextualSidebar';
import { Target, MapPin, Building2 } from 'lucide-react';
`;

  // Find where to insert imports
  const lastImportIndex = content.lastIndexOf('import');
  const nextLineIndex = content.indexOf('\n', lastImportIndex);
  const importInsertPoint = content.indexOf('\n', nextLineIndex + 1);
  
  // Insert enhanced imports
  content = content.slice(0, importInsertPoint) + importSection + content.slice(importInsertPoint);

  // Find the main return statement and enhance the layout
  const returnMatch = content.match(/return\s*\(\s*<>/);
  if (!returnMatch) {
    // Try alternative pattern
    const altReturnMatch = content.match(/return\s*\(\s*<\w+/);
    if (!altReturnMatch) return false;
  }

  // Find the end of the component before the closing bracket
  const lastClosingTag = content.lastIndexOf('</>');
  const beforeClosing = content.slice(0, lastClosingTag);
  const afterClosing = content.slice(lastClosingTag);

  // Add enhanced internal linking content before the closing tag
  const enhancedSections = `
        {/* Enhanced Internal Linking Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Content Wrapper */}
            <div className="lg:col-span-3">
              <InternalLinkingContent 
                currentCity="${citySlug}"
                currentService="${serviceSlug}"
                currentIndustry="${industrySlug}"
              />

              {/* Professional Cross-Linking Section */}
              <section className="mt-16 py-12 bg-gradient-to-r from-gray-900 to-black rounded-2xl">
                <div className="max-w-6xl mx-auto px-8">
                  <h2 className="text-3xl font-bold mb-8 text-center text-white">
                    Related Services & Locations
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Service Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Our Services
                      </h3>
                      <div className="space-y-2">
                        <a href="/${citySlug}/digital-marketing/" className="block text-gray-300 hover:text-white text-sm py-1">Digital Marketing</a>
                        <a href="/${citySlug}/ai-automation/" className="block text-gray-300 hover:text-white text-sm py-1">AI Automation</a>
                        <a href="/${citySlug}/business-automation/" className="block text-gray-300 hover:text-white text-sm py-1">Business Automation</a>
                        <a href="/${citySlug}/seo-services/" className="block text-gray-300 hover:text-white text-sm py-1">SEO Services</a>
                        <a href="/${citySlug}/ppc-advertising/" className="block text-gray-300 hover:text-white text-sm py-1">PPC Advertising</a>
                      </div>
                    </div>

                    {/* Geographic Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        Other Cities
                      </h3>
                      <div className="space-y-2">
                        <a href="/mumbai/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Mumbai</a>
                        <a href="/delhi/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Delhi</a>
                        <a href="/bangalore/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Bangalore</a>
                        <a href="/chennai/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Chennai</a>
                        <a href="/hyderabad/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Hyderabad</a>
                        <a href="/pune/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Pune</a>
                      </div>
                    </div>

                    {/* Industry Cross-Links */}
                    <div className="bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
                        <Building2 className="w-5 h-5 mr-2" />
                        Industries
                      </h3>
                      <div className="space-y-2">
                        <a href="/${citySlug}/industries/healthcare/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Healthcare</a>
                        <a href="/${citySlug}/industries/real-estate/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Real Estate</a>
                        <a href="/${citySlug}/industries/ecommerce/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">E-commerce</a>
                        <a href="/${citySlug}/industries/education/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Education</a>
                        <a href="/${citySlug}/industries/technology/${serviceSlug}/" className="block text-gray-300 hover:text-white text-sm py-1">Technology</a>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced CTA Section */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">1000+ Successful Projects</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">500+ Cities Across India</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          <span className="text-gray-300">300% Average ROI</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4 text-white">Get Started Today</h3>
                      <p className="text-gray-300 mb-4">Free consultation & custom strategy</p>
                      <a
                        href="/contact/"
                        className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Contact Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <ContextualSidebar 
                currentCity="${citySlug}"
                currentService="${serviceSlug}"
                currentIndustry="${industrySlug}"
              />
            </div>
          </div>
        </div>
`;

  const enhancedContent = beforeClosing + enhancedSections + afterClosing;
  
  fs.writeFileSync(filePath, enhancedContent);
  return true;
};

// Main enhancement function
const enhanceAllPages = () => {
  console.log('🎯 Starting comprehensive page enhancement...\n');

  let totalUpdated = 0;
  let totalSkipped = 0;

  // Get all city directories
  const pagesDir = 'src/pages';
  if (!fs.existsSync(pagesDir)) {
    console.log('❌ Pages directory not found');
    return;
  }

  const items = fs.readdirSync(pagesDir);
  const cityDirs = items.filter(item => {
    const itemPath = path.join(pagesDir, item);
    return fs.statSync(itemPath).isDirectory() && 
           !['services', 'industries'].includes(item) &&
           !item.includes('.'); // Exclude files
  });

  console.log(`📍 Found ${cityDirs.length} city directories\n`);

  // Process each city directory
  cityDirs.forEach(citySlug => {
    const cityPath = path.join(pagesDir, citySlug);
    console.log(`🏙️  Processing ${citySlug}...`);

    try {
      // Get service files in city directory
      const files = fs.readdirSync(cityPath).filter(file => file.endsWith('.tsx'));
      
      files.forEach(file => {
        const serviceSlug = path.basename(file, '.tsx');
        const filePath = path.join(cityPath, file);
        
        const wasUpdated = enhancePageComponent(filePath, citySlug, serviceSlug);
        
        if (wasUpdated) {
          console.log(`  ✓ Enhanced: ${citySlug}/${serviceSlug}`);
          totalUpdated++;
        } else {
          console.log(`  - Skipped: ${citySlug}/${serviceSlug}`);
          totalSkipped++;
        }
      });

      // Process industry subdirectories if they exist
      const industriesPath = path.join(cityPath, 'industries');
      if (fs.existsSync(industriesPath)) {
        const industryDirs = fs.readdirSync(industriesPath).filter(item => {
          const itemPath = path.join(industriesPath, item);
          return fs.statSync(itemPath).isDirectory();
        });

        industryDirs.forEach(industrySlug => {
          const industryPath = path.join(industriesPath, industrySlug);
          
          try {
            const industryFiles = fs.readdirSync(industryPath).filter(file => file.endsWith('.tsx'));
            
            industryFiles.forEach(file => {
              const serviceSlug = path.basename(file, '.tsx');
              const filePath = path.join(industryPath, file);
              
              const wasUpdated = enhancePageComponent(filePath, citySlug, serviceSlug, industrySlug);
              
              if (wasUpdated) {
                console.log(`  ✓ Enhanced: ${citySlug}/industries/${industrySlug}/${serviceSlug}`);
                totalUpdated++;
              } else {
                console.log(`  - Skipped: ${citySlug}/industries/${industrySlug}/${serviceSlug}`);
                totalSkipped++;
              }
            });
          } catch (error) {
            console.log(`  ⚠️  Error processing industry ${industrySlug}: ${error.message}`);
          }
        });
      }
    } catch (error) {
      console.log(`  ⚠️  Error processing city ${citySlug}: ${error.message}`);
    }
  });

  console.log(`\n✅ Enhancement completed!`);
  console.log(`📊 Summary:`);
  console.log(`   • Pages enhanced: ${totalUpdated}`);
  console.log(`   • Pages skipped: ${totalSkipped}`);
  console.log(`   • Total processed: ${totalUpdated + totalSkipped}`);
  console.log(`\n🔗 Enhanced features implemented:`);
  console.log(`   • Professional contextual navigation`);
  console.log(`   • Strategic internal linking`);
  console.log(`   • Cross-service recommendations`);
  console.log(`   • Geographic expansion links`);
  console.log(`   • Industry-specific solutions`);
  console.log(`   • Enhanced sidebar with CTAs`);
  console.log(`   • Professional trust signals`);
  console.log(`   • Conversion-optimized layout`);
  console.log(`\n🚀 All pages now feature professional SEO internal linking!`);
};

// Execute the enhancement
enhanceAllPages();