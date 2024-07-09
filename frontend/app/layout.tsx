import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/common/Navbar';
import { Providers } from '../providers/providers';
import { Toaster } from 'sonner';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'ProfileFolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(`
    __   __     ______     __  __     ______        __     ______    
   /\\ "-.\\ \\   /\\  ___\\   /\\_\\_\\_\\   /\\__  _\\      /\\ \\   /\\  ___\\   
   \\ \\ \\-.  \\  \\ \\  __\\   \\/_/\\/_\\   \\/_/\\ \\/     _\\_\\ \\  \\ \\___  \\  
    \\ \\_\\\\"\\_\\  \\ \\_____\\   /\\_\\/\\_\\    \\ \\_\\    /\\_____\\  \\/\\_____\\ 
     \\/_/ \\/_/   \\/_____/   \\/_/\\/_/     \\/_/    \\/_____/   \\/_____/ 
                                                                     
   `);

  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>
          <Navbar />
          <Toaster richColors />
          {children}
        </Providers>
      </body>
    </html>
  );
}
