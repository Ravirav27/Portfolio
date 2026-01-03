import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const hitsUrl = 'https://hits.sh/ravishankars.vercel.app.svg?t=' + Date.now();
    
    let svgText = null;
    let lastError = null;

    // Try direct fetch first (works on Vercel)
    try {
      console.log('Attempting direct fetch from hits.sh...');
      const response = await fetch(hitsUrl, { 
        cache: 'no-store',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      });

      if (response.ok) {
        svgText = await response.text();
        console.log('Direct fetch succeeded');
      }
    } catch (e) {
      console.log('Direct fetch failed, trying CORS proxies...');
      lastError = e;
    }

    // Try multiple CORS proxies as fallback
    if (!svgText) {
      const proxies = [
        'https://api.allorigins.win/raw?url=' + encodeURIComponent(hitsUrl),
        'https://corsproxy.io/?' + encodeURIComponent(hitsUrl),
      ];

      for (const proxyUrl of proxies) {
        try {
          const response = await fetch(proxyUrl, { 
            cache: 'no-store',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
          });

          if (response.ok) {
            svgText = await response.text();
            console.log('CORS proxy fetch succeeded');
            break;
          }
        } catch (e) {
          lastError = e;
          continue;
        }
      }
    }

    if (!svgText) {
      const errorMsg = lastError instanceof Error ? lastError.message : 'Unknown error';
      console.error('Failed to fetch SVG from all sources:', errorMsg);
      throw new Error(`All fetch methods failed: ${errorMsg}`);
    }

    // Parse the SVG to extract the view count
    let views = null;

    // Helper function to parse numbers with commas (1,234 -> 1234)
    const parseNumberWithCommas = (str: string): number => {
      return parseInt(str.replace(/,/g, ''), 10);
    };

    // Pattern 1: aria-label format
    let match = svgText.match(/aria-label="hits:\s*([\d,]+)"/i);
    if (match) {
      views = parseNumberWithCommas(match[1]);
    }

    // Pattern 2: title tag format
    if (!views) {
      match = svgText.match(/<title>hits:\s*([\d,]+)<\/title>/i);
      if (match) {
        views = parseNumberWithCommas(match[1]);
      }
    }

    // Pattern 3: Generic number in tags (with optional commas)
    if (!views) {
      match = svgText.match(/>\s*([\d,]+)\s*</);
      if (match) {
        views = parseNumberWithCommas(match[1]);
      }
    }

    res.json({ views });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('View counter error:', errorMessage);
    res.status(500).json({
      error: `Failed to fetch view count: ${errorMessage}`,
      views: null,
    });
  }
}
