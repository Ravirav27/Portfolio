# Lanyard Implementation Guide

## ✅ What's Already Done

1. **Dependencies Installed**
   - `@react-three/fiber` - React renderer for Three.js
   - `@react-three/drei` - Useful Three.js helpers
   - `@react-three/rapier` - Physics engine for interactive effects
   - `meshline` - Custom mesh line rendering
   - `three` - 3D JavaScript library

2. **Component Created**
   - `src/components/Lanyard.tsx` - Full Lanyard component with physics simulation
   - `src/components/Lanyard.css` - Responsive sticky positioning (left side, fixed)
   - TypeScript declarations in `src/global.d.ts` and `src/vite-env.d.ts`
   - Vite configuration already includes `assetsInclude: ['**/*.glb']`

3. **Integration Complete**
   - Lanyard imported in `src/pages/Index.tsx`
   - Renders at the top left corner as a sticky element
   - Hangs from the header section as requested

## 📦 Next Steps - Add Your Assets

The component is ready to go! You just need to add the 3D model and texture files:

### 1. Create Asset Directory (Already Done)
```
src/assets/lanyard/
├── README.md
├── card.glb          ← Add this file
└── lanyard.png       ← Add this file
```

### 2. Download Assets
Visit the repository's files under `src/assets/lanyard/` and download:
- **card.glb** - 3D model of the lanyard card
- **lanyard.png** - Texture for the lanyard band

### 3. Place Files
Copy both files to: `src/assets/lanyard/`

### 4. (Optional) Customize Assets
- **Edit card.glb**: Use https://modelviewer.dev/editor/ to customize the 3D model
- **Edit lanyard.png**: Use any image editor to change the band texture

## 🎨 Component Features

The Lanyard component includes:
- **Interactive 3D Card** - Drag and drop the card with mouse
- **Physics Simulation** - Realistic rope and gravity physics
- **Sticky Positioning** - Fixed to the left side of the page
- **Responsive Design**:
  - Desktop (1440px+): 320px wide
  - Laptop (1025-1440px): 280px wide
  - Tablet (768-1024px): 240px wide
  - Mobile Landscape (<768px): Hidden by default, slide in on hover
  - Mobile Portrait (<480px): Completely hidden
- **Smooth Animations** - Cursor changes to grab/grabbing on hover
- **Mobile Optimized** - Reduces physics calculations on mobile devices

## 🔧 Customization Options

You can customize the Lanyard by passing props:

```tsx
<Lanyard 
  position={[0, 0, 30]}      // Camera position
  gravity={[0, -40, 0]}       // Physics gravity
  fov={20}                    // Camera field of view
  transparent={true}          // Canvas background transparency
/>
```

## 📱 Responsive Behavior

| Breakpoint | Size | Behavior |
|-----------|------|----------|
| Desktop+ | 320px | Full visible left side |
| Laptop | 280px | Full visible left side |
| Tablet | 240px | Full visible left side |
| Mobile Landscape | 200px | Hidden by default, slide in on hover |
| Mobile Portrait | Hidden | Completely hidden to save space |

## 🐛 Troubleshooting

If you see "Lanyard assets missing" message:
1. Check that `card.glb` and `lanyard.png` are in `src/assets/lanyard/`
2. Ensure file names match exactly (case-sensitive on Linux/Mac)
3. Restart the dev server: `npm run dev`

If the component doesn't appear:
1. Ensure `Lanyard` is imported in `src/pages/Index.tsx`
2. Check browser console for errors (F12 → Console tab)
3. Verify that Three.js dependencies are installed

## 📄 Files Modified

1. **src/pages/Index.tsx**
   - Added import: `import Lanyard from "@/components/Lanyard";`
   - Added component: `<Lanyard />`

2. **src/components/Lanyard.tsx** (New)
   - Complete Lanyard component with physics
   - Band function for rope simulation

3. **src/components/Lanyard.css** (New)
   - Sticky positioning
   - Responsive breakpoints
   - Smooth transitions

4. **src/global.d.ts** (Already existed)
   - Type declarations for GLB and PNG files
   - Type declarations for meshline library

5. **src/vite-env.d.ts** (Already existed)
   - Type declarations for Vite client

6. **vite.config.ts** (Already had GLB config)
   - No changes needed

## 🎯 What's Happening

1. **Component Structure**: The Lanyard renders a Canvas from React Three Fiber
2. **Physics Engine**: Rapier provides realistic physics for the rope and card
3. **Positioning**: Fixed position on the left with responsive behavior
4. **Interactivity**: Grab and drag the card, it swings on the lanyard with physics
5. **Asset Loading**: GLB and PNG files are loaded and applied to the 3D model

## ✨ Try It Out

1. Run dev server: `npm run dev`
2. Add the asset files to `src/assets/lanyard/`
3. Refresh the page
4. Hover over the left side and grab the card to interact with it!

Need help? Check the console (F12) for any errors or warnings.
