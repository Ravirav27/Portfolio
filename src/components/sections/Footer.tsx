'use client';

import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from '@/components/effects/MetallicPaint';

export function Footer() {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNameSVG() {
      try {
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
        // Silently handle footer effect loading errors
      } finally {
        setLoading(false);
      }
    }

    loadNameSVG();
  }, []);

  return (
    <footer className="relative w-full border-t border-border/50 bg-gradient-to-b from-background to-background/80">
      {/* Metallic Paint Section */}
      {!loading && imageData && (
        <div className="w-full py-16">
          <div className="h-32 md:h-40 flex items-center justify-center overflow-hidden rounded-lg mx-auto max-w-2xl px-4">
            <div className="w-full">
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
            </div>
          </div>
        </div>
      )}

      {/* Copyright Section */}
      <div className="py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Ravishankar S. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Built with React, TypeScript, and WebGL
        </p>
      </div>
    </footer>
  );
}
