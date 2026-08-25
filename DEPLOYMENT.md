# Uniform Launch Site - Deployment Guide

## Quick Start Deployment

This site is configured for instant deployment to zero-cost hosting platforms.

### Option 1: Vercel (Recommended)

Vercel is the optimal platform for Next.js applications.

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Deploy from the project directory:
   ```bash
   vercel
   ```

3. Follow the prompts to:
   - Connect your account (or create a new one)
   - Configure the project
   - Deploy

4. Your site will be live at a `vercel.app` domain
5. Connect to a custom domain in Vercel dashboard

**Cost:** $0 - Free tier includes sufficient bandwidth and performance

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod --dir=.next
   ```

3. Follow prompts to authenticate and deploy

**Cost:** $0 - Free tier is generous for uniform launch microsites

### Option 3: GitHub Pages (Static Build)

For a completely static deployment:

1. Build the site:
   ```bash
   npm run build
   ```

2. Export as static (requires `next.config.ts` modification - see below)

3. Push to GitHub and enable Pages

### Option 4: Cloudflare Pages

1. Push your code to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set publish directory: `.next` or `out` (depending on export config)

**Cost:** $0 - Unlimited bandwidth and requests

## Custom Domain Setup

### For Vercel:
1. In Vercel dashboard, navigate to your project
2. Go to Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

### For Netlify:
1. In Netlify dashboard, go to Settings > Domain management
2. Add custom domain
3. Configure DNS

### For Cloudflare Pages:
1. In Cloudflare dashboard, add your domain
2. Update nameservers at domain registrar
3. Pages will auto-deploy on git push

## Environment Variables (if needed)

Create a `.env.local` file for local development or set in hosting platform dashboard:

```
NEXT_PUBLIC_CAMPAIGN_ID=fctokyo-2026
NEXT_PUBLIC_API_ENDPOINT=https://api.example.com
```

## Performance Optimization

The site is already optimized for:
- Fast initial load (hero section first)
- Lazy loading of images
- CSS module code-splitting
- GSAP animations with GPU acceleration
- Responsive image loading

Monitor performance via:
- **Vercel Analytics:** Automatic with Vercel deployment
- **Netlify Analytics:** Optional add-on
- **Google PageSpeed Insights:** https://pagespeed.web.dev

## Pre-Deployment Checklist

- [ ] Replace placeholder images in `/public/images/`
- [ ] Update campaign content in `/content/campaign.ts`
- [ ] Update metadata in `/app/layout.tsx`
- [ ] Test responsive design at multiple breakpoints
- [ ] Verify all links work (shop, partners, retail)
- [ ] Test on mobile device
- [ ] Run production build locally: `npm run build && npm run start`

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next node_modules
npm install
npm run build
```

### Slow Performance
- Optimize images using https://tinypng.com or similar
- Use WebP format where possible
- Verify image sizes match layout dimensions

### Mobile Issues
- Test with Chrome DevTools mobile emulation
- Check viewport meta tag in `app/layout.tsx`
- Verify CSS media queries in component modules

## Creating a New Campaign

To launch a new uniform campaign with a different club:

1. Duplicate `/content/campaign.ts` or create new config
2. Update the campaign data:
   ```typescript
   export const newClubCampaign: CampaignConfig = {
     club: { name: "New Club", logo: "/logos/new-club.svg", shortName: "Club" },
     season: "2026/27",
     campaign: { theme: "...", concept: "...", tagline: "..." },
     colors: { primary: "#...", secondary: "#...", ... },
     // ... rest of config
   };
   ```
3. Update `/app/page.tsx` to import new config
4. Add/replace images in `/public/images/`
5. Rebuild and deploy

## Support & Customization

For custom features or modifications:
- Animation timing: Adjust in component `useEffect` hooks with GSAP
- Colors: Update `/content/campaign.ts` color values
- Layout: Modify component `.module.css` files
- Typography: Update design tokens in `/app/globals.css`

All changes require rebuild:
```bash
npm run build
npm run dev  # Test locally
# Then deploy
```
