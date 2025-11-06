'use client';

import { useTranslations } from 'next-intl';
import { Mail, Headphones } from 'lucide-react';

export default function ContactFooter() {
  const t = useTranslations('contactUs');

  return (
    <section className="bg-teal-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Business Enquiry */}
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-teal-100 mb-1">
                {t('footer.businessEnquiry')}
              </p>
              <a
                href={`mailto:${t('info.email')}`}
                className="text-lg font-semibold hover:text-teal-200 transition-colors"
              >
                {t('info.email')}
              </a>
            </div>
          </div>

          {/* Customer Support */}
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-teal-100 mb-1">
                {t('footer.customerSupport')}
              </p>
              <a
                href={`mailto:${t('info.email')}`}
                className="text-lg font-semibold hover:text-teal-200 transition-colors"
              >
                {t('info.email')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
