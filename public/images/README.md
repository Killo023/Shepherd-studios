# Images Directory

This directory contains all images for the Shepherd Studios website.

## Directory Structure

```
images/
├── logo/           # Logo files (PNG, SVG, etc.)
├── portfolio/      # Portfolio project images
└── README.md       # This file
```

## Adding Images

### Logo
1. Place your logo files in the `logo/` directory
2. Supported formats: PNG, SVG, JPG
3. Recommended: SVG for best quality, or high-resolution PNG
4. Update the logo path in components that use it

### Portfolio Images
1. Place portfolio project images in the `portfolio/` directory
2. Name them: `project-1.jpg`, `project-2.jpg`, etc.
3. Or use descriptive names: `ecommerce-platform.jpg`
4. Update the image paths in `src/app/portfolio/page.tsx`
5. Recommended size: 1200x800px or larger
6. Formats: JPG, PNG, WebP

### Video Thumbnails
1. Place video thumbnails in the `videos/` directory (or create it)
2. Update thumbnail paths in `src/app/videos/page.tsx`

## Image Optimization

- Use WebP format when possible for better compression
- Optimize images before adding (use tools like TinyPNG, ImageOptim)
- Keep file sizes reasonable (< 500KB per image)
- Use Next.js Image component for automatic optimization
