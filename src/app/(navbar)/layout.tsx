'use client';
// ** React Import
import React from 'react';

// ** Router
import { usePathname } from 'next/navigation';

// Custom components
import Navbar from './navbar';
import Footer from './footer';

export default function NavbarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // ** Hook
  const currentPath = usePathname();

  return (
    <>
      <Navbar currentPath={currentPath} />
      {children}
      <Footer />
    </>
  );
}
