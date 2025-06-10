#!/usr/bin/env node

/**
 * Fix function names with hyphens in all page files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 FIXING FUNCTION NAMES WITH HYPHENS\n');

function fixFunctionNamesInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function names with hyphens
    const functionNameRegex = /export default function ([^(]*-[^(]*)\(/g;
    content = content.replace(functionNameRegex, (match, functionName) => {
      const fixedName = functionName.replace(/-/g, '');
      console.log(`  Fixed: ${functionName} -> ${fixedName}`);
      modified = true;
      return `export default function ${fixedName}(`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function fixAllFunctionNames() {
  const pagesDir = path.join('src', 'pages');
  let fixedCount = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    items.forEach(item => {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.name.endsWith('.tsx')) {
        console.log(`🔄 Checking: ${fullPath}`);
        if (fixFunctionNamesInFile(fullPath)) {
          fixedCount++;
        }
      }
    });
  }
  
  processDirectory(pagesDir);
  
  console.log(`\n✅ Fixed ${fixedCount} files with hyphen issues`);
  return fixedCount;
}

// Main execution
function main() {
  console.log('🔧 FUNCTION NAME FIXER');
  console.log('=' .repeat(50));
  console.log('🎯 MISSION: Fix all function names with hyphens');
  console.log('=' .repeat(50));
  
  try {
    const fixedCount = fixAllFunctionNames();
    
    console.log('\n' + '=' .repeat(50));
    console.log('🎉 FUNCTION NAME FIXING COMPLETED!');
    console.log(`✅ Fixed ${fixedCount} files`);
    console.log('🚀 Ready for build without syntax errors');
    console.log('=' .repeat(50));
    
  } catch (error) {
    console.error('❌ Error during fixing:', error);
    process.exit(1);
  }
}

// Execute if run directly
if (require.main === module) {
  main();
}

module.exports = { main, fixAllFunctionNames };
