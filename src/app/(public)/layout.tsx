'use client';
// ** React Import
import React, { useState } from 'react';

// ** Router
import { usePathname } from 'next/navigation';

// Thirdparty
import { FiAlignJustify, FiX } from 'react-icons/fi';

// Next
import Link from 'next/link';

export default function NavbarLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // ** Hook
  const currentPath = usePathname();

  // ** State
  const [isOpen, setIsOpen] = useState(false);

  const navigations = [
    { id: 'home', title: 'Home', href: '/home' },
    { id: 'browse-by', title: 'Browse By', href: '/browse-by' },
    { id: 'stories', title: 'Stories', href: '/stories' },
    { id: 'agents', title: 'Agents', href: '/agents' }
  ];

  return (
    <>
      <header>
        <nav className="border border-b">
          <div className="px-2 mx-auto max-w-7xl md:px-6 lg:px-10 text-secondary">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <span className="text-2xl font-bold text-primary">Stay</span>
                    <span className="text-2xl font-bold text-secondary">cation.</span>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navigations.map((nav) => (
                    <Link
                      key={nav.id}
                      href={nav.href}
                      className={currentPath === nav.href ? 'text-primary px-3 py-2' : 'hover:text-primary px-3 py-2'}
                    >
                      {nav.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 border rounded-md hover:text-white border-secondary text-secondary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen ? 'true' : 'false'}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <FiX size={20} /> : <FiAlignJustify size={20} />}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigations.map((nav) => (
                  <Link
                    key={nav.id}
                    href={nav.href}
                    className={`
                  hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium
                  ${currentPath === nav.href ? 'text-white bg-secondary' : 'text-secondary'}
                  `}
                  >
                    {nav.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
      <main className="px-2 mx-auto max-w-7xl md:px-6 lg:px-10 text-secondary">{children}</main>
      <footer className="py-12 mt-24 border-t-2 border-gray-200">
        <div className="grid grid-cols-12 px-2 mx-auto max-w-7xl md:px-6 lg:px-10">
          <div className="flex flex-col justify-center col-span-12 py-8 mb-10 lg:col-span-4">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-2xl font-bold text-primary">Stay</span>
                <span className="text-2xl font-bold text-secondary">cation.</span>
              </Link>
            </div>
            <p className="text-gray-300 lg:w-72">We kaboom your beauty holiday instantly and memorable.</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 lg:col-span-4">
                <h4 className="mb-6 text-base font-semibold">For Beginners</h4>
                <ul className="text-base text-gray-300">
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      New Account
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      Start Booking a Room
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      Use Payments
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-4">
                <h4 className="mb-6 text-base font-semibold">Explore Us</h4>
                <ul className="text-base text-gray-300">
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      Our Careers
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      Privacy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-4">
                <h4 className="mb-6 text-base font-semibold">Connect Us</h4>
                <ul className="text-base text-gray-300">
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      support@staycation.id
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      021 - 2208 - 1996
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/" className="hover:text-primary">
                      Staycation, Kemang, Jakarta
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <p className="text-center text-gray-300">Copyright 2024 • All rights reserved • Staycation</p>
          </div>
        </div>
      </footer>
    </>
  );
}
