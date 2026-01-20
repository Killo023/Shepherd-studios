# Quick Fix: Upload Videos to Vercel

## Problem
Videos aren't accessible on Vercel because they're excluded from git.

## Solution: Upload Videos via Vercel Dashboard

### Method 1: Using Vercel Dashboard (Easiest)

1. **Go to your Vercel project:**
   - Visit https://vercel.com/dashboard
   - Select your Shepherd Studios project

2. **Upload videos:**
   - Go to **Settings** → **General**
   - Scroll to **File Upload** section
   - Upload your video files from `public/videos/` folder
   - Or use Vercel's CLI (see Method 2)

3. **Redeploy:**
   - After uploading, trigger a new deployment
   - Videos should now be accessible

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (if not already linked)
vercel link

# Deploy with videos included
# Make sure videos are in public/videos/ folder
vercel --prod
```

### Method 3: Use External Video Hosting (Recommended)

For better performance and reliability, host videos externally:

1. **Upload videos to a CDN:**
   - Cloudinary (free tier): https://cloudinary.com
   - AWS S3 + CloudFront
   - Vercel Blob Storage
   - Or any video hosting service

2. **Set environment variable in Vercel:**
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_VIDEO_BASE_URL` = `https://your-cdn.com/videos`
   - Redeploy

3. **Videos will automatically use external URLs**

### Method 4: Temporarily Allow Videos in Git

If you want to include videos in git (not recommended for large files):

1. Remove `public/videos/*.mp4` from `.gitignore`
2. Commit and push videos
3. Vercel will deploy them automatically

⚠️ **Warning:** This will make your repository very large!

## Current Setup

The code now supports both local and external video hosting:
- If `NEXT_PUBLIC_VIDEO_BASE_URL` is set → uses external URLs
- Otherwise → uses local paths from `/videos/`

## Video Files Location

Your videos should be in:
```
public/videos/
├── 1- Pizza Hut.mp4
├── 2- Puma.mp4
├── 3- Melrose Arch.mp4
├── 4- Play Energy.mp4
├── 1- Knorr Durban July Corporate Video.mp4
└── 2- Knorr Cook-Off Highlight Video.mp4
```

## Quick Test

After uploading, test by visiting:
- `https://your-vercel-url.vercel.app/videos/1- Pizza Hut.mp4`

If the video loads, it's working!
