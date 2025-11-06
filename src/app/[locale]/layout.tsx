import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Agdasima } from 'next/font/google';
import '../globals.css'

const agdasima = Agdasima({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-agdasima',
});

export const metadata: Metadata = {
  title: 'Energic',
  description: 'Energic App',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  // Ensure server resolves the request in the right locale
  setRequestLocale(locale);
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={agdasima.variable}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
