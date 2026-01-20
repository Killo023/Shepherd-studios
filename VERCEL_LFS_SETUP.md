# Vercel Git LFS Setup for Hero Video

## Issue
The hero background video (79MB) is tracked with Git LFS but may not be accessible on Vercel.

## Solution: Ensure Vercel Pulls Git LFS Files

### Option 1: Configure Vercel Build Settings

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Select your Shepherd Studios project
   - Go to **Settings** → **General**

2. **Add Build Command:**
   - Scroll to **Build & Development Settings**
   - In **Build Command**, add Git LFS pull:
   ```bash
   git lfs install && git lfs pull && npm run build
   ```
   - Or modify existing build command:
   ```bash
   git lfs install && git lfs pull && next build
   ```

3. **Install Git LFS in Build Environment:**
   - Add to **Environment Variables**:
   - Or add to `package.json` scripts:
   ```json
   {
     "scripts": {
       "build": "git lfs install && git lfs pull && next build"
     }
   }
   ```

### Option 2: Use Vercel CLI with Git LFS

```bash
# Install Git LFS if not already installed
git lfs install

# Ensure file is tracked
git lfs track "public/videos/hero-background.mp4"

# Commit and push
git add .gitattributes public/videos/hero-background.mp4
git commit -m "Ensure hero video tracked with LFS"
git push origin main
```

### Option 3: Verify File is Accessible

After deployment, test the video URL:
- `https://your-vercel-url.vercel.app/videos/hero-background.mp4`

If you get a 404 or the file doesn't load, Git LFS files aren't being pulled.

### Option 4: Alternative - Use Vercel Blob Storage

If Git LFS continues to cause issues:

1. Upload video to Vercel Blob Storage
2. Get the blob URL
3. Update `HeroSection.tsx` to use the blob URL

### Current Status

- ✅ File is tracked: `public/videos/hero-background.mp4`
- ✅ Git LFS configured: `.gitattributes` includes `public/videos/*.mp4`
- ⚠️ Vercel may need Git LFS in build command

## Quick Test

Check browser console on your Vercel deployment:
- Look for: "Hero video loaded successfully" or error messages
- Check Network tab: Is `/videos/hero-background.mp4` loading?
