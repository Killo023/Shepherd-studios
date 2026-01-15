# Shepherd Studios Website Setup Guide

## Quick Start

### 1. Update Colors from PDF

The colors currently don't match your PDF. To fix this:

1. **Extract colors from PDF:**
   - Open the PDF in Adobe Acrobat, Preview, or a design tool
   - Use a color picker to identify the main brand colors
   - Note the hex codes (e.g., #1a1a1a) or RGB values

2. **Update color files:**
   - Open `src/lib/colors.ts` and replace placeholder colors
   - Open `tailwind.config.ts` and update the color values
   - See `COLORS_GUIDE.md` for detailed instructions

### 2. Add Images

#### Portfolio Images
1. Add your portfolio project images to: `public/images/portfolio/`
2. Name them: `project-1.jpg`, `project-2.jpg`, etc.
3. Or update the paths in `src/app/portfolio/page.tsx` to match your naming
4. Recommended size: 1200x800px minimum

#### Logo
1. Add your logo files to: `public/images/logo/`
2. Supported formats: PNG, SVG, JPG
3. Update logo references in components (currently using 3D placeholder)

#### Video Thumbnails
1. Add video thumbnails to: `public/images/videos/`
2. Name them: `video-1-thumb.jpg`, `video-2-thumb.jpg`, etc.
3. Update paths in `src/app/videos/page.tsx`

### 3. Add Videos

1. Add video files to: `public/videos/`
2. Supported formats: MP4, WebM
3. Update video URLs in `src/app/videos/page.tsx`
4. Add corresponding thumbnails (see above)

## File Structure

```
public/
├── images/
│   ├── logo/          # Logo files
│   ├── portfolio/     # Portfolio project images
│   └── videos/        # Video thumbnails
└── videos/            # Video files

src/
├── lib/
│   └── colors.ts      # Brand colors (UPDATE THIS)
└── app/
    ├── portfolio/
    │   └── page.tsx   # Portfolio page (update image paths)
    └── videos/
        └── page.tsx   # Videos page (update video paths)
```

## Color Extraction Tips

### Method 1: Using PDF Viewer
1. Open PDF in Adobe Acrobat Reader
2. Use Tools > Content > Edit Object
3. Select colored elements to see color values

### Method 2: Using Design Tools
1. Import PDF into Figma, Adobe XD, or InDesign
2. Use color picker tool
3. Export color palette

### Method 3: Using Online Tools
1. Convert PDF pages to images
2. Upload to [Coolors.co](https://coolors.co/image-picker)
3. Extract color palette automatically

## Common Colors to Look For

- **Primary Color**: Main brand color (usually in logo, headers)
- **Secondary Color**: Supporting brand color
- **Accent Color**: Highlight/CTA color (buttons, links)
- **Background Colors**: Section backgrounds
- **Text Colors**: Heading and body text colors

## Testing

After making changes:

1. **Restart dev server:**
   ```bash
   npm run dev
   ```

2. **Check all pages:**
   - Home page
   - About page
   - Services page
   - Portfolio page (images should display)
   - Videos page (thumbnails should display)
   - Contact page

3. **Verify colors:**
   - Compare website colors with PDF
   - Check buttons, links, and accents
   - Ensure good contrast for readability

## Need Help?

- See `COLORS_GUIDE.md` for detailed color setup
- See `public/images/README.md` for image guidelines
- Check component files for comments indicating where to update paths
