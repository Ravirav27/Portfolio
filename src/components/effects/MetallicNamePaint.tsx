'use client';

import { useEffect, useState } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

export function MetallicNamePaint() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNameSVG() {
      try {
        setLoading(true);
        setError(null);

        // Fetch the SVG from public folder
        const response = await fetch('/ravishankar_name.svg');
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }

        const blob = await response.blob();
        const file = new File([blob], 'ravishankar_name.svg', { type: 'image/svg+xml' });

        const parsed = await parseLogoImage(file);

        if (parsed?.imageData) {
          setImageData(parsed.imageData);
        } else {
          throw new Error('Failed to parse SVG image data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadNameSVG();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-sm text-muted-foreground animate-pulse">Loading metallic effect...</div>
      </div>
    );
  }

  if (error || !imageData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Effect unavailable</div>
      </div>
    );
  }

  return (
    <MetallicPaint 
      imageData={imageData}
      params={{
        edge: 2,
        patternBlur: 0.005,
        patternScale: 2,
        refraction: 0.015,
        speed: 0.3,
        liquid: 0.07
      }}
    />
  );
}
