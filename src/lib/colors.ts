// Brand colors - UPDATE THESE WITH COLORS FROM YOUR PDF
// Common color formats to extract from PDF:
// - Hex codes: #RRGGBB
// - RGB values: rgb(r, g, b)
// - Color names from PDF design

export const brandColors = {
  // Primary brand color (dark teal/deep blue from logo)
  primary: "#1a5f7a", // Dark teal from Shepherd Studios logo
  
  // Secondary color (accent/secondary brand color)
  secondary: "#ffffff", // White
  
  // Accent color (highlight/CTA color - lighter teal)
  accent: "#2a7fa0", // Lighter teal for accents and CTAs
  
  // Light blue for secondary text (from About section design)
  lightBlue: "#6b9bc2", // Lighter blue for "About" label and body text
  
  // Background colors
  background: {
    light: "#ffffff",
    dark: "#1a1a1a",
    gray: "#f5f5f5",
  },
  
  // Text colors
  text: {
    primary: "#1a1a1a",
    secondary: "#666666",
    light: "#ffffff",
  },
  
  // Add more colors as needed from PDF
  // Example:
  // tertiary: "#ff6b6b",
  // success: "#4ecdc4",
};

export default brandColors;
