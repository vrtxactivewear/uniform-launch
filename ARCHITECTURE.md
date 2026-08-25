# Uniform Launch Site - Architecture & Customization Guide

## System Overview

This is a production-ready, reusable uniform/jersey launch microsite engine. It separates content from presentation, allowing rapid deployment of new campaigns without code changes.

```
uniform-launch/
├── app/
│   ├── layout.tsx          # Root layout, metadata, HTML structure
│   ├── page.tsx            # Main page - imports all sections
│   └── globals.css         # Global design tokens & base styles
├── components/             # Reusable section components
│   ├── Hero.tsx/css        # Hero section with animation
│   ├── Navigation.tsx/css  # Fixed navigation with mobile menu
│   ├── Concept.tsx/css     # Campaign concept statement
│   ├── UniformShowcase.tsx/css  # Uniform showcase with carousel
│   ├── SizeGuide.tsx/css   # Sizing charts
│   ├── NameAndNumber.tsx/css   # Jersey number/name section
│   ├── PurchaseSchedule.tsx/css # Purchase timeline
│   ├── RetailLocations.tsx/css  # Shop locations
│   ├── Partners.tsx/css    # Sponsor logos
│   └── Footer.tsx/css      # Footer with links
├── content/
│   └── campaign.ts         # ← ONLY FILE YOU MODIFY FOR NEW CAMPAIGNS
├── public/
│   ├── images/            # ← PLACE ALL IMAGES HERE
│   └── logos/             # ← PLACE LOGO ASSETS HERE
└── next.config.ts         # Next.js configuration
```

## Key Architecture Decisions

### 1. Content-Driven Design
All campaign-specific content lives in `content/campaign.ts`:
- Club information
- Season details
- Color palette
- Uniform data
- Pricing and URLs
- Retail locations
- Partner information

Components read from this config and render accordingly.

### 2. CSS Modules for Style Isolation
Each component has a paired `.module.css` file:
- No global class conflicts
- Easy to modify styling per component
- Design tokens in `globals.css` for consistency
- Responsive breakpoints built into each module

### 3. Responsive-First Design
Three primary breakpoints:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

Each component adjusts layout, typography, and spacing via CSS media queries.

### 4. Animation System (GSAP)
Smooth animations via GSAP library:
- Hero section entrance animation
- Scroll-triggered reveals (easily expandable)
- Scroll indicator pulse
- Hover states with transitions

All animations respect `prefers-reduced-motion` for accessibility.

### 5. TypeScript for Type Safety
All content shapes defined in `content/campaign.ts`:
```typescript
interface CampaignConfig {
  club: { name, logo, shortName }
  season: string
  campaign: { theme, concept, tagline }
  colors: { primary, secondary, accent, ... }
  uniforms: Uniform[]
  // ... all campaign data with full typing
}
```

This prevents runtime errors and makes IDE autocomplete available.

## Customization: Step-by-Step

### Step 1: Update Campaign Data

Edit `content/campaign.ts`:

```typescript
export const yourClubCampaign: CampaignConfig = {
  club: {
    name: "Your Club Name",
    logo: "/logos/your-club.svg",
    shortName: "YourClub"
  },
  season: "2026/27",
  campaign: {
    theme: "Your theme name (e.g., 'Ascension')",
    concept: "Your campaign concept description...",
    tagline: "Tagline visible in hero"
  },
  colors: {
    primary: "#FF0000",      // Main brand color
    secondary: "#000099",    // Secondary brand color
    accent: "#FFAA00",       // Accent for highlights
    text: "#FFFFFF",
    background: "#000000",
    gradientStart: "#FF0000",    // Hero gradient start
    gradientEnd: "#CCCCCC"       // Hero gradient end
  },
  // ... rest of config
};
```

Then import in `app/page.tsx`:
```typescript
import { yourClubCampaign } from '@/content/campaign';
// ...
export default function Home() {
  const campaign = yourClubCampaign;
  // ...
}
```

### Step 2: Add Images

Place all images in `/public/images/`:
- `hero-player-1.jpg`, `hero-player-2.jpg`, `hero-player-3.jpg` - Hero section
- `1st-uniform-hero.jpg` - 1st uniform showcase
- `2nd-uniform-hero.jpg` - 2nd uniform showcase
- `gk-uniform-hero.jpg` - GK uniform showcase
- Additional gallery images as needed

Image dimensions (optimal):
- Hero images: 1200-1400px wide
- Uniform hero: 800-1000px wide
- Gallery images: 1000-1200px wide
- Logo assets: SVG preferred, 200-300px wide

### Step 3: Update URLs

In the campaign config, update:
- `shopLinks.online` - Link to your shop
- `purchaseSchedule` - Your actual purchase timeline
- `retailLocations` - Your shop locations with links
- `partners` - Your sponsors/partners
- `socialLinks` - Your social media

### Step 4: Customize Metadata

In `app/layout.tsx`, update:
```typescript
export const metadata: Metadata = {
  title: "Your Club 2026/27 Uniform Launch",
  description: "Your campaign tagline here",
  // Update OpenGraph for social sharing
};
```

### Step 5: Adjust Colors (Optional)

