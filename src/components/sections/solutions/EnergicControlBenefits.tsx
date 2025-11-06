'use client';

import { useTranslations } from 'next-intl';
import { TrendingUp, Layers, Headphones } from 'lucide-react';

export default function EnergicControlBenefits() {
  const t = useTranslations('energicControl.benefits');

  const benefits = [
    {
      icon: TrendingUp,
      title: t('efficiency.title'),
      description: t('efficiency.description'),
    },
    {
      icon: Layers,
      title: t('scalability.title'),
      description: t('scalability.description'),
    },
    {
      icon: Headphones,
      title: t('support.title'),
      description: t('support.description'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-[1280px] mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
