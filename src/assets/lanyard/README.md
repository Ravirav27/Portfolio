# Lanyard Assets

Place your asset files here:

1. **card.glb** - The 3D model file for the lanyard card
   - You can customize this using: https://modelviewer.dev/editor/
   - Dimensions: Should be approximately 1.6 x 2.25 units (standard card ratio)

2. **lanyard.png** - The texture for the lanyard's band
   - Can be any image file you want to use as the band texture
   - Works as a repeating pattern on the lanyard rope

## How to get these files:
Download from the repo's files under `src/assets/lanyard` directory and place them here.

## Import in Lanyard.tsx:
```tsx
import cardGLB from '@/assets/lanyard/card.glb';
import lanyardTexture from '@/assets/lanyard/lanyard.png';
```

The component will automatically use these files once you add them to this directory.
