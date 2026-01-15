# Color Configuration Guide

## How to Update Colors from PDF

### Step 1: Extract Colors from PDF
1. Open the PDF in a PDF viewer or design tool (Adobe Acrobat, InDesign, etc.)
2. Use the color picker tool to identify the main colors used
3. Note down the hex codes or RGB values

### Step 2: Update Color Files

#### Update `src/lib/colors.ts`
Replace the placeholder values with your actual brand colors:

```typescript
export const brandColors = {
  primary: "#YOUR_PRIMARY_COLOR",    // Main brand color
  secondary: "#YOUR_SECONDARY_COLOR", // Secondary color
  accent: "#YOUR_ACCENT_COLOR",       // Accent/highlight color
  // ... add more as needed
};
```

#### Update `tailwind.config.ts`
Update the Tailwind color configuration:

```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_PRIMARY_COLOR",
    // ... shades
  },
  accent: {
    DEFAULT: "#YOUR_ACCENT_COLOR",
    // ... shades
  },
}
```

### Step 3: Common Color Locations in PDF
Look for colors in:
- Logo
- Headers and titles
- Buttons and CTAs
- Background sections
- Accent elements
- Footer

### Step 4: Test
After updating colors:
1. Restart the dev server: `npm run dev`
2. Check all pages to ensure colors are applied correctly
3. Adjust as needed

## Color Tools
- Use online tools like [Coolors](https://coolors.co/) to extract colors from images
- Use browser DevTools color picker when viewing PDF in browser
- Use design tools like Figma, Adobe XD to extract colors
