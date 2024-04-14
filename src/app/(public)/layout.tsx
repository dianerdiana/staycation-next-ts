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
      <main className="px-2 mx-auto max-w-7xl md:px-6 lg:px-10 text-secondary">{children}</main>
      <Footer />
    </>
  );
}
