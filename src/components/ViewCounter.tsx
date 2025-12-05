import { motion } from 'framer-motion';
import { useViewCounter } from '@/hooks/useViewCounter';
import { Eye } from 'lucide-react';

interface ViewCounterProps {
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function ViewCounter({ showLabel = true, size = 'md' }: ViewCounterProps) {
  const { views, loading, error } = useViewCounter();

  // Don't show anything if there's an error and no views
  if (!loading && error && !views) {
    return null;
  }

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-2 ${sizeClasses[size]}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors">
        <Eye size={iconSizes[size]} className="text-primary" />
        <span className="font-semibold text-primary">
          {loading ? (
            <span className="inline-block animate-pulse">...</span>
          ) : (
            views?.toLocaleString()
          )}
        </span>
        {showLabel && <span className="text-muted-foreground ml-1">views</span>}
      </div>
    </motion.div>
  );
}
