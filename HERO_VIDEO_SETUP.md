# Hero Background Video Setup

## Issue
The hero background video (79MB) may not load on Vercel due to file size limitations.

## Solutions

### Option 1: Host on Google Drive (Recommended)
1. Upload `hero background video.mp4` to Google Drive
2. Set sharing to "Anyone with the link can view"
3. Get the share link
4. Update `src/components/sections/HeroSection.tsx` to use the Google Drive URL

### Option 2: Optimize the Video
Reduce file size using FFmpeg or online tools:
```bash
# Using FFmpeg (if installed)
ffmpeg -i "media/hero background video.mp4" -vcodec libx264 -crf 28 -preset slow -vf scale=1920:1080 -an "public/videos/hero-background-optimized.mp4"
```

### Option 3: Use Git LFS
If the file is already tracked, ensure Git LFS is properly configured:
```bash
git lfs track "public/videos/hero-background.mp4"
git add .gitattributes
git commit -m "Track hero video with Git LFS"
git push origin main
```

### Option 4: Use a CDN
Upload to:
- Cloudinary
- AWS S3 + CloudFront
- Vimeo (unlisted)
- YouTube (unlisted)

Then update the video source URL in `HeroSection.tsx`.

## Current Setup
- Video path: `/videos/hero-background.mp4`
- File size: ~79MB
- Location: `public/videos/hero-background.mp4`

## Quick Fix: Use Google Drive
1. Upload video to Google Drive
2. Get share link
3. Convert to direct URL format
4. Update HeroSection component
