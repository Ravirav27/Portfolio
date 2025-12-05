import { Request, Response } from 'express';

export async function getViews(req: Request, res: Response) {
  try {
    const hitsUrl = 'https://hits.sh/ravishankar-portfolio.com.svg?t=' + Date.now();

    const proxies = [
      'https://api.allorigins.win/raw?url=' + encodeURIComponent(hitsUrl),
      'https://corsproxy.io/?url=' + encodeURIComponent(hitsUrl), // FIXED
    ];

    let svgText = null;
    let lastError = null;

    for (const proxyUrl of proxies) {
      try {
        const response = await fetch(proxyUrl, {
          cache: 'no-store',
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          },
        });

        if (response.ok) {
          svgText = await response.text();
          break;
        }
      } catch (err) {
        lastError = err;
        continue;
      }
    }

    if (!svgText) {
      throw lastError || new Error('All CORS proxies failed');
    }

    // ---------- PARSE VIEW COUNT -----------
    let views = null;

    // Pattern 1
    let match = svgText.match(/aria-label="hits:\s*(\d+)"/i);
    if (match) views = Number(match[1]);

    // Pattern 2
    if (!views) {
      match = svgText.match(/<title>hits:\s*(\d+)<\/title>/i);
      if (match) views = Number(match[1]);
    }

    // Pattern 3
    if (!views) {
      match = svgText.match(/>\s*(\d+)\s*</);
      if (match) views = Number(match[1]);
    }

    res.json({ views });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch view count',
      views: null,
    });
  }
}
