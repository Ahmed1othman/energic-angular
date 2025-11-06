'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Notification, { NotificationType } from '@/components/ui/Notification';
import { AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contactUs.form');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const [notification, setNotification] = useState<{
    show: boolean;
    type: NotificationType;
    message: string;
  }>({ show: false, type: 'info', message: '' });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('name.required');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('name.minLength');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('email.required');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('email.invalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('phone.required');
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t('phone.invalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setNotification({
        show: true,
        type: 'error',
        message: t('error'),
      });
      setFormState('error');
      return;
    }

    setFormState('submitting');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setFormState('success');
      setNotification({
        show: true,
        type: 'success',
        message: t('success'),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Reset state after 3 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    } catch {
      setFormState('error');
      setNotification({
        show: true,
        type: 'error',
        message: t('error'),
      });
    }
  };

  const getInputClassName = (fieldName: keyof FormErrors) => {
    const baseClasses =
      'w-full px-0 py-3 border-0 border-b-2 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none transition-all';
    
    if (errors[fieldName]) {
      return `${baseClasses} border-b-red-500 focus:border-b-red-500`;
    }
    
    if (formState === 'success') {
      return `${baseClasses} border-b-green-500 focus:border-b-green-500`;
    }
    
    return `${baseClasses} border-b-gray-300 focus:border-b-primary`;
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

      <div className="bg-white p-0">
        <h3 className="text-xl font-normal text-gray-700 mb-8">
          {t('title')}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-normal text-gray-500 mb-2"
            >
              {t('name.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              // placeholder={t('name.placeholder')}
              className={getInputClassName('name')}
              disabled={formState === 'submitting'}
            />
            {errors.name && (
              <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8EAEE] bg-white text-red-600 text-sm [box-shadow:4px_4px_12px_0px_#00000026] animate-slide-in">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-normal text-gray-500 mb-2"
            >
              {t('email.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // placeholder={t('email.placeholder')}
              className={getInputClassName('email')}
              disabled={formState === 'submitting'}
            />
            {errors.email && (
              <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8EAEE] bg-white text-red-600 text-sm [box-shadow:4px_4px_12px_0px_#00000026] animate-slide-in">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-normal text-gray-500 mb-2"
            >
              {t('phone.label')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              // placeholder={t('phone.placeholder')}
              className={getInputClassName('phone')}
              disabled={formState === 'submitting'}
            />
            {errors.phone && (
              <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8EAEE] bg-white text-red-600 text-sm [box-shadow:4px_4px_12px_0px_#00000026] animate-slide-in">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone}</span>
              </div>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-normal text-gray-500 mb-2"
            >
              {t('message.label')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              // placeholder={t('message.placeholder')}
              rows={4}
              className={`${getInputClassName('name')} resize-none`}
              disabled={formState === 'submitting'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className={`inline-block py-3 px-8 rounded-lg font-semibold text-white transition-all ${
              formState === 'submitting'
                ? 'bg-gray-400 cursor-not-allowed'
                : formState === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : formState === 'error'
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-primary hover:bg-teal-700'
            }`}
          >
            {formState === 'submitting' ? t('submitting') : t('submit')}
          </button>
        </form>
      </div>
    </>
  );
}
