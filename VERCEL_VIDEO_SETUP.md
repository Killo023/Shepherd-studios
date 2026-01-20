# Vercel Video Setup Guide

## Problem
Videos are excluded from git due to GitHub's file size limits, so they're not available on Vercel deployments.

## Solutions

### Option 1: Upload Videos Directly to Vercel (Recommended for Quick Setup)

1. **Via Vercel Dashboard:**
   - Go to your Vercel project dashboard
   - Navigate to Settings → General
   - Use the "Upload Files" feature to upload videos to `public/videos/`
   - Or use Vercel CLI: `vercel --prod` and upload files during deployment

2. **Via Vercel CLI:**
   ```bash
   # Install Vercel CLI if not already installed
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Link your project
   vercel link
   
   # Upload videos directly
   vercel --prod
   ```

### Option 2: Host Videos Externally (Recommended for Production)

#### Using Cloud Storage Services:

**A. Cloudinary (Free tier available):**
1. Sign up at https://cloudinary.com
2. Upload videos to Cloudinary
3. Get video URLs
4. Update video URLs in code (see below)

**B. AWS S3 + CloudFront:**
1. Upload videos to S3 bucket
2. Configure CloudFront distribution
3. Use CloudFront URLs in code

**C. Vimeo/YouTube (Unlisted):**
1. Upload videos as unlisted
2. Use embed URLs or direct video URLs
3. Update code to use these URLs

**D. Vercel Blob Storage:**
1. Use Vercel's Blob storage for media files
2. Upload videos via Vercel dashboard or API
3. Reference via Vercel Blob URLs

### Option 3: Update .gitignore to Allow Videos (Not Recommended)

⚠️ **Warning:** This will make your repo very large and slow.

1. Remove `public/videos/*.mp4` from `.gitignore`
2. Use Git LFS for large files:
   ```bash
   git lfs install
   git lfs track "*.mp4"
   git add .gitattributes
   git add public/videos/*.mp4
   git commit -m "Add videos with Git LFS"
   git push
   ```

## Updating Code for External URLs

If using external hosting, update the video URLs in:
- `src/app/portfolio/page.tsx`
- `src/app/videos/page.tsx`

Change from:
```typescript
videoUrl: '/videos/1- Pizza Hut.mp4'
```

To:
```typescript
videoUrl: 'https://your-cdn.com/videos/1-pizza-hut.mp4'
```

## Quick Fix: Environment Variables

You can also use environment variables for video base URLs:

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_VIDEO_BASE_URL=https://your-cdn.com/videos
   ```

2. Update video URLs in code to use:
   ```typescript
   videoUrl: `${process.env.NEXT_PUBLIC_VIDEO_BASE_URL}/1-pizza-hut.mp4`
   ```
