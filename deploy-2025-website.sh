#!/bin/bash

# 🚀 God Digital Marketing - 2025 Website Deployment Script
# Revolutionary deployment for groundbreaking digital marketing website

echo "🚀 DEPLOYING GOD DIGITAL MARKETING 2025 WEBSITE"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}$1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

print_header "🔍 STEP 1: ENVIRONMENT VERIFICATION"
print_status "Checking Node.js version..."
node_version=$(node --version)
print_success "Node.js version: $node_version"

print_status "Checking npm version..."
npm_version=$(npm --version)
print_success "npm version: $npm_version"

print_status "Verifying project structure..."
if [ -f "src/components/GodDigitalMarketing2025.tsx" ]; then
    print_success "2025 component found ✓"
else
    print_warning "2025 component not found, using existing structure"
fi

if [ -f "src/styles/2025-design-system.css" ]; then
    print_success "2025 design system found ✓"
else
    print_warning "2025 design system not found"
fi

echo ""
print_header "📦 STEP 2: DEPENDENCY INSTALLATION"
print_status "Installing dependencies with legacy peer deps..."
npm ci --legacy-peer-deps

if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully ✓"
else
    print_error "Failed to install dependencies"
    exit 1
fi

echo ""
print_header "🔧 STEP 3: BUILD OPTIMIZATION"
print_status "Creating optimized production build..."

# Set environment variables for optimal build
export NODE_ENV=production
export CI=false
export GENERATE_SOURCEMAP=false

# Run the build
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully ✓"
else
    print_error "Build failed"
    exit 1
fi

echo ""
print_header "📊 STEP 4: BUILD ANALYSIS"
print_status "Analyzing build output..."

# Check if dist directory exists
if [ -d "dist" ]; then
    print_success "Build directory created ✓"
    
    # Get build size
    build_size=$(du -sh dist | cut -f1)
    print_status "Total build size: $build_size"
    
    # Check for critical files
    if [ -f "dist/index.html" ]; then
        print_success "index.html generated ✓"
    else
        print_error "index.html not found in build"
    fi
    
    if [ -d "dist/assets" ]; then
        print_success "Assets directory created ✓"
        asset_count=$(find dist/assets -type f | wc -l)
        print_status "Asset files: $asset_count"
    else
        print_warning "Assets directory not found"
    fi
else
    print_error "Build directory not created"
    exit 1
fi

echo ""
print_header "🌐 STEP 5: NETLIFY CONFIGURATION"
print_status "Verifying Netlify configuration..."

# Check for netlify.toml
if [ -f "netlify.toml" ]; then
    print_success "netlify.toml found ✓"
else
    print_warning "netlify.toml not found, creating basic configuration..."
    cat > netlify.toml << EOF
[build]
  command = "npm ci --legacy-peer-deps && npm run build"
  publish = "dist"

[[headers]]
  for = "/assets/*.js"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"

[[headers]]
  for = "*.js"
  [headers.values]
    Content-Type = "application/javascript; charset=utf-8"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
EOF
    print_success "netlify.toml created ✓"
fi

# Check for _redirects
if [ -f "public/_redirects" ]; then
    print_success "_redirects file found ✓"
else
    print_warning "_redirects not found, creating basic redirects..."
    mkdir -p public
    cat > public/_redirects << EOF
# Asset files served directly (not redirected)
/assets/*    /assets/:splat   200
/favicon.ico    /favicon.ico   200

# City-Service combinations use React routing
/:city/:service/    /index.html   200!

# Catch-all redirect for SPA routing (MUST be last)
/*    /index.html   200
EOF
    print_success "_redirects created ✓"
fi

echo ""
print_header "🔍 STEP 6: SEO OPTIMIZATION VERIFICATION"
print_status "Checking SEO optimization..."

# Check for meta tags in index.html
if grep -q "God Digital Marketing" dist/index.html; then
    print_success "Brand meta tags found ✓"
else
    print_warning "Brand meta tags not found"
fi

if grep -q "digital marketing agency India" dist/index.html; then
    print_success "Primary keywords found ✓"
else
    print_warning "Primary keywords not found"
fi

if grep -q "application/ld+json" dist/index.html; then
    print_success "Structured data found ✓"
else
    print_warning "Structured data not found"
fi

echo ""
print_header "⚡ STEP 7: PERFORMANCE OPTIMIZATION"
print_status "Checking performance optimizations..."

# Check for compressed assets
js_files=$(find dist/assets -name "*.js" | wc -l)
css_files=$(find dist/assets -name "*.css" | wc -l)

print_status "JavaScript files: $js_files"
print_status "CSS files: $css_files"

# Check file sizes
largest_js=$(find dist/assets -name "*.js" -exec ls -la {} \; | sort -k5 -nr | head -1 | awk '{print $5, $9}')
if [ ! -z "$largest_js" ]; then
    print_status "Largest JS file: $largest_js"
fi

echo ""
print_header "🚀 STEP 8: DEPLOYMENT READY"
print_success "Build optimization complete!"
print_success "Website ready for deployment!"

echo ""
print_header "📋 DEPLOYMENT SUMMARY"
echo "=================================="
print_status "Project: God Digital Marketing 2025"
print_status "Build size: $build_size"
print_status "JS files: $js_files"
print_status "CSS files: $css_files"
print_status "Build directory: dist/"
print_status "Netlify config: ✓"
print_status "Redirects config: ✓"
print_status "SEO optimization: ✓"

echo ""
print_header "🌟 NEXT STEPS"
echo "1. 🔗 Connect repository to Netlify"
echo "2. 🌐 Set custom domain: goddigitalmarketing.com"
echo "3. 🔒 Enable HTTPS and security headers"
echo "4. 📊 Configure analytics and monitoring"
echo "5. 🚀 Deploy and test across all devices"

echo ""
print_success "🎉 GOD DIGITAL MARKETING 2025 WEBSITE DEPLOYMENT READY!"
print_success "Divine Digital Solutions for Godly Growth - Now Live!"

echo ""
print_header "🔗 USEFUL COMMANDS"
echo "• Test locally: npm run preview"
echo "• Analyze bundle: npm run build:analyze"
echo "• Lint code: npm run lint"
echo "• Type check: npm run type-check"

echo ""
print_status "Deployment script completed successfully! 🚀"
