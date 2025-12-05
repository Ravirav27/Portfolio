# ProfileCard Component Integration

The ProfileCard component has been successfully integrated into your portfolio! It's a stunning 3D interactive card with advanced animations and tilt effects.

## Features

✨ **Advanced Animations**
- 3D tilt effect that follows mouse movement
- Dynamic glow effects that respond to pointer position
- Smooth parallax animations
- Holographic shine effects with color gradients

🎨 **Customizable**
- Name, title, handle, status
- Avatar image
- Contact button with callback
- Custom glow colors and sizes
- Optional mobile tilt support

📱 **Responsive**
- Automatically scales on different screen sizes
- Mobile-optimized UI
- Touch-friendly interactions

## Usage

The ProfileSection component is now displayed between the Hero and About sections. You can customize it in `/src/components/sections/ProfileSection.tsx`:

```tsx
<ProfileCard
  name="Your Name"
  title="Software Developer"
  handle="yourhandle"
  status="Available"
  contactText="Contact Me"
  avatarUrl="https://your-image-url.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={handleContactClick}
  behindGlowEnabled={true}
  behindGlowColor="rgba(132, 0, 255, 0.5)"
  behindGlowSize="80%"
/>
```

## Props

- **name** (string): Your full name
- **title** (string): Your professional title
- **handle** (string): Your social media handle
- **status** (string): Current status (e.g., "Available", "Online")
- **contactText** (string): Button text
- **avatarUrl** (string): Avatar image URL
- **miniAvatarUrl** (string, optional): Mini avatar for the user info section
- **showUserInfo** (boolean): Show user info panel at bottom
- **enableTilt** (boolean): Enable 3D tilt effect
- **enableMobileTilt** (boolean): Enable tilt on mobile devices
- **mobileTiltSensitivity** (number): Tilt sensitivity (default: 5)
- **onContactClick** (function): Callback when contact button is clicked
- **behindGlowEnabled** (boolean): Enable glow effect behind card
- **behindGlowColor** (string): CSS color for glow
- **behindGlowSize** (string): Glow size (percentage)
- **innerGradient** (string): Custom gradient for card interior

## Files Created

- `/src/components/effects/ProfileCard.tsx` - Main component
- `/src/components/effects/ProfileCard.css` - Styling
- `/src/components/sections/ProfileSection.tsx` - Section wrapper
- Updated `/src/pages/Index.tsx` - Added ProfileSection to page

## Customization Tips

1. **Change colors**: Modify `behindGlowColor` and `innerGradient` props
2. **Update avatar**: Replace the `avatarUrl` with your own image
3. **Adjust positioning**: The component is centered; wrap it in different containers for custom layouts
4. **Disable tilt**: Set `enableTilt={false}` for static version
5. **Custom callback**: Add your own logic in `onContactClick` handler

## Animation Configuration

The component has built-in animation constants in the code that you can adjust:

- `INITIAL_DURATION`: Initial animation time (1200ms)
- `INITIAL_X_OFFSET`: Horizontal offset (70px)
- `INITIAL_Y_OFFSET`: Vertical offset (60px)
- `ENTER_TRANSITION_MS`: Enter animation time (180ms)

Enjoy your new interactive profile card! 🎉
