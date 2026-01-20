# How to Upload Videos to Vercel

## Method 1: Using Vercel Dashboard (Easiest)

### Step-by-Step Instructions:

1. **Access Your Vercel Project:**
   - Go to https://vercel.com/dashboard
   - Sign in to your account
   - Find and click on your "Shepherd-studios" project

2. **Navigate to Deployment Settings:**
   - Click on your project
   - Go to the **Settings** tab (top navigation)
   - Look for **General** settings

3. **Upload Files:**
   - Unfortunately, Vercel doesn't have a direct file upload feature in the dashboard
   - You'll need to use one of the methods below instead

## Method 2: Using Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Link Your Project
Navigate to your project folder and run:
```bash
cd "F:\Ark Digital\Ark Digital\Shepherd studios"
vercel link
```
Follow the prompts to select your project.

### Step 4: Ensure Videos Are in the Right Place
Make sure your videos are in the `public/videos/` folder:
```
public/videos/
├── 1- Pizza Hut.mp4
├── 2- Puma.mp4
├── 3- Melrose Arch.mp4
├── 4- Play Energy.mp4
├── 1- Knorr Durban July Corporate Video.mp4
└── 2- Knorr Cook-Off Highlight Video.mp4
```

### Step 5: Temporarily Allow Videos in Git (For Upload)
We need to temporarily allow videos to be included in the deployment:

1. **Edit `.gitignore`:**
   - Comment out or remove the line: `public/videos/*.mp4`
   - Change it to: `# public/videos/*.mp4` (commented out)

2. **Add videos to git:**
   ```bash
   git add public/videos/*.mp4
   git commit -m "Add videos for Vercel deployment"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

4. **Vercel will automatically deploy:**
   - Vercel watches your GitHub repo
   - It will automatically trigger a new deployment
   - Videos will be included in the build

### Step 6: Deploy with Vercel CLI (Alternative)
If you want to deploy directly without pushing to GitHub:
```bash
vercel --prod
```
This will upload everything including videos.

## Method 3: Using Git LFS (For Large Files)

If videos are too large for regular git:

### Step 1: Install Git LFS
```bash
# Windows (using Git for Windows, usually pre-installed)
git lfs install

# Or download from: https://git-lfs.github.com/
```

### Step 2: Track Video Files
```bash
cd "F:\Ark Digital\Ark Digital\Shepherd studios"
git lfs track "public/videos/*.mp4"
git add .gitattributes
```

### Step 3: Add Videos
```bash
# Remove videos from .gitignore temporarily
# Edit .gitignore and comment out: public/videos/*.mp4

git add public/videos/*.mp4
git commit -m "Add videos using Git LFS"
git push origin main
```

## Method 4: Manual Upload via GitHub (Easiest for Large Files)

1. **Go to GitHub:**
   - Visit: https://github.com/Killo023/Shepherd-studios
   - Navigate to `public/videos/` folder

2. **Upload Files:**
   - Click "Add file" → "Upload files"
   - Drag and drop your video files
   - Commit the changes

3. **Vercel Auto-Deploys:**
   - Vercel will automatically detect the changes
   - It will trigger a new deployment with videos included

## Important Notes:

⚠️ **File Size Limits:**
- GitHub: 100MB per file limit
- Git LFS: Recommended for files over 50MB
- Vercel: No specific limit, but large files slow down deployments

⚠️ **After Upload:**
- Remember to add `public/videos/*.mp4` back to `.gitignore` if you want to exclude them from future commits
- Or keep them in git if you want them versioned

## Verify Videos Are Working:

After deployment, test by visiting:
```
https://your-vercel-url.vercel.app/videos/1- Pizza Hut.mp4
```

If the video loads, it's working! 🎉

## Troubleshooting:

**If videos still don't work:**
1. Check Vercel build logs for errors
2. Verify file paths match exactly (including spaces)
3. Check browser console for 404 errors
4. Ensure videos are actually in `public/videos/` folder

**If deployment fails:**
- Videos might be too large
- Use Git LFS or external hosting instead
