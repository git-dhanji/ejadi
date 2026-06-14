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
    default: 'Ejadi Interior | Best Architect in Indore | Luxury Architectural Studio',
    template: '%s | Ejadi Interior',
  },
  description: 'Ejadi Interior is the best architect in Indore, specializing in luxury residential and commercial architecture. We balance tectonic precision with spatial choreography to create permanent narratives of space.',
  keywords: ['Best Architect in Indore', 'Top Architectural Firm Indore', 'Luxury Interior Design Indore', 'Structural Engineering Madhya Pradesh', 'Ejadi Interior'],
  authors: [{ name: 'Ejadi Interior' }],
  creator: 'Ejadi Interior',
  metadataBase: new URL('https://ejadiinterior.com'), // Replace with actual URL
};

import { SmoothScroll } from '@/components/common/SmoothScroll';
import { CustomCursor } from '@/components/common/CustomCursor';
import { FloatingAction } from '@/components/common/FloatingAction';
import { LocationMap } from '@/components/common/LocationMap';

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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="grow">{children}</main>
            <LocationMap />
            <Footer />
            <FloatingAction />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}


