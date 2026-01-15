# Shepherd Studios Website

A modern, responsive website built with Next.js 14+, React, and Three.js featuring stunning 3D elements and interactive experiences.

## Features

- **Modern Design**: Clean, modern UI with smooth animations
- **3D Elements**: Interactive 3D graphics using Three.js and React Three Fiber
- **Responsive**: Fully responsive design that works on all devices
- **Video Gallery**: Featured video player with grid gallery layout
- **Performance Optimized**: Lazy loading, code splitting, and optimized 3D rendering

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Library**: Three.js with React Three Fiber
- **3D Helpers**: @react-three/drei
- **Animations**: Framer Motion
- **Video**: React Player

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── 3d/          # 3D components (Three.js)
│   ├── layout/      # Layout components (Navbar, Footer)
│   ├── sections/    # Page sections
│   └── videos/      # Video-related components
└── lib/             # Utilities and constants
```

## Pages

- **Home** (`/`) - Hero section with 3D background, services preview, portfolio highlights
- **About** (`/about`) - Company information, mission, vision, values
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Project showcase with filters
- **Videos** (`/videos`) - Video gallery with featured video and grid layout
- **Contact** (`/contact`) - Contact form and information

## Adding Content

### Brand Colors

Update `src/lib/colors.ts` with colors extracted from the PDF.

### Site Content

Update `src/lib/constants.ts` with content from the PDF.

### Logo

Place logo files in `public/images/logo/` directory.

### Videos

Add video files to `public/videos/` and update the video data in `src/app/videos/page.tsx`.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### 3D Elements

Modify components in `src/components/3d/` to customize 3D effects.

## License

Copyright © 2025 Shepherd Studios. All rights reserved.
