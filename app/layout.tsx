import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Provider from '@/lib/provider';
import { Toaster } from 'sonner';
import Whatsapp from '@/components/global/whatsapp';
import ChatWidget from '@/components/global/ChatWidget';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Doc Alert',
  description:
    'DOCalert is the revolutionary patient management platform empowering doctors to deliver exceptional care. With a robust suite of tools, we streamline patient data management, foster growth, and celebrate excellence.',
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/logo-new.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <Provider>
          {children} <Toaster />
          <ChatWidget />
        </Provider>
      </body>
    </html>
  );
}