Update design tokens in `app/globals.css`:
```css
:root {
  --color-primary: #D32F2F;
  --color-secondary: #1B3A8A;
  --color-accent: #FFA500;
  /* ... etc */
}
```

Or just change values in `content/campaign.ts` colors object and they'll propagate.

### Step 6: Typography (Optional)

Default uses system fonts for performance. To use custom fonts:

1. Add font import to `app/layout.tsx`:
```typescript
import localFont from "next/font/local";

const customFont = localFont({
  src: "/fonts/your-font.woff2",
});
```

2. Apply to HTML:
```typescript
<html lang="en" className={customFont.className}>
```

3. Update `--font-sans` in `app/globals.css`

## Component Deep Dive

### Hero Component
- **File:** `components/Hero.tsx` + `Hero.module.css`
- **Customization:**
  - Adjust entrance animation duration: Look for `duration: 1` in gsap calls
  - Change gradient: Modify gradient in component
  - Adjust scroll indicator position: Edit `.scrollIndicator` positioning in CSS
  - Modify sponsor logo layout: Edit `.sponsors` flex layout

### UniformShowcase Component
- **File:** `components/UniformShowcase.tsx` + `UniformShowcase.module.css`
- **Features:**
  - Image carousel (prev/next buttons)
  - Design points modal
  - Product lineup grid
- **Customization:**
  - Change grid layout: Edit `grid-template-columns` in CSS
  - Modify carousel speed: Adjust `setCurrentImageIndex` debounce
  - Change colors: Update inline styles or CSS variables

### Navigation Component
- **File:** `components/Navigation.tsx` + `Navigation.module.css`
- **Features:**
  - Sticky navigation on scroll
  - Mobile hamburger menu
  - Section links
  - Shop button
- **Customization:**
  - Add/remove nav items: Edit `sections` array
  - Change sticky trigger: Modify scroll threshold in `useEffect`
  - Adjust hamburger icon: Edit SVG or use different icon library

### SizeGuide Component
- **File:** `components/SizeGuide.tsx` + `SizeGuide.module.css`
- **Features:**
  - Responsive tables
  - Adult and junior sizes
  - Measurement diagram placeholder
- **Customization:**
  - Add more size rows: Expand `sizeChart.adults/junior` arrays
  - Change table styling: Modify `.table` CSS
  - Add real measurement diagram: Replace placeholder div

## Animation & Motion

All animations use GSAP library. Common patterns:

```typescript
// Entrance animation
gsap.from(ref, {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.3,
  ease: "power3.out"
});

// Hover effect
element.addEventListener('mouseenter', () => {
  gsap.to(element, { y: -4, duration: 0.3 });
});

// Scroll trigger
ScrollTrigger.create({
  trigger: element,
  onEnter: () => gsap.to(element, { opacity: 1 })
});
```

To add custom animations:
1. Import GSAP in component: `import gsap from 'gsap'`
2. Use in `useEffect`
3. Clean up with `return () => ctx.revert()`

## Performance Considerations

**Already optimized:**
- CSS modules (zero unused CSS)
- Next.js image optimization
- Lazy loading via React
- GSAP GPU acceleration
- Minified production build
- Efficient font loading

**To further improve:**
1. **Compress images:** Use TinyPNG or similar before uploading
2. **Use WebP:** Convert JPGs to WebP format (older browsers fallback)
3. **Lazy load below-fold images:** Import `next/image` component
4. **Cache headers:** Vercel/Netlify set these automatically
5. **Monitor Core Web Vitals:** Check Vercel analytics after deploy

## Accessibility

The site includes:
- Semantic HTML
- Color contrast (WCAG AA)
- Focus states on interactive elements
- `prefers-reduced-motion` support
- Keyboard navigation
- Alt text placeholders (update with real descriptions)

To improve:
1. Add alt text to all images
2. Add ARIA labels where needed
3. Test keyboard navigation
4. Use axe DevTools browser extension

## Testing

### Local Development
```bash
npm run dev
# Open http://localhost:3000
# Test all sections
# Test mobile via Chrome DevTools
```

### Production Build Test
```bash
npm run build
npm run start
# Test at http://localhost:3000 in production mode
```

### Responsive Testing
```bash
# Chrome DevTools: Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
# Test breakpoints: 390px, 768px, 1440px
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check `/public/images/` path, ensure files exist |
| Colors not updating | Clear browser cache, rebuild with `npm run build` |
| Navigation menu broken | Check `sections` array in Navigation component |
| Animations not smooth | Verify GSAP installed: `npm list gsap` |
| Build fails | Run `npm install`, check Node version (14+) |
| Deploy fails | Check `vercel.json`, ensure all assets committed |

## Security Notes

- No sensitive data in config files
- All external links open in new tabs with `rel="noopener noreferrer"`
- No form submissions (uses external shop links)
- No backend services required
- Static site - no server-side vulnerabilities

## Next Steps

1. **Replace content:** Update `content/campaign.ts` with your data
2. **Add images:** Place images in `/public/images/`
3. **Test locally:** Run `npm run dev` and verify all sections
4. **Deploy:** Follow `DEPLOYMENT.md` instructions
5. **Monitor:** Check Vercel/Netlify analytics for performance

For more complex customizations or questions about specific components, see inline comments in the respective `.tsx` files.
