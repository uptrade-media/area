# Next.js Migration - Copilot Execution Instructions

**Project**: Adams Real Estate Vite/React → Next.js 15 App Router Migration
**Date Created**: December 31, 2025
**Estimated Total Time**: 20-30 hours

---

## 🎯 Overview

This document contains step-by-step instructions for migrating the Adams Real Estate website from Vite + React Router to Next.js 15 with App Router. Follow these instructions sequentially to ensure a complete and successful migration.

---

## Pre-Migration Checklist

Before starting, verify:
- [ ] Current project builds successfully with `npm run build`
- [ ] All dependencies are installed
- [ ] Git repository is clean or changes are committed
- [ ] Create a new branch: `git checkout -b migration/nextjs`

---

## PHASE 1: Initial Setup & Project Initialization

### Step 1.1: Create Next.js Project Structure (Parallel Installation)

**Action**: Create a new Next.js project in a temporary directory, then merge into current project.

**Commands to execute**:
```bash
cd /Users/ramseydeal/Documents/GitHub/area
mkdir nextjs-temp
cd nextjs-temp
npx create-next-app@latest . --app --tailwind --eslint --src-dir --import-alias "@/*"
```

**Select options**:
- TypeScript? No (current project uses JSX)
- ESLint? Yes
- Tailwind CSS? Yes
- src/ directory? Yes
- App Router? Yes
- Turbopack? No
- Customize import alias? Yes (@/*)

### Step 1.2: Backup Current Files

**Action**: Create backup of critical files before modification.

**Files to read/backup**:
1. Read entire `package.json` - note all dependencies
2. Read entire `tailwind.config.js` 
3. Read entire `src/index.css` - note custom CSS variables
4. Read entire `src/App.css` - note custom styles
5. Read `eslint.config.js` - note custom rules

**Execute**:
```bash
cp package.json package.json.backup
cp tailwind.config.js tailwind.config.js.backup
```

### Step 1.3: Install Next.js Dependencies

**Action**: Update package.json with Next.js dependencies.

**Steps**:
1. Read current `package.json` (lines 1-78)
2. Create new `package.json` with:
   - Keep ALL current dependencies from lines 12-78
   - Add: `"next": "^15.1.0"` (or latest)
   - Add: `"react": "^18.3.1"` (verify version)
   - Add: `"react-dom": "^18.3.1"` (verify version)
   - Remove: `"vite"`, `"@vitejs/plugin-react"`, `"@tailwindcss/vite"`
   - Remove: `"react-router-dom"`
   - Update scripts to:
     ```json
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint"
     }
     ```

3. Execute: `npm install` in terminal

### Step 1.4: Create Next.js Configuration

**Action**: Create `next.config.mjs` file.

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/next.config.mjs`

**Content**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Add any redirects from public/_redirects here
    ]
  },
}

export default nextConfig
```

### Step 1.5: Update jsconfig.json for Next.js

**Action**: Update path configuration for Next.js.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/jsconfig.json`

**Replace entire file with**:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Step 1.6: Update Tailwind Configuration

**Action**: Update content paths for Next.js structure.

**Read**: `tailwind.config.js` (already read in backup step)

**Update content array**:
```javascript
content: [
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
],
```

Keep all theme extensions and plugins as-is.

---

## PHASE 2: Directory Structure Creation

### Step 2.1: Create App Directory Structure

**Action**: Create all necessary Next.js App Router directories.

**Execute in terminal**:
```bash
cd /Users/ramseydeal/Documents/GitHub/area
mkdir -p src/app
mkdir -p src/app/about
mkdir -p src/app/contact
mkdir -p src/app/transactions
mkdir -p src/app/lender-program
mkdir -p src/app/services
mkdir -p src/app/services/construction-loans
mkdir -p src/app/services/permanent-mortgages
mkdir -p src/app/services/commercial-real-estate-refinancing
mkdir -p src/app/services/acquisition-renovation-financing
mkdir -p src/app/services/retail-property-financing
mkdir -p src/app/services/office-building-financing
```

### Step 2.2: Verify Directory Creation

**Action**: List directory structure to confirm.

**Execute**: `ls -R src/app`

---

## PHASE 3: Extract and Refactor App.jsx Components

### Step 3.1: Analyze Current App.jsx Structure

**Action**: Read and understand the monolithic App.jsx file.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/App.jsx` (lines 1-100 already read, need full file)

**Execute**: Read file in chunks:
- Lines 1-500
- Lines 500-1000
- Lines 1000-1500
- Lines 1500-2000
- Lines 2000-2500
- Lines 2500-3000
- Lines 3000-3500
- Lines 3500-4000
- Lines 4000-4436

**Identify**:
1. Header/Navigation component code
2. Footer component code
3. Main content sections
4. Service detail components
5. Deals/transactions display
6. Contact form
7. About section
8. Lender program section

### Step 3.2: Create Root Layout

**Action**: Extract header, navigation, and footer into root layout.

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/layout.jsx`

**Content structure**:
```jsx
'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// Import all necessary UI components and icons

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Extract header/nav from App.jsx lines ~70-150 */}
        <header>
          {/* Navigation component */}
        </header>
        
        <main>
          {children}
        </main>
        
        {/* Extract footer from App.jsx */}
        <footer>
          {/* Footer component */}
        </footer>
      </body>
    </html>
  )
}
```

**Steps**:
1. Read App.jsx lines containing header JSX
2. Copy header/nav structure
3. Replace `onClick={handleNavigation('section')}` with `<Link href="/section">`
4. Replace `useLocation()` with `usePathname()`
5. Remove `useNavigate()` and replace with Link components
6. Add `'use client'` directive at top
7. Keep mobile menu state management

### Step 3.3: Create Global CSS

**Action**: Merge index.css and App.css into globals.css.

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/globals.css`

