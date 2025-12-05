# Vercel Deployment Guide for Radiant Portfolio

## Pre-Deployment Checklist

### 1. **Local Testing**
- [ ] Run `npm run dev:full` and test all features locally
- [ ] Verify view counter working (`http://localhost:8080`)
- [ ] Test email form functionality
- [ ] Check responsive design on mobile/tablet
- [ ] Verify SEO meta tags in `index.html`

**Note:** `npm run dev:full` runs both:
- Vite dev server on `http://localhost:8080`
- Express API server on `http://localhost:3001`

### 2. **Environment Variables Setup**
Before deploying, ensure these are NOT in `.env.local` on your machine (they should be):
```
GMAIL_EMAIL=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

### 3. **Git Repository Setup**
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial portfolio with view counter and SEO"

# Add GitHub remote
git remote add origin https://github.com/Ravi2ie/radiant-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step-by-Step Vercel Deployment

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import Project
1. Click "New Project" on Vercel dashboard
2. Select "Import Git Repository"
3. Find and select `radiant-portfolio`
4. Click "Import"

### Step 3: Configure Project Settings
**Framework Preset:** Select "Vite" (or leave as automatic)

**Root Directory:** `/` (default is fine)

**Build Command:** `npm run build`

**Output Directory:** `dist`

**Install Command:** `npm install --legacy-peer-deps` (use this to avoid React peer dependency issues)

### Step 4: Set Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables:

Add these variables:
```
GMAIL_EMAIL = your-email@gmail.com
GMAIL_APP_PASSWORD = your-16-char-app-password
```

**Set for:** Production, Preview, Development

### Step 5: Deploy
1. Click "Deploy"
2. Wait for build to complete (usually 2-3 minutes)
3. You'll get a deployment URL like: `https://radiant-portfolio-xyz.vercel.app`

### Step 6: Verify Deployment
- [ ] Visit your Vercel URL
- [ ] Check view counter displays (it will show hits.sh count)
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Verify responsive design

---

## Making Changes After Deployment

### Option 1: Simple Changes (Recommended)
```bash
# Make your code changes locally
# Example: Edit src/components/sections/Hero.tsx

# Test locally
npm run dev

# Commit changes
git add .
git commit -m "feat: update hero section styling"

# Push to GitHub
git push origin main
```
**Vercel automatically redeploys** when you push to GitHub! ✅

### Option 2: Deploy from Vercel CLI
```bash
# Install Vercel CLI globally (one time)
npm i -g vercel

# Deploy from project directory
vercel

# For production
vercel --prod
```

### Option 3: Redeploy from Dashboard
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments" tab
4. Find the deployment you want
5. Click "..." → "Redeploy"

---

## Common Deployment Issues & Solutions

### Issue 1: Build Fails with "Module not found"
**Solution:** Use `--legacy-peer-deps` in build command
```
Install Command: npm install --legacy-peer-deps
Build Command: npm run build
```

### Issue 2: Email Sending Not Working
**Solution:** Verify environment variables are set:
1. Go to Project Settings → Environment Variables
2. Check `GMAIL_EMAIL` and `GMAIL_APP_PASSWORD` are present
3. Make sure they're set for "Production"
4. Redeploy after adding variables

### Issue 3: View Counter Shows "N/A"
**Solution:** This is normal on first load. The API needs to:
- Fetch from hits.sh
- Parse the SVG
- Return the count

If it persists:
1. Check your API logs in Vercel
2. Verify `/api/get-views` endpoint is working
3. Test with: `curl https://your-domain.vercel.app/api/get-views`

### Issue 4: 404 on API Routes
**Solution:** Vercel handles API routes automatically. Ensure:
- API files are in `api/` folder at root
- They export default functions
- Routes are accessed as `/api/endpoint-name`

---

## Workflow for Future Changes

### Daily Development Flow:
```bash
# 1. Create a feature branch (optional but recommended)
git checkout -b feature/my-new-feature

# 2. Start development servers (runs Vite + Express)
npm run dev:full

# 3. Make changes and they hot-reload automatically
# Edit files in src/ and api/

# 4. Test locally at http://localhost:8080

# 5. Commit changes
git add .
git commit -m "feat: describe your changes"

# 6. Push to GitHub
git push origin feature/my-new-feature

# 7. Create Pull Request on GitHub (optional)

# 8. When ready, merge to main
git checkout main
git merge feature/my-new-feature
git push origin main

# 9. Vercel automatically deploys! ✨
```

### Individual Server Commands (if needed):
```bash
# Vite dev server only (port 8080)
npm run dev

# Express API server only (port 3001)
npm run dev:server

# Build for production
npm run build
```

---

## Monitoring & Analytics

### View Deployment Logs
1. Vercel Dashboard → Project
2. Click "Deployments" tab
3. Click on deployment to see logs
4. Check "Function Logs" for API errors

### Check Performance
1. Dashboard → Analytics
2. Monitor build times
3. Check Function execution times

---

## Custom Domain Setup (Optional)

### Add Custom Domain
1. Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., `ravishankar-portfolio.com`)
3. Follow DNS configuration instructions
4. Update hits.sh URL in `api/get-views.js` if using custom domain:
```javascript
const hitsUrl = 'https://hits.sh/your-custom-domain.svg?t=' + Date.now();
```

---

## Rollback to Previous Deployment

If something breaks after deployment:

1. Go to Vercel Dashboard → Deployments
2. Find the working deployment
3. Click "..." → "Promote to Production"

This instantly reverts to the previous working version!

---

## Quick Reference: Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "message here"

# Push to GitHub (auto-deploys to Vercel)
git push origin main

# View commit history
git log --oneline

# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Undo last commit (removes changes)
git reset --hard HEAD~1
```

---

## After First Deployment

### Don't Forget:
- [ ] Update GitHub profile with portfolio link
- [ ] Add portfolio URL to LinkedIn
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Share on Twitter/X

Your portfolio is now live! 🚀
