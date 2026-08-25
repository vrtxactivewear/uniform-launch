# Deploy to Live URL - 2 Minutes

## Option 1: Automatic Deployment (EASIEST - 2 minutes)

### Step 1: Go Here
https://vercel.com/import?

### Step 2: Click "Import Project"
Then select "Import Git Repository"
Paste this URL: https://github.com/YOUR_USERNAME/uniform-launch
(Or just connect your GitHub account)

### Step 3: Click "Deploy"
Your site is now LIVE at: `your-domain.vercel.app`

That's it. 2 minutes. Done.

---

## Option 2: Command Line (If you prefer)

```bash
cd /Users/benmallin/Desktop/Bolt/uniform-launch
npm install -g vercel
vercel --prod
# Follow the 2 prompts
# Done!
```

Your URL will be displayed.

---

## Option 3: Use GitHub Pages (Free, Automatic)

1. Create a GitHub account (free)
2. Create a repo called `uniform-launch`
3. Push this code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/uniform-launch.git
   git branch -M main
   git push -u origin main
   ```
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Your site is live at: `YOUR_USERNAME.github.io/uniform-launch`

---

## Already Want to See It Work?

Your site is already built and ready. The project at:
```
/Users/benmallin/Desktop/Bolt/uniform-launch/
```

Is a complete, working, production-ready site. It just needs to be pushed to a host.

The deployment is literally clicking a button or running one command.

Pick whichever option above appeals to you most, and your site will be live within 2 minutes.

Questions? Read `README.md` or `QUICKSTART.md`.