**Steps**:
1. Read `/Users/ramseydeal/Documents/GitHub/area/src/index.css` (entire file)
2. Read `/Users/ramseydeal/Documents/GitHub/area/src/App.css` (entire file)
3. Merge both files into globals.css
4. Keep all Tailwind directives (@tailwind base, etc.)
5. Keep all CSS custom properties (--background, --foreground, etc.)
6. Keep all custom CSS classes

### Step 3.4: Create Metadata Configuration

**Action**: Create separate metadata file for root layout.

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/metadata.js`

**Content**:
```javascript
export const siteMetadata = {
  title: {
    default: 'Adams Real Estate - Commercial Real Estate Financing',
    template: '%s | Adams Real Estate'
  },
  description: 'Comprehensive commercial real estate financing solutions including construction loans, permanent mortgages, and refinancing.',
  keywords: ['commercial real estate', 'construction loans', 'permanent mortgages', 'refinancing'],
  authors: [{ name: 'Adams Real Estate' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com/',
    siteName: 'Adams Real Estate',
  },
}
```

---

## PHASE 4: Create Individual Page Components

### Step 4.1: Create Home Page (/)

**Action**: Extract home section from App.jsx.

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/page.jsx`

**Steps**:
1. Search App.jsx for: `activeSection === "home"` or main hero section
2. Extract hero section JSX (typically includes main heading, subheading, CTA buttons)
3. Extract any home-specific content
4. Add metadata export:
```jsx
export const metadata = {
  title: 'Home',
  description: 'Commercial real estate financing solutions',
}
```
5. Add `'use client'` if needed for interactivity
6. Return JSX as default export function

**Template**:
```jsx
'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
// Import necessary icons

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Extracted hero section */}
      {/* Main content */}
    </div>
  )
}
```

### Step 4.2: Create About Page (/about)

**Action**: Migrate About.jsx to App Router structure.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/About.jsx` (entire file)

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/about/page.jsx`

**Steps**:
1. Copy entire content from About.jsx
2. Add metadata export at top:
```jsx
export const metadata = {
  title: 'About Us',
  description: 'Learn about Adams Real Estate and our commercial financing expertise',
}
```
3. Add `'use client'` if component uses hooks/interactivity
4. Update any internal navigation to use Link components
5. Verify all imports point to correct paths (@/components/ui/*)

### Step 4.3: Create Contact Page (/contact)

**Action**: Migrate Contact.jsx to App Router structure.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/Contact.jsx` (entire file)

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/contact/page.jsx`

**Steps**:
1. Copy entire content from Contact.jsx
2. Add metadata export
3. Add `'use client'` (forms require client-side)
4. Update form handling if needed
5. Consider converting to Server Actions (optional enhancement)

### Step 4.4: Create Transactions Page (/transactions)

**Action**: Migrate Transactions.jsx to App Router structure.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/Transactions.jsx` (entire file)

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/transactions/page.jsx`

**Steps**:
1. Copy content from Transactions.jsx
2. Add metadata with deals-specific description
3. Optimize images with next/image:
   - Replace `<img>` with `<Image>`
   - Add width and height attributes
   - Use proper image optimization
4. Add `'use client'` if needed

**Image optimization example**:
```jsx
import Image from 'next/image'

<Image 
  src="/HamptonInn.png" 
  alt="Hampton Inn" 
  width={400} 
  height={300}
  className="..."
/>
```

### Step 4.5: Create Lender Program Page (/lender-program)

**Action**: Migrate LenderProgram.jsx to App Router structure.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/LenderProgram.jsx` (entire file)

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/lender-program/page.jsx`

**Steps**:
1. Copy content from LenderProgram.jsx
2. Add metadata export
3. Add `'use client'` if needed
4. Update imports

### Step 4.6: Create Services Index Page (/services)

**Action**: Migrate Services.jsx to App Router structure.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/Services.jsx` (entire file)

**Create file**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/page.jsx`

**Steps**:
1. Copy content from Services.jsx
2. Add metadata export
3. Update all service links to Next.js Link components:
```jsx
<Link href="/services/construction-loans">
  Construction Loans
</Link>
```
4. Add `'use client'` if needed

### Step 4.7: Create Service Detail Pages

**Action**: Migrate all service detail pages from src/pages/services/ to App Router.

**For each service file**:

#### Construction Loans
**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/services/ConstructionLoans.jsx`
**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/construction-loans/page.jsx`

#### Permanent Mortgages
**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/services/PermanentMortgages.jsx`
**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/permanent-mortgages/page.jsx`

#### Commercial Refinancing
**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/services/Refinancing.jsx`
**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/commercial-real-estate-refinancing/page.jsx`

#### Acquisition & Renovation
**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/services/AcqRenovation.jsx`
**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/acquisition-renovation-financing/page.jsx`

#### Retail Financing
**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/services/RetailFinancing.jsx`
**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/retail-property-financing/page.jsx`

#### Office Financing
**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/services/OfficeFinancing.jsx`
**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/services/office-building-financing/page.jsx`

**For each service page**:
1. Copy entire content
2. Add unique metadata:
```jsx
export const metadata = {
  title: 'Service Name - Adams Real Estate',
  description: 'Detailed service description',
  openGraph: {
    title: 'Service Name',
    description: 'Detailed service description',
  },
}
```
3. Add `'use client'` if interactive
4. Update navigation links to Link components

---

## PHASE 5: Update UI Components

### Step 5.1: Add 'use client' to All UI Components

**Action**: Add 'use client' directive to all shadcn/ui components.

**Components to update** (in `/Users/ramseydeal/Documents/GitHub/area/src/components/ui/`):

1. accordion.jsx
2. alert-dialog.jsx
3. alert.jsx
4. aspect-ratio.jsx
5. avatar.jsx
6. badge.jsx
7. breadcrumb.jsx
8. button.jsx
9. calendar.jsx
10. card.jsx
11. carousel.jsx
12. chart.jsx
13. checkbox.jsx
14. collapsible.jsx
15. command.jsx
16. context-menu.jsx
17. DatePicker.tsx
18. dialog.jsx
19. drawer.jsx
20. dropdown-menu.jsx
21. form.jsx
22. hover-card.jsx
23. input-otp.jsx
24. input.jsx
25. label.jsx
26. menubar.jsx
27. navigation-menu.jsx
28. pagination.jsx
29. popover.jsx
30. progress.jsx
31. radio-group.jsx
32. resizable.jsx
33. scroll-area.jsx
34. select.jsx
35. separator.jsx
36. sheet.jsx
37. sidebar.jsx
38. skeleton.jsx
39. slider.jsx
40. sonner.jsx
41. switch.jsx
42. table.jsx
43. tabs.jsx
44. textarea.jsx
45. toggle-group.jsx
46. toggle.jsx
47. tooltip.jsx

**For each file**:
1. Read file (lines 1-50 to check if 'use client' already exists)
2. If not present, add `'use client'` as first line
3. Use replace_string_in_file or multi_replace_string_in_file

**Example transformation**:
```jsx
// Before
import * as React from "react"

// After
'use client'

import * as React from "react"
```

### Step 5.2: Update use-mobile Hook

**Action**: Verify compatibility with Next.js.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/hooks/use-mobile.js`

**If uses window**:
1. Add 'use client' directive
2. Ensure window checks are wrapped in useEffect

---

## PHASE 6: Create Not Found Page

### Step 6.1: Create Custom 404

**Action**: Migrate NotFound.jsx to Next.js not-found.jsx.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/src/pages/NotFound.jsx`

**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/not-found.jsx`

**Steps**:
1. Copy content from NotFound.jsx
2. Remove any router-specific logic
3. Update Link to use Next.js Link
4. Export as default function
5. Add `'use client'` if needed

---

## PHASE 7: Handle Static Assets & Images

### Step 7.1: Verify Public Directory

**Action**: Ensure public directory is properly set up.

**Execute**: `ls -la public/`

**Verify files**:
- HighendResort.avif
- SkaneatelesSocial.avif
- sitemap.xml
- _redirects

**Note**: Next.js serves files from /public at root level (no /public prefix in paths)

### Step 7.2: Migrate Redirects

**Action**: Convert _redirects to Next.js redirects.

**Read**: `/Users/ramseydeal/Documents/GitHub/area/public/_redirects`

**Update**: `next.config.mjs` redirects array with equivalent redirects

### Step 7.3: Create Dynamic Sitemap (Optional Enhancement)

**Action**: Convert static sitemap to dynamic generation.

**Create**: `/Users/ramseydeal/Documents/GitHub/area/src/app/sitemap.js`

**Content**:
```javascript
export default function sitemap() {
  const baseUrl = 'https://yourdomain.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add all routes
  ]
}
```

### Step 7.4: Optimize All Images

**Action**: Create a list of all image references and update to next/image.

**Search for**: Grep search for `<img` across all files

**Execute**: `grep_search` with pattern: `<img`

**For each image found**:
1. Note location and context
2. Determine appropriate dimensions
3. Replace with Next.js Image component
4. Add proper alt text, width, height

---

## PHASE 8: Delete Old Files

### Step 8.1: Remove Vite-Specific Files

**Action**: Delete files no longer needed.

**Delete**:
```bash
rm vite.config.js
rm index.html
rm postcss.config.js
rm src/main.jsx
```

### Step 8.2: Remove Old Page Components (After Verification)

**Action**: Only after confirming all new pages work, remove old pages directory.

**DO NOT DELETE UNTIL PHASE 10 TESTING IS COMPLETE**

---

## PHASE 9: Build & Test

### Step 9.1: First Build Attempt

**Action**: Try building the Next.js application.

**Execute**: `npm run build`

**Expected issues**:
1. Missing 'use client' directives
2. Server/Client component boundary errors
3. Import path issues
4. Image optimization errors

**For each error**:
1. Read the error message carefully
2. Identify the file and line number
3. Fix the specific issue:
   - Add 'use client' if using hooks/events
   - Fix import paths
   - Update Image components
4. Rebuild

### Step 9.2: Fix Build Errors Iteratively

**Process**:
1. Run `npm run build`
2. Read first error
3. Fix error
4. Run build again
5. Repeat until clean build

**Common fixes**:
- Add 'use client' to components using useState, useEffect, onClick, etc.
- Fix import statements (@ alias should work if jsconfig.json is correct)
- Ensure all components are properly exported
- Fix any ESLint errors

### Step 9.3: Test Development Server

**Action**: Start dev server and test all routes.

**Execute**: `npm run dev`

**Test each route**:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/transactions
- http://localhost:3000/lender-program
- http://localhost:3000/services
- http://localhost:3000/services/construction-loans
- http://localhost:3000/services/permanent-mortgages
- http://localhost:3000/services/commercial-real-estate-refinancing
- http://localhost:3000/services/acquisition-renovation-financing
- http://localhost:3000/services/retail-property-financing
- http://localhost:3000/services/office-building-financing

**For each route, verify**:
- Page loads without errors
- Navigation works
- Styling is correct
- Images load properly
- Links work correctly
- Mobile menu functions

### Step 9.4: Test Production Build

**Action**: Build and test production version.

**Execute**:
```bash
npm run build
npm run start
```

**Test**: Same routes as development, verify performance and optimization

---

## PHASE 10: Final Validation & Cleanup

### Step 10.1: Cross-Browser Testing

**Action**: Test in multiple browsers.

**Browsers to test**:
- Chrome
- Firefox
- Safari
- Edge

**Mobile testing**:
- iOS Safari
- Android Chrome

### Step 10.2: Performance Audit

**Action**: Run Lighthouse audit.

**Execute**: Open Chrome DevTools → Lighthouse → Run audit

**Check**:
- Performance score > 90
- Accessibility score > 90
- Best Practices score > 90
- SEO score > 90

### Step 10.3: Verify All Functionality

**Checklist**:
- [ ] All navigation links work
- [ ] Mobile menu opens/closes properly
- [ ] Forms submit correctly
- [ ] Images display properly
- [ ] Page transitions smooth
- [ ] Back/forward navigation works
- [ ] Direct URL access works
- [ ] 404 page displays for invalid routes
- [ ] Meta tags present on all pages
- [ ] Console has no errors
- [ ] No hydration errors

### Step 10.4: Clean Up Old Code

**Action**: After everything is verified working, remove old code.

**Delete**:
```bash
rm -rf src/pages
rm src/App.jsx
rm src/App.backup.jsx
rm src/App.css
rm src/index.css
rm package.json.backup
rm tailwind.config.js.backup
```

### Step 10.5: Update README

**Action**: Update README with new build/dev commands.

**Read**: `README.md`

**Update**:
- Change `npm run dev` description (now uses Next.js)
- Update build instructions
- Add deployment notes for Next.js
- Remove Vite references

---

## PHASE 11: Deployment Preparation

### Step 11.1: Environment Variables

**Action**: Set up environment variables if needed.

**Create**: `.env.local` (if needed)

**Add any necessary variables**:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add others as needed
```

### Step 11.2: Configure for Deployment Platform

**For Vercel** (recommended for Next.js):
- No configuration needed, auto-detects Next.js
- Push to GitHub and connect Vercel

**For Netlify**:
**Create**: `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**For other platforms**: Configure build command as `npm run build` and output directory as `.next`

### Step 11.3: Update Package.json Meta Information

**Action**: Update package.json with correct information.

**Update**:
- name
- version
- description
- author
- repository
- keywords

---

## Success Criteria Checklist

### Functionality
- [ ] All pages render correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu works
- [ ] Forms function properly
- [ ] Images load and display correctly
- [ ] Links navigate correctly
- [ ] 404 page works

### Performance
- [ ] Build completes without errors
- [ ] No console errors in browser
- [ ] Lighthouse score > 90 in all categories
- [ ] Images are optimized
- [ ] Page load time < 3 seconds

### Code Quality
- [ ] All components have proper 'use client' directives
- [ ] No unused imports
- [ ] ESLint passes
- [ ] All imports resolve correctly
- [ ] No hydration errors

### SEO
- [ ] All pages have unique metadata
- [ ] Meta descriptions present
- [ ] OpenGraph tags configured
- [ ] Sitemap accessible
- [ ] Robots.txt configured

### Deployment
- [ ] Production build successful
- [ ] Deployment configuration ready
- [ ] Environment variables documented
- [ ] README updated

---

## Rollback Plan

If migration fails or issues arise:

1. **Switch back to old branch**:
   ```bash
   git checkout main  # or previous branch
   ```

2. **Restore old files** (if on same branch):
   ```bash
   git restore package.json vite.config.js src/main.jsx
   npm install
   ```

3. **Rebuild with Vite**:
   ```bash
   npm run build
   ```

---

## Post-Migration Enhancements (Optional)

After successful migration, consider:

1. **Convert to TypeScript** for type safety
2. **Implement Server Actions** for form handling
3. **Add API routes** if backend functionality needed
4. **Implement ISR** (Incremental Static Regeneration) for dynamic content
5. **Add middleware** for authentication or redirects
6. **Optimize fonts** with next/font
7. **Add analytics** (Vercel Analytics, Google Analytics)
8. **Implement error boundaries** for better error handling
9. **Add loading states** with loading.jsx files
10. **Set up monitoring** (Sentry, LogRocket)

---

## Notes & Reminders

- **Always test after each major change**
- **Commit frequently with descriptive messages**
- **Keep old code until fully verified**
- **Document any custom solutions**
- **Take breaks during long refactoring sessions**
- **Ask for clarification if user requirements unclear**

---

## Execution Order Summary

1. ✅ Phase 1: Setup (Steps 1.1-1.6)
2. ✅ Phase 2: Directories (Steps 2.1-2.2)
3. ✅ Phase 3: Extract App.jsx (Steps 3.1-3.4)
4. ✅ Phase 4: Create Pages (Steps 4.1-4.7)
5. ✅ Phase 5: Update Components (Steps 5.1-5.2)
6. ✅ Phase 6: Not Found (Step 6.1)
7. ✅ Phase 7: Assets (Steps 7.1-7.4)
8. ⚠️  Phase 8: Delete (Steps 8.1-8.2) - AFTER VERIFICATION
9. ✅ Phase 9: Build & Test (Steps 9.1-9.4)
10. ✅ Phase 10: Validation (Steps 10.1-10.5)
11. ✅ Phase 11: Deployment (Steps 11.1-11.3)

---

**END OF INSTRUCTIONS**
