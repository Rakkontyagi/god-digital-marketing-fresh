const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing import paths for seoStructuredData...\n');

// Files that need specific import path fixes
const importFixes = [
  // Files that need '../../../utils/' (3 levels up)
  {
    files: [
      'src/components/Pages/ServiceHubPages/BusinessAutomationHub.tsx',
      'src/components/Pages/ServiceHubPages/LeadGenerationHub.tsx',
      'src/components/Pages/CoreServices/DigitalMarketingServices.tsx',
      'src/components/Pages/CoreServices/SEOServices.tsx'
    ],
    oldImport: "from '../../utils/seoStructuredData'",
    newImport: "from '../../../utils/seoStructuredData'"
  },
  // Files that need '../../utils/' (2 levels up) - already handled
  {
    files: [
      'src/components/Pages/RealEstateDigitalMarketing.tsx',
      'src/components/Pages/EcommerceDigitalMarketing.tsx',
      'src/components/Pages/MumbaiDigitalMarketing.tsx',
      'src/components/Pages/HealthcareDigitalMarketing.tsx',
      'src/components/Pages/BangaloreDigitalMarketing.tsx',
      'src/components/Pages/ChennaiDigitalMarketing.tsx',
      'src/components/Pages/PuneDigitalMarketing.tsx',
      'src/components/Pages/HyderabadDigitalMarketing.tsx',
      'src/components/Pages/DelhiDigitalMarketing.tsx',
      'src/components/Pages/DelhiSEOServices.tsx'
    ],
    oldImport: "from '../utils/seoStructuredData'",
    newImport: "from '../../utils/seoStructuredData'"
  },
  // Files that need '../utils/' (contact.tsx from src/pages/)
  {
    files: [
      'src/pages/contact.tsx'
    ],
    oldImport: "from '../utils/seoStructuredData'",
    newImport: "from '../utils/seoStructuredData'" // This should actually be correct
  }
];

let totalFixedCount = 0;

importFixes.forEach(({ files, oldImport, newImport }) => {
  console.log(`\nFixing: ${oldImport} -> ${newImport}`);
  
  files.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes(oldImport)) {
        content = content.replace(new RegExp(oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImport);
        fs.writeFileSync(filePath, content);
        console.log(`  ✓ Fixed: ${filePath}`);
        totalFixedCount++;
      } else {
        console.log(`  - Skipped: ${filePath} (already correct or not found)`);
      }
    } else {
      console.log(`  - Missing: ${filePath}`);
    }
  });
});

console.log(`\n✅ Fixed ${totalFixedCount} import paths total!`);
console.log('🚀 Ready to build!');