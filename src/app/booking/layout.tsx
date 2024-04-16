'use client';
// React Import
import React from 'react';

// Next
import Link from 'next/link';

export default function NavbarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <nav className="border border-b">
          <div className="flex justify-center py-5">
            <Link href="/">
              <span className="text-2xl font-bold text-primary">Stay</span>
              <span className="text-2xl font-bold text-secondary">cation.</span>
            </Link>
          </div>
        </nav>
      </header>
      <main className="px-2 mx-auto max-w-7xl md:px-6 lg:px-10 text-secondary">{children}</main>
    </>
  );
}
