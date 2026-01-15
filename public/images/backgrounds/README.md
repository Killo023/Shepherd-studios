# Background Images

This directory is for storing background images used throughout the website.

## Current Implementation

The website currently uses free Unsplash images directly via URLs. These are set in the following components:

- **Hero Section**: Sheep in grass plains
- **About Section**: Grass plains landscape
- **Services Section**: Sheep in field
- **Contact Section**: Grass plains landscape

## Using Local Images

If you want to use local images instead of Unsplash URLs:

1. Add your images to this directory (`public/images/backgrounds/`)
2. Update the image paths in the following files:
   - `src/components/sections/HeroSection.tsx`
   - `src/components/sections/AboutSection.tsx`
   - `src/components/sections/ServicesSection.tsx`
   - `src/components/sections/ContactSection.tsx`

3. Change from:
   ```tsx
   src="https://images.unsplash.com/photo-..."
   ```
   
   To:
   ```tsx
   src="/images/backgrounds/your-image.jpg"
   ```

## Recommended Image Specifications

- **Format**: JPG or PNG
- **Size**: 1920x1080px or larger
- **File Size**: Optimize to keep under 500KB per image
- **Aspect Ratio**: 16:9 or wider for best results

## Image Sources

Current images are from Unsplash (free to use):
- Hero: https://unsplash.com/photos/sheep-in-grass-plains
- About: https://unsplash.com/photos/grass-plains-landscape
- Services: https://unsplash.com/photos/sheep-in-field
- Contact: https://unsplash.com/photos/grass-plains-landscape
