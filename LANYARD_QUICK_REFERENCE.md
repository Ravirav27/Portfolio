# 🎯 Lanyard Quick Reference

## Setup Checklist

- [x] Dependencies installed (@react-three/fiber, @react-three/drei, @react-three/rapier, meshline, three)
- [x] Component created (src/components/Lanyard.tsx)
- [x] Styling created (src/components/Lanyard.css)
- [x] TypeScript types configured (src/global.d.ts, src/vite-env.d.ts)
- [x] Vite config ready (assetsInclude: ['**/*.glb'])
- [x] Integrated into Index.tsx
- [ ] **→ ADD ASSETS**: card.glb and lanyard.png to src/assets/lanyard/

## 📁 File Locations

```
radiant-portfolio/
├── src/
│   ├── components/
│   │   ├── Lanyard.tsx (✅ Created)
│   │   ├── Lanyard.css (✅ Created)
│   │   └── Navigation.tsx (unchanged)
│   ├── assets/
│   │   └── lanyard/
│   │       ├── README.md (info file)
│   │       ├── card.glb ← ADD THIS
│   │       └── lanyard.png ← ADD THIS
│   ├── global.d.ts (✅ Already has types)
│   ├── vite-env.d.ts (✅ Already has types)
│   └── pages/
│       └── Index.tsx (✅ Lanyard imported and used)
├── vite.config.ts (✅ Already configured for GLB)
└── LANYARD_SETUP.md (detailed guide)
```

## 🚀 Usage

The component is **already integrated**! Just add the assets:

```bash
# 1. Download card.glb and lanyard.png
# 2. Place in: src/assets/lanyard/
# 3. Run: npm run dev
# 4. Check the left side of the page
```

## 🎮 Features

- ✅ Interactive 3D card - drag to move
- ✅ Physics simulation - rope swing effect
- ✅ Sticky left positioning - hangs from top
- ✅ Responsive design - adapts to all screens
- ✅ Mobile friendly - hidden on small screens
- ✅ Zero dependencies needed for basic use

## 🎨 Visual Layout

```
┌─────────────────────────────────────────────┐
│ Lanyard (280px)  │  Main Content           │
│   [Canvas]       │  ┌─────────────────┐    │
│   │              │  │  Navigation     │    │
│   ├─ Card        │  ├─────────────────┤    │
│   │  (draggable) │  │  Hero Section   │    │
│   │              │  │  About Section  │    │
│   └─ Band        │  │  ... More       │    │
│      (rope)      │  │  ... Sections   │    │
│                  │  └─────────────────┘    │
└─────────────────────────────────────────────┘
```

## 📱 Responsive Behavior

| Screen Size | Display | Interaction |
|-----------|---------|-------------|
| > 1440px | Visible (320px) | Always visible |
| 1025-1440px | Visible (280px) | Always visible |
| 769-1024px | Visible (240px) | Always visible |
| 481-768px | Hidden (200px) | Slide in on hover |
| < 480px | Hidden | Completely hidden |

## 🔧 Props (Optional)

```tsx
// Default - no props needed
<Lanyard />

// Custom props
<Lanyard 
  position={[0, 0, 30]}      // [x, y, z] camera position
  gravity={[0, -40, 0]}       // [x, y, z] physics gravity
  fov={20}                    // Camera field of view (lower = zoomed in)
  transparent={true}          // Canvas background transparency
/>
```

## ✨ What You'll See

When complete:
1. A **3D lanyard card** hanging on the **left side** of your portfolio
2. **Drag it** with your mouse to interact with it
3. It swings realistically with **physics simulation**
4. On mobile, it **slides in from the left** on hover
5. Perfectly integrated with your existing portfolio!

## 🐛 If Something's Wrong

| Issue | Solution |
|-------|----------|
| "Assets missing" message | Add card.glb and lanyard.png to src/assets/lanyard/ |
| Card not visible | Restart dev server: npm run dev |
| Console errors | Check browser console (F12) for specific error messages |
| Positioning wrong | Check that Lanyard.css loaded correctly |
| Physics weird | Verify card.glb is valid GLB format |

## 📞 Key Component Methods

- **useFrame**: Updates physics each frame
- **useGLTF**: Loads 3D model
- **useTexture**: Loads PNG texture
- **useRopeJoint**: Creates rope physics constraints
- **RigidBody**: Physics-enabled 3D objects

---

**Status**: ✅ Ready to use - just add the asset files!
