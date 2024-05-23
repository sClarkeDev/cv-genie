import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';
import './globals.css';

import { ThemeProvider } from '@/context/Theme';
import { cn } from '@/utils/cn';
import { Poppins as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: 'CV Genie',
  description: 'Create or update your resume in seconds!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const runtime = 'edge';
