# Quick Start - Get Running in 5 Minutes

## 1. Install (30 seconds)
```bash
cd /Users/benmallin/Desktop/Bolt/uniform-launch
npm install
```

## 2. Start Dev Server (30 seconds)
```bash
npm run dev
# Opens on http://localhost:3000
```

## 3. View the Site
Open your browser: http://localhost:3000

You'll see a fully functional uniform launch site with:
- Hero section with gradient and scroll indicator
- Campaign concept section
- Three uniform showcases with carousels
- Size guide, player name/number section
- Purchase schedule and retail locations
- Partners section and footer

## 4. Make Your First Change

Edit `content/campaign.ts`:

Change line 158:
```typescript
// FROM:
name: 'FC Tokyo',

// TO:
name: 'Your Club Name',
```

The site updates automatically! (hot reload)

## 5. Preview Mobile

In your browser:
- Press `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac)
- Resize to see responsive design at different breakpoints

## 6. Deploy (2 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel

# Follow prompts:
# - Login/signup with GitHub/email
# - Configure project
# - Deploy
# - Your site is now live!
```

Your public URL will be displayed.

## Files to Know

| File | Purpose | Edit? |
|------|---------|-------|
| `content/campaign.ts` | Campaign data (club, colors, uniforms) | ✅ YES |
| `app/page.tsx` | Main page structure | ⚠️ Only if adding sections |
| `components/` | UI sections (Hero, UniformShowcase, etc) | ⚠️ For styling tweaks |
| `public/images/` | Image assets | ✅ Add your images |
| `public/logos/` | Logo assets | ✅ Add your logos |
| `README.md` | Overview | 📖 Read first |
| `ARCHITECTURE.md` | Technical details | 📖 For customization |
| `DEPLOYMENT.md` | Hosting options | 📖 Before deployment |

## Common First Changes

### Change Primary Color
In `content/campaign.ts`, find `colors:` and update:
```typescript
colors: {
  primary: "#FF0000",        // Change this
  secondary: "#1B3A8A",
  // ...
}
```

### Change Club Name
In `content/campaign.ts`, find `club:` and update:
```typescript
club: {
  name: "Your Club Name",    // Change this
  logo: "/logos/your-club.svg",
  shortName: "YourClub",
}
```

### Add Hero Images
1. Create optimized JPEG/PNG images
2. Place in `/public/images/`
3. Reference in `campaign.ts` `hero.images` array

## Folder Structure Reference

```
uniform-launch/
├── content/campaign.ts       ← ⭐ Update this for new campaigns
├── public/images/            ← ⭐ Add your hero/uniform photos
├── public/logos/             ← ⭐ Add your brand logos
├── components/               ← Reusable sections (don't usually edit)
├── app/                      ← Main layout (rarely edit)
└── Documentation/            ← README, ARCHITECTURE, DEPLOYMENT
    ├── README.md             ← Read this
    ├── ARCHITECTURE.md       ← Advanced customization guide
    └── DEPLOYMENT.md         ← Before going live
```

## What to Do Next

**Option 1: Test & Experiment**
- Change colors in campaign.ts
- Update club name
- Try different text
- See it update live in dev server

**Option 2: Prepare Real Content**
- Gather photography
- Optimize images
- Write campaign copy
- Collect URLs (shop, partners, retail)

**Option 3: Deploy to Production**
- Follow DEPLOYMENT.md
- Use Vercel (recommended) or Netlify
- Your site goes live!

## Troubleshooting

**Dev server won't start?**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Changes not showing?**
- Make sure you saved the file
- Check browser console for errors (F12)
- Try hard refresh (Ctrl+Shift+R)

**Build fails?**
```bash
npm run build
# Check error message
# Usually missing images or config issue
```

**Can't deploy?**
- Install Vercel CLI: `npm install -g vercel`
- Make sure git repo is clean: `git status`
- Try again: `vercel`

## Next Steps

1. ✅ You've got it running locally
2. 📝 Update content in campaign.ts
3. 📸 Add your images
4. 🚀 Deploy with `vercel`
5. 🎉 Live!

## Need More Help?

- **Quick questions** → Check inline comments in components
- **How to customize** → Read ARCHITECTURE.md
- **How to deploy** → Read DEPLOYMENT.md
- **Visual guide** → README.md

---

**That's it!** You're ready to build. Go change the world with your uniform launch. 🚀
