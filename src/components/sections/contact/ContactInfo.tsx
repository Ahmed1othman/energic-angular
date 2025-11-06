'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Notification, { NotificationType } from '@/components/ui/Notification';

export default function ContactInfo() {
  const t = useTranslations('contactUs');
  const [notification, setNotification] = useState<{
    show: boolean;
    type: NotificationType;
    message: string;
  }>({ show: false, type: 'info', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t('info.email'));
      setNotification({
        show: true,
        type: 'success',
        message: t('info.copySuccess'),
      });
    } catch {
      setNotification({
        show: true,
        type: 'error',
        message: t('info.copyError'),
      });
    }
  };


  const contactInfo = {
    title: "Speak with an expert,",
    subtitle: "Contact us.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    email: "info@energetic.com",
    copySuccess: "Email copied to clipboard!",
    copyError: "Failed to copy email.",
    copyButton: "Copy My Email",
  };

  return (
    <>
      {notification.show && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}

      <div className="space-y-6">
        <div>
          <h1 className="text-4xl lg:text-[56px] font-semibold text-primary">
            {contactInfo.title}
          </h1>
          <h2 className="text-4xl lg:text-[56px] font-semibold text-primary">
            {contactInfo.subtitle}
          </h2>
        </div>

        <p className="text-[#7B7B7B] text-[16px] leading-relaxed max-w-xl">
          {contactInfo.description}
        </p>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
        >
          {contactInfo.copyButton}
        </button>
      </div>
    </>
  );
}
