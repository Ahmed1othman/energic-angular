'use client';

import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'info';

interface NotificationProps {
  type: NotificationType;
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Notification({
  type,
  message,
  onClose,
  duration = 5000,
}: NotificationProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-teal-600" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'info':
        return 'text-teal-700';
    }
  };

  return (
    <div
      className={`fixed top-16 md:top-24 right-4 z-50 flex items-center gap-3 px-5 py-3 rounded-full border border-[#E8EAEE] bg-white [box-shadow:4px_4px_12px_0px_#00000026] animate-slide-in ${getStyles()}`}
      role="alert"
    >
      <div className="flex-shrink-0 p-2">{getIcon()}</div>
      <p className="text-[16px] font-medium flex-1 text-[#2AA700']">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-70 transition-opacity"
        aria-label="Close notification"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
}
