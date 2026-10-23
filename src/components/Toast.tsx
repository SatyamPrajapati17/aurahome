import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onDismiss }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 3800);
    return () => clearTimeout(timer);
  }, [message, onDismiss]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-surface-elevated border border-cerulean-bright/50 text-white-soft shadow-2xl shadow-cerulean-blue/20">
        <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
        <span className="text-xs sm:text-sm font-medium">{message}</span>
        <button
          onClick={onDismiss}
          className="p-1 text-muted-blue-gray hover:text-white transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
