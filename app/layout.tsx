// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Nav from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedGradientBlobs from '@/components/Effects/AnimatedGradientBlobs';
import FloatingShapes from '@/components/Effects/FloatingShapes';
import DynamicGrid from '@/components/Effects/DynamicGrid';
import FloatingParticles from '@/components/Effects/FloatingParticles';
import ScrollIndicator from '@/components/Effects/ScrollIndicator';

export const metadata = {
  title: 'Portfolio الخاص بيا',
  description: 'موقع شخصي لعرض المشاريع والخبرات',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ar">
        <body className="min-h-screen relative bg-gray-100">
        <Nav />
        <div 
       className="absolute inset-0 pointer-events-none bg-grid-pattern dark:bg-grid-pattern-dark" 
        style={{
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-secondary)'
        }}
        />
        <div className="absolute inset-0 pointer-events-none bg-grid-pattern transition-all duration-500 ease-in-out" />
        <div className="relative z-10">
         <div className="shapes-container" style={{ pointerEvents: "none" }}>
        <AnimatedGradientBlobs />
        <FloatingShapes />
         <DynamicGrid />
        <FloatingParticles />
        <ScrollIndicator />
        </div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

