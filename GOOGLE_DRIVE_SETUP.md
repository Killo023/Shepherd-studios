# How to Host Videos on Google Drive and Use on Website

## Step 1: Upload Videos to Google Drive

1. **Go to Google Drive:**
   - Visit 
   - Sign in to your Google account

2. **Create a Folder (Optional but Recommended):**
   - Create a folder called "Shepherd Studios Videos"
   - This keeps your videos organized

3. **Upload Your Videos:**
   - Upload all your video files to this folder
   - Wait for uploads to complete

## Step 2: Get Shareable Links

For each video:

1. **Right-click on the video file** → **Share** → **Get link**
2. **Change sharing settings:**
   - Click "Change to anyone with the link"
   - Set permission to "Viewer" (not Editor)
   - Click "Copy link"
   - Click "Done"

3. **Extract the File ID:**
   - The link will look like: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
   - Copy the `FILE_ID_HERE` part (the long string between `/d/` and `/view`)

## Step 3: Update Your Video Configuration

The code automatically converts Google Drive share links to playable video URLs!

### Easiest Method: Use Share Link
Just paste the share link directly - the code will automatically convert it:
```typescript
{
  id: '1',
  title: 'Pizza Hut - Brand Campaign',
  videoPath: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing',
  // The code automatically converts this to: 
  // https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
}
```

### Alternative: Use Direct Download URL
You can also use the direct download URL format directly:
```typescript
{
  id: '1',
  title: 'Pizza Hut - Brand Campaign',
  videoPath: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
}
```

**Note:** The code automatically detects Google Drive URLs and converts share links to direct download URLs for optimal video playback.

### Quick Steps:
1. Open `src/lib/videos.ts`
2. Replace the `videoPath` values with your Google Drive URLs
3. Save and deploy

Example:
```typescript
export const videoData = [
  {
    id: '1',
    title: 'Pizza Hut - Brand Campaign',
    description: 'Brand campaign video for Pizza Hut...',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/1ABC123XYZ789/preview', // Your Google Drive URL
    category: 'brand-campaign',
  },
  // ... other videos
];
```

## Important Notes:

⚠️ **File Size Limits:**
- Google Drive free accounts: 15GB total storage
- Individual files: Up to 750GB (for Google Workspace) or 5TB (for Google One)

⚠️ **Sharing Settings:**
- Videos MUST be set to "Anyone with the link can view"
- Otherwise, they won't play on your website

⚠️ **Bandwidth Limits:**
- Google Drive has daily bandwidth limits for free accounts
- For high traffic, consider upgrading to Google Workspace or using a CDN

## Troubleshooting:

**If videos don't play:**
1. Check sharing settings (must be "Anyone with the link")
2. Verify the File ID is correct
3. Try using the `/preview` URL instead of `/uc?export=download`
4. Check browser console for CORS errors

**Better Alternative:**
For production websites with high traffic, consider:
- YouTube (unlisted videos)
- Vimeo
- Cloudinary
- AWS S3 + CloudFront
