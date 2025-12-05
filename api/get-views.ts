import { Request, Response } from 'express';

export async function getViews(req: Request, res: Response) {
  try {
    const hitsUrl = 'https://hits.sh/ravishankar-portfolio.com.svg?t=' + Date.now();
    
    // Try multiple CORS proxies as fallback
    const proxies = [
      'https://api.allorigins.win/raw?url=' + encodeURIComponent(hitsUrl),
      'https://corsproxy.io/?' + encodeURIComponent(hitsUrl),
    ];

    let svgText = null;
    let lastError = null;

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
          break;
        }
      } catch (e) {
        lastError = e;
        continue;
      }
    }

    if (!svgText) {
      throw lastError || new Error('All CORS proxies failed');
    }

    // Parse the SVG to extract the view count
    let views = null;

    // Pattern 1: aria-label format
    let match = svgText.match(/aria-label="hits:\s*(\d+)"/i);
    if (match) {
      views = parseInt(match[1], 10);
    }

    // Pattern 2: title tag format
    if (!views) {
      match = svgText.match(/<title>hits:\s*(\d+)<\/title>/i);
      if (match) {
        views = parseInt(match[1], 10);
      }
    }

    // Pattern 3: Generic number in tags
    if (!views) {
      match = svgText.match(/>\s*(\d+)\s*</);
      if (match) {
        views = parseInt(match[1], 10);
      }
    }

    res.json({ views });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch view count',
      views: null,
    });
  }
}
