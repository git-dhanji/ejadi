import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Syne } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ThemeProvider } from '@/components/common/ThemeProvider';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});



export const metadata: Metadata = {
  title: {
    default: 'Ezadi Interior | Luxury Interior Design & Architecture',
    template: '%s | Ezadi Interior',
  },
  description: 'Curating timeless narratives of luxury and comfort in residential and commercial spaces.',
  keywords: ['Interior Design', 'Architecture', 'Luxury Portfolio', 'Modern Design'],
  authors: [{ name: 'Ezadi Interior' }],
  creator: 'Ezadi Interior',
  metadataBase: new URL('https://ezadi.com'), // Replace with actual URL
};

import { SmoothScroll } from '@/components/common/SmoothScroll';
import { CustomCursor } from '@/components/common/CustomCursor';
import { FloatingAction } from '@/components/common/FloatingAction';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${syne.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >





      <body className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
            <FloatingAction />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}


