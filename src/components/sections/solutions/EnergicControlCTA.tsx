'use client';

import { useTranslations } from 'next-intl';
import CtaButton from '@/components/ui/CtaButton';

export default function EnergicControlCTA() {
  const t = useTranslations('energicControl.cta');

  return (
    <section className="py-20 bg-primary">
      <div className="w-[1280px] mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <CtaButton className="bg-white text-primary hover:bg-gray-100">
          {t('button')}
        </CtaButton>
      </div>
    </section>
  );
}
