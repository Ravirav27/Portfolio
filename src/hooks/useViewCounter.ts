import { useEffect, useState, useRef } from 'react';

export function useViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Prevent running effect twice in StrictMode
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const fetchViews = async () => {
      try {
        setLoading(true);
        
        // Fetch from our backend API to avoid CORS issues
        const response = await fetch('/api/get-views');

        if (!response.ok) {
          throw new Error('Failed to fetch view count');
        }

        const data = await response.json();
        if (data.views !== null) {
          setViews(data.views);
          setError(null);
        } else {
          setError('View count not available');
          setViews(null);
        }
      } catch (err) {
        setError('Unable to fetch view count');
        setViews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();

    // Refresh view count every 5 minutes
    const interval = setInterval(fetchViews, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { views, loading, error };
}
