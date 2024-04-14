'use client';
// ** React Import
import React from 'react';

// ** Router
import { usePathname } from 'next/navigation';

// Custom components
import Header from './header';
import Footer from './footer';

export default function NavbarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // ** Hook
  const currentPath = usePathname();

  return (
    <>
      <Header currentPath={currentPath} />
      {children}
      <Footer />
    </>
  );
}
