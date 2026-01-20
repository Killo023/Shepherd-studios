# Google Drive Video Setup - Quick Example

## Step-by-Step Guide

### 1. Upload Videos to Google Drive
- Go to https://drive.google.com
- Upload your videos
- Right-click each video → **Share** → **Get link**
- Set to "Anyone with the link can view"
- Copy the link

### 2. Get the File ID
From a link like this:
```
https://drive.google.com/file/d/1ABC123XYZ789/view?usp=sharing
```

The File ID is: `1ABC123XYZ789` (the part between `/d/` and `/view`)

### 3. Update `src/lib/videos.ts`

Replace the `videoPath` values with your Google Drive share links:

```typescript
export const videoData = [
  {
    id: '1',
    title: 'Pizza Hut - Brand Campaign',
    description: 'Brand campaign video for Pizza Hut...',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing',
    category: 'brand-campaign',
  },
  {
    id: '2',
    title: 'Puma - Brand Campaign',
    description: 'Dynamic brand campaign video...',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing',
    category: 'brand-campaign',
  },
  // ... repeat for all videos
];
```

### 4. The Code Automatically Converts URLs
The helper function will automatically convert:
- Share links → Direct download URLs
- Works seamlessly with HTML5 video elements

### 5. Test Your Videos
After updating, test by:
1. Saving the file
2. Refreshing your website
3. Clicking on a video card
4. The video should play from Google Drive!

## Troubleshooting

**If videos don't play:**
1. ✅ Check sharing settings: Must be "Anyone with the link can view"
2. ✅ Verify the File ID is correct in the URL
3. ✅ Check browser console for errors
4. ✅ Try using the direct download URL format instead

**If you see CORS errors:**
- Google Drive may block direct video playback in some browsers
- Solution: Use the preview URL format and embed in iframe (contact support for help)

## Important Notes

⚠️ **Sharing Settings:**
- Videos MUST be set to "Anyone with the link can view"
- Otherwise, they won't play on your website

⚠️ **Bandwidth:**
- Google Drive has daily bandwidth limits for free accounts
- For high traffic sites, consider YouTube, Vimeo, or a CDN
