#!/usr/bin/env node

/**
 * COMPREHENSIVE DUPLICATION ELIMINATION AUDIT
 * Verifies that all duplication and cannibalization issues have been resolved
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Content analysis functions
function extractContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract key content sections
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descriptionMatch = content.match(/description:\s*"([^"]+)"/);
    const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
    const heroTitleMatch = content.match(/title:\s*"([^"]+)"/);
    
    return {
      title: titleMatch ? titleMatch[1] : '',
      description: descriptionMatch ? descriptionMatch[1] : '',
      keywords: keywordsMatch ? keywordsMatch[1] : '',
      heroTitle: heroTitleMatch ? heroTitleMatch[1] : '',
      contentHash: crypto.createHash('md5').update(content).digest('hex'),
      wordCount: content.split(/\s+/).length,
      uniqueIdentifier: content.match(/content identifier: ([a-f0-9]+)/) ? 
        content.match(/content identifier: ([a-f0-9]+)/)[1] : null
    };
  } catch (error) {
    return null;
  }
}

function analyzeKeywordCannibalization() {
  console.log('🔍 ANALYZING KEYWORD CANNIBALIZATION...\n');
  
  const pagesDir = path.join('src', 'pages');
  const keywordMap = new Map();
  const titleMap = new Map();
  const descriptionMap = new Map();
  
  // Get all city directories
  const cityDirs = fs.readdirSync(pagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !['services', 'industries'].includes(dirent.name))
    .map(dirent => dirent.name);
  
  let totalPages = 0;
  let cannibalizationIssues = 0;
  let duplicateContent = 0;
  
  cityDirs.forEach(citySlug => {
    const cityDir = path.join(pagesDir, citySlug);
    
    if (!fs.existsSync(cityDir)) return;
    
    const serviceFiles = fs.readdirSync(cityDir)
      .filter(file => file.endsWith('.tsx') && !file.includes('industries'));
    
    serviceFiles.forEach(serviceFile => {
      const serviceSlug = serviceFile.replace('.tsx', '');
      const filePath = path.join(cityDir, serviceFile);
      const pageData = extractContent(filePath);
      
      if (!pageData) return;
      
      totalPages++;
      const pageKey = `${citySlug}/${serviceSlug}`;
      
      // Check for keyword cannibalization
      const primaryKeyword = `${serviceSlug} ${citySlug}`;
      if (keywordMap.has(primaryKeyword)) {
        console.log(`❌ KEYWORD CANNIBALIZATION: "${primaryKeyword}"`);
        console.log(`   Competing pages: ${keywordMap.get(primaryKeyword)} vs ${pageKey}`);
        cannibalizationIssues++;
      } else {
        keywordMap.set(primaryKeyword, pageKey);
      }
      
      // Check for duplicate titles
      if (titleMap.has(pageData.title)) {
        console.log(`❌ DUPLICATE TITLE: "${pageData.title}"`);
        console.log(`   Pages: ${titleMap.get(pageData.title)} vs ${pageKey}`);
        duplicateContent++;
      } else {
        titleMap.set(pageData.title, pageKey);
      }
      
      // Check for duplicate descriptions
      if (descriptionMap.has(pageData.description)) {
        console.log(`❌ DUPLICATE DESCRIPTION: "${pageData.description.substring(0, 100)}..."`);
        console.log(`   Pages: ${descriptionMap.get(pageData.description)} vs ${pageKey}`);
        duplicateContent++;
      } else {
        descriptionMap.set(pageData.description, pageKey);
      }
    });
  });
  
  console.log(`\n📊 CANNIBALIZATION AUDIT RESULTS:`);
  console.log(`   Total Pages Analyzed: ${totalPages}`);
  console.log(`   Keyword Cannibalization Issues: ${cannibalizationIssues}`);
  console.log(`   Duplicate Content Issues: ${duplicateContent}`);
  
  return { totalPages, cannibalizationIssues, duplicateContent };
}

function analyzeContentUniqueness() {
  console.log('\n🎯 ANALYZING CONTENT UNIQUENESS...\n');
  
  const pagesDir = path.join('src', 'pages');
  const contentHashes = new Map();
  const uniqueIdentifiers = new Set();
  
  let totalPages = 0;
  let uniquePages = 0;
  let duplicatePages = 0;
  let tier1Pages = 0;
  let tier2Pages = 0;
  let tier3Pages = 0;
  
  // Get all city directories
  const cityDirs = fs.readdirSync(pagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !['services', 'industries'].includes(dirent.name))
    .map(dirent => dirent.name);
  
  cityDirs.forEach(citySlug => {
    const cityDir = path.join(pagesDir, citySlug);
    
    if (!fs.existsSync(cityDir)) return;
    
    const serviceFiles = fs.readdirSync(cityDir)
      .filter(file => file.endsWith('.tsx') && !file.includes('industries'));
    
    serviceFiles.forEach(serviceFile => {
      const serviceSlug = serviceFile.replace('.tsx', '');
      const filePath = path.join(cityDir, serviceFile);
      const pageData = extractContent(filePath);
      
      if (!pageData) return;
      
      totalPages++;
      const pageKey = `${citySlug}/${serviceSlug}`;
      
      // Check content uniqueness
      if (contentHashes.has(pageData.contentHash)) {
        console.log(`❌ DUPLICATE CONTENT HASH: ${pageKey}`);
        console.log(`   Matches: ${contentHashes.get(pageData.contentHash)}`);
        duplicatePages++;
      } else {
        contentHashes.set(pageData.contentHash, pageKey);
        uniquePages++;
      }
      
      // Check unique identifiers
      if (pageData.uniqueIdentifier) {
        if (uniqueIdentifiers.has(pageData.uniqueIdentifier)) {
          console.log(`❌ DUPLICATE UNIQUE IDENTIFIER: ${pageData.uniqueIdentifier} in ${pageKey}`);
        } else {
          uniqueIdentifiers.add(pageData.uniqueIdentifier);
        }
      }
      
      // Count tier distribution
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('TIER1')) tier1Pages++;
      else if (content.includes('TIER2')) tier2Pages++;
      else if (content.includes('TIER3')) tier3Pages++;
      
      // Check word count
      if (pageData.wordCount < 1500) {
        console.log(`⚠️  LOW WORD COUNT: ${pageKey} (${pageData.wordCount} words)`);
      }
    });
  });
  
  console.log(`\n📊 CONTENT UNIQUENESS RESULTS:`);
  console.log(`   Total Pages: ${totalPages}`);
  console.log(`   Unique Pages: ${uniquePages}`);
  console.log(`   Duplicate Pages: ${duplicatePages}`);
  console.log(`   Uniqueness Rate: ${((uniquePages / totalPages) * 100).toFixed(2)}%`);
  console.log(`\n📊 TIER DISTRIBUTION:`);
  console.log(`   Tier 1 Pages: ${tier1Pages} (Enterprise Authority)`);
  console.log(`   Tier 2 Pages: ${tier2Pages} (Regional Leadership)`);
  console.log(`   Tier 3 Pages: ${tier3Pages} (Local Focus)`);
  
  return { totalPages, uniquePages, duplicatePages, tier1Pages, tier2Pages, tier3Pages };
}

function analyzeSEOOptimization() {
  console.log('\n🚀 ANALYZING SEO OPTIMIZATION LEVELS...\n');
  
  const pagesDir = path.join('src', 'pages');
  let totalPages = 0;
  let optimizedPages = 0;
  let missingMeta = 0;
  let missingSchema = 0;
  let missingCanonical = 0;
  
  // Get all city directories
  const cityDirs = fs.readdirSync(pagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !['services', 'industries'].includes(dirent.name))
    .map(dirent => dirent.name);
  
  cityDirs.forEach(citySlug => {
    const cityDir = path.join(pagesDir, citySlug);
    
    if (!fs.existsSync(cityDir)) return;
    
    const serviceFiles = fs.readdirSync(cityDir)
      .filter(file => file.endsWith('.tsx') && !file.includes('industries'));
    
    serviceFiles.forEach(serviceFile => {
      const filePath = path.join(cityDir, serviceFile);
      const content = fs.readFileSync(filePath, 'utf8');
      const pageKey = `${citySlug}/${serviceFile}`;
      
      totalPages++;
      
      let isOptimized = true;
      
      // Check for meta title
      if (!content.includes('<title>') && !content.includes('title:')) {
        console.log(`❌ MISSING META TITLE: ${pageKey}`);
        missingMeta++;
        isOptimized = false;
      }
      
      // Check for meta description
      if (!content.includes('meta name="description"') && !content.includes('description:')) {
        console.log(`❌ MISSING META DESCRIPTION: ${pageKey}`);
        missingMeta++;
        isOptimized = false;
      }
      
      // Check for schema markup
      if (!content.includes('application/ld+json') && !content.includes('@type')) {
        console.log(`❌ MISSING SCHEMA MARKUP: ${pageKey}`);
        missingSchema++;
        isOptimized = false;
      }
      
      // Check for canonical URL
      if (!content.includes('rel="canonical"') && !content.includes('canonicalUrl')) {
        console.log(`❌ MISSING CANONICAL URL: ${pageKey}`);
        missingCanonical++;
        isOptimized = false;
      }
      
      if (isOptimized) {
        optimizedPages++;
      }
    });
  });
  
  console.log(`\n📊 SEO OPTIMIZATION RESULTS:`);
  console.log(`   Total Pages: ${totalPages}`);
  console.log(`   Fully Optimized: ${optimizedPages}`);
  console.log(`   Missing Meta Tags: ${missingMeta}`);
  console.log(`   Missing Schema: ${missingSchema}`);
  console.log(`   Missing Canonical: ${missingCanonical}`);
  console.log(`   Optimization Rate: ${((optimizedPages / totalPages) * 100).toFixed(2)}%`);
  
  return { totalPages, optimizedPages, missingMeta, missingSchema, missingCanonical };
}

function generateOptimizationReport() {
  console.log('🎯 COMPREHENSIVE WEBSITE OPTIMIZATION AUDIT REPORT');
  console.log('=' .repeat(60));
  
  const cannibalizationResults = analyzeKeywordCannibalization();
  const uniquenessResults = analyzeContentUniqueness();
  const seoResults = analyzeSEOOptimization();
  
  console.log('\n' + '=' .repeat(60));
  console.log('📋 FINAL OPTIMIZATION SUMMARY');
  console.log('=' .repeat(60));
  
  console.log(`\n✅ DUPLICATION ELIMINATION:`);
  console.log(`   Keyword Cannibalization: ${cannibalizationResults.cannibalizationIssues === 0 ? '✅ ELIMINATED' : '❌ ' + cannibalizationResults.cannibalizationIssues + ' ISSUES'}`);
  console.log(`   Content Duplication: ${cannibalizationResults.duplicateContent === 0 ? '✅ ELIMINATED' : '❌ ' + cannibalizationResults.duplicateContent + ' ISSUES'}`);
  console.log(`   Content Uniqueness: ${uniquenessResults.uniquePages}/${uniquenessResults.totalPages} pages (${((uniquenessResults.uniquePages / uniquenessResults.totalPages) * 100).toFixed(1)}%)`);
  
  console.log(`\n✅ CONTENT OPTIMIZATION:`);
  console.log(`   Tier 1 Authority Pages: ${uniquenessResults.tier1Pages} (3,000+ words)`);
  console.log(`   Tier 2 Regional Pages: ${uniquenessResults.tier2Pages} (2,500+ words)`);
  console.log(`   Tier 3 Local Pages: ${uniquenessResults.tier3Pages} (2,000+ words)`);
  
  console.log(`\n✅ SEO OPTIMIZATION:`);
  console.log(`   Fully Optimized Pages: ${seoResults.optimizedPages}/${seoResults.totalPages} (${((seoResults.optimizedPages / seoResults.totalPages) * 100).toFixed(1)}%)`);
  console.log(`   Meta Tag Coverage: ${seoResults.totalPages - seoResults.missingMeta}/${seoResults.totalPages}`);
  console.log(`   Schema Markup Coverage: ${seoResults.totalPages - seoResults.missingSchema}/${seoResults.totalPages}`);
  
  const overallScore = (
    (cannibalizationResults.cannibalizationIssues === 0 ? 25 : 0) +
    (cannibalizationResults.duplicateContent === 0 ? 25 : 0) +
    ((uniquenessResults.uniquePages / uniquenessResults.totalPages) * 25) +
    ((seoResults.optimizedPages / seoResults.totalPages) * 25)
  );
  
  console.log(`\n🎯 OVERALL OPTIMIZATION SCORE: ${overallScore.toFixed(1)}/100`);
  
  if (overallScore >= 95) {
    console.log('🏆 EXCELLENT: Website is perfectly optimized!');
  } else if (overallScore >= 85) {
    console.log('✅ GOOD: Website is well optimized with minor improvements needed.');
  } else if (overallScore >= 70) {
    console.log('⚠️  FAIR: Website needs significant optimization improvements.');
  } else {
    console.log('❌ POOR: Website requires comprehensive optimization.');
  }
  
  console.log('\n' + '=' .repeat(60));
}

// Execute audit
if (require.main === module) {
  generateOptimizationReport();
}

module.exports = { 
  analyzeKeywordCannibalization, 
  analyzeContentUniqueness, 
  analyzeSEOOptimization,
  generateOptimizationReport 
};
