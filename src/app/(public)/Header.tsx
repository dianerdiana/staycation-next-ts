'use client';

import React, { useState } from 'react';

// Thirdparty
import { FiAlignJustify, FiX } from 'react-icons/fi';

// Next
import Link from 'next/link';

// Interface
interface HeaderProps {
  currentPath: string | number | any;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  // ** State
  const [isOpen, setIsOpen] = useState(false);

  const navigations = [
    { id: 'home', title: 'Home', href: '/home' },
    { id: 'browse-by', title: 'Browse By', href: '/browse-by' },
    { id: 'stories', title: 'Stories', href: '/stories' },
    { id: 'agents', title: 'Agents', href: '/agents' }
  ];

  return (
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
  );
};

export default Header;
