#!/usr/bin/env node

/**
 * Service Locations Implementation Validation Script
 * 
 * This script validates the service-specific footer implementation
 * including component functionality, schema markup, and performance.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  services: ['seo-services', 'social-media-marketing', 'ppc-advertising'],
  requiredFiles: [
    'src/components/Shared/EnhancedServiceLocationsFooter.tsx',
    'src/data/serviceLocationData.ts',
    'src/utils/seoStructuredData.ts'
  ],
  testCities: ['mumbai', 'delhi', 'bangalore', 'pune', 'hyderabad'],
  minCitiesPerState: 3
};

// ANSI colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

// Validation results
let validationResults = {
  passed: 0,
  failed: 0,
  warnings: 0,
  tests: []
};

/**
 * Logger utility
 */
const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}i${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.bold}${colors.blue}=== ${msg} ===${colors.reset}`)
};

/**
 * Test runner utility
 */
function runTest(name, testFn) {
  try {
    const result = testFn();
    if (result.success) {
      log.success(`${name}: ${result.message}`);
      validationResults.passed++;
    } else {
      log.error(`${name}: ${result.message}`);
      validationResults.failed++;
    }
    validationResults.tests.push({ name, ...result });
  } catch (error) {
    log.error(`${name}: Test failed with error - ${error.message}`);
    validationResults.failed++;
    validationResults.tests.push({ name, success: false, message: error.message });
  }
}

/**
 * File existence validation
 */
function validateFileStructure() {
  log.header('File Structure Validation');
  
  config.requiredFiles.forEach(filePath => {
    runTest(`File exists: ${filePath}`, () => {
      const fullPath = path.join(process.cwd(), filePath);
      const exists = fs.existsSync(fullPath);
      return {
        success: exists,
        message: exists ? 'File found' : 'File missing'
      };
    });
  });

  // Check service pages
  config.services.forEach(service => {
    const servicePath = `src/pages/services/${service}.tsx`;
    runTest(`Service page: ${service}`, () => {
      const fullPath = path.join(process.cwd(), servicePath);
      const exists = fs.existsSync(fullPath);
      return {
        success: exists,
        message: exists ? 'Service page found' : 'Service page missing'
      };
    });
  });
}

/**
 * Component implementation validation
 */
function validateComponentImplementation() {
  log.header('Component Implementation Validation');
  
  const componentPath = path.join(process.cwd(), 'src/components/Shared/EnhancedServiceLocationsFooter.tsx');
  
  runTest('EnhancedServiceLocationsFooter exists', () => {
    const exists = fs.existsSync(componentPath);
    return {
      success: exists,
      message: exists ? 'Component file found' : 'Component file missing'
    };
  });

  if (fs.existsSync(componentPath)) {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    
    // Check for required features
    const requiredFeatures = [
      'trackCityLinkClick',
      'searchCities',
      'useState',
      'useEffect',
      'priority-cities',
      'state-wise-cities',
      'city-search-section'
    ];

    requiredFeatures.forEach(feature => {
      runTest(`Feature: ${feature}`, () => {
        const hasFeature = componentContent.includes(feature);
        return {
          success: hasFeature,
          message: hasFeature ? 'Feature implemented' : 'Feature missing'
        };
      });
    });
  }
}

/**
 * Data structure validation
 */
function validateDataStructure() {
  log.header('Data Structure Validation');
  
  const dataPath = path.join(process.cwd(), 'src/data/serviceLocationData.ts');
  
  if (fs.existsSync(dataPath)) {
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    
    // Check for service metrics
    config.services.forEach(service => {
      runTest(`Service metrics: ${service}`, () => {
        const hasMetrics = dataContent.includes(service);
        return {
          success: hasMetrics,
          message: hasMetrics ? 'Service metrics found' : 'Service metrics missing'
        };
      });
    });

    // Check for required interfaces
    const requiredInterfaces = [
      'ServiceLocationMetrics',
      'CityLinkAnalytics',
      'searchCities'
    ];

    requiredInterfaces.forEach(interface => {
      runTest(`Interface: ${interface}`, () => {
        const hasInterface = dataContent.includes(interface);
        return {
          success: hasInterface,
          message: hasInterface ? 'Interface defined' : 'Interface missing'
        };
      });
    });
  }
}

/**
 * Schema markup validation
 */
function validateSchemaMarkup() {
  log.header('Schema Markup Validation');
  
  const schemaPath = path.join(process.cwd(), 'src/utils/seoStructuredData.ts');
  
  if (fs.existsSync(schemaPath)) {
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    
    // Check for enhanced schema functions
    const requiredSchemas = [
      'getProfessionalServiceSchema',
      'getServiceAreaSchema',
      'getCityServiceSchema',
      'getLocalBusinessWithServiceAreaSchema',
      'getFAQSchema'
    ];

    requiredSchemas.forEach(schema => {
      runTest(`Schema function: ${schema}`, () => {
        const hasSchema = schemaContent.includes(schema);
        return {
          success: hasSchema,
          message: hasSchema ? 'Schema function found' : 'Schema function missing'
        };
      });
    });
  }
}

/**
 * Service page integration validation
 */
function validateServicePageIntegration() {
  log.header('Service Page Integration Validation');
  
  config.services.forEach(service => {
    const servicePath = path.join(process.cwd(), `src/pages/services/${service}.tsx`);
    
    if (fs.existsSync(servicePath)) {
      const serviceContent = fs.readFileSync(servicePath, 'utf8');
      
      runTest(`${service} uses EnhancedServiceLocationsFooter`, () => {
        const usesComponent = serviceContent.includes('EnhancedServiceLocationsFooter');
        return {
          success: usesComponent,
          message: usesComponent ? 'Component integrated' : 'Component not integrated'
        };
      });

      runTest(`${service} has enhanced schema`, () => {
        const hasEnhancedSchema = serviceContent.includes('getProfessionalServiceSchema');
        return {
          success: hasEnhancedSchema,
          message: hasEnhancedSchema ? 'Enhanced schema implemented' : 'Enhanced schema missing'
        };
      });
    }
  });
}

/**
 * Location data validation
 */
function validateLocationData() {
  log.header('Location Data Validation');
  
  const locationsPath = path.join(process.cwd(), 'src/data/comprehensiveLocations.ts');
  
  if (fs.existsSync(locationsPath)) {
    const locationsContent = fs.readFileSync(locationsPath, 'utf8');
    
    // Check for test cities
    config.testCities.forEach(city => {
      runTest(`Test city data: ${city}`, () => {
        const hasCity = locationsContent.toLowerCase().includes(city.toLowerCase());
        return {
          success: hasCity,
          message: hasCity ? 'City data found' : 'City data missing'
        };
      });
    });

    // Validate data structure
    runTest('Location data structure', () => {
      const hasStructure = locationsContent.includes('allIndianLocations') && 
                          locationsContent.includes('ComprehensiveLocationData');
      return {
        success: hasStructure,
        message: hasStructure ? 'Data structure valid' : 'Data structure invalid'
      };
    });
  }
}

/**
 * Performance considerations validation
 */
function validatePerformanceConsiderations() {
  log.header('Performance Considerations');
  
  // Check for lazy loading implementation
  const componentPath = path.join(process.cwd(), 'src/components/Shared/EnhancedServiceLocationsFooter.tsx');
  
  if (fs.existsSync(componentPath)) {
    const content = fs.readFileSync(componentPath, 'utf8');
    
    const performanceFeatures = [
      { name: 'Debounced search', pattern: 'setTimeout' },
      { name: 'Lazy state loading', pattern: 'loadedStates' },
      { name: 'Mobile optimization', pattern: 'showAllMobile' },
      { name: 'Search result limiting', pattern: 'slice' }
    ];

    performanceFeatures.forEach(feature => {
      runTest(`Performance: ${feature.name}`, () => {
        const hasFeature = content.includes(feature.pattern);
        return {
          success: hasFeature,
          message: hasFeature ? 'Feature implemented' : 'Feature missing'
        };
      });
    });
  }
}

/**
 * TypeScript validation
 */
function validateTypeScript() {
  log.header('TypeScript Validation');
  
  // Check for TypeScript configuration
  const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
  runTest('TypeScript config', () => {
    const exists = fs.existsSync(tsconfigPath);
    return {
      success: exists,
      message: exists ? 'tsconfig.json found' : 'tsconfig.json missing'
    };
  });

  // Check for proper typing in key files
  const typedFiles = [
    'src/data/serviceLocationData.ts',
    'src/components/Shared/EnhancedServiceLocationsFooter.tsx'
  ];

  typedFiles.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      runTest(`TypeScript types: ${path.basename(filePath)}`, () => {
        const hasTypes = content.includes('interface') || content.includes('type');
        return {
          success: hasTypes,
          message: hasTypes ? 'Types defined' : 'Types missing'
        };
      });
    }
  });
}

/**
 * Generate summary report
 */
function generateSummaryReport() {
  log.header('Validation Summary');
  
  const total = validationResults.passed + validationResults.failed;
  const passRate = ((validationResults.passed / total) * 100).toFixed(1);
  
  console.log(`\nTotal Tests: ${total}`);
  console.log(`${colors.green}Passed: ${validationResults.passed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${validationResults.failed}${colors.reset}`);
  console.log(`${colors.yellow}Warnings: ${validationResults.warnings}${colors.reset}`);
  console.log(`Pass Rate: ${passRate}%\n`);

  if (validationResults.failed > 0) {
    log.header('Failed Tests');
    validationResults.tests
      .filter(test => !test.success)
      .forEach(test => {
        log.error(`${test.name}: ${test.message}`);
      });
  }

  // Overall status
  if (validationResults.failed === 0) {
    log.success('🎉 All validations passed! Service locations implementation is ready.');
  } else if (validationResults.failed < 3) {
    log.warning('⚠️  Minor issues found. Implementation is mostly ready.');
  } else {
    log.error('❌ Significant issues found. Please review the implementation.');
  }

  // Generate JSON report
  const reportPath = path.join(process.cwd(), 'validation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(validationResults, null, 2));
  log.info(`Detailed report saved to: ${reportPath}`);
}

/**
 * Main validation runner
 */
function main() {
  console.log(`${colors.bold}${colors.blue}Service Locations Implementation Validator${colors.reset}\n`);
  
  // Run all validation tests
  validateFileStructure();
  validateComponentImplementation();
  validateDataStructure();
  validateSchemaMarkup();
  validateServicePageIntegration();
  validateLocationData();
  validatePerformanceConsiderations();
  validateTypeScript();
  
  // Generate summary
  generateSummaryReport();
  
  // Exit with appropriate code
  process.exit(validationResults.failed > 0 ? 1 : 0);
}

// Run the validator
if (require.main === module) {
  main();
}

module.exports = {
  validateFileStructure,
  validateComponentImplementation,
  validateDataStructure,
  validateSchemaMarkup,
  validateServicePageIntegration,
  validateLocationData,
  validatePerformanceConsiderations,
  validateTypeScript,
  generateSummaryReport
};