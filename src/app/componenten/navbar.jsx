"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div style={{ paddingBottom: '100px' }}>
    {/* // <div> */}
      <nav className="bg-customDarkBlue fixed w-full z-20 top-0 start-0 border-b border-customDarkBlue">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-customPink">Lucas Katamadze</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-customPink rounded-lg md:hidden hover:bg-customGray focus:outline-none focus:ring-2 focus:ring-customDarkBlue"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-center ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-customDarkBlue rounded-lg bg-customGray md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:ml-auto w-full md:w-auto">
              <li className="w-full md:w-auto text-center">
                <Link href="/" className={`block py-2 px-3 rounded md:p-0 ${pathname === '/' ? 'text-customLightGray md:text-customLightGray' : 'text-customPink hover:text-customLightGray'}`} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
              </li>
              <li className="w-full md:w-auto text-center">
                <Link href="/ervaring" className={`block py-2 px-3 rounded md:p-0 ${pathname === '/ervaring' ? 'text-customLightGray md:text-customLightGray' : 'text-customPink hover:text-customLightGray'}`}>Ervaring</Link>
              </li>
              <li className="w-full md:w-auto text-center">
                <Link href="/projecten" className={`block py-2 px-3 rounded md:p-0 ${pathname === '/projecten' ? 'text-customLightGray md:text-customLightGray' : 'text-customPink hover:text-customLightGray'}`}>Projecten</Link>
              </li>
              <li className="w-full md:w-auto text-center">
                <Link href="/contact" className={`block py-2 px-3 rounded md:p-0 ${pathname === '/contact' ? 'text-customLightGray md:text-customLightGray' : 'text-customPink hover:text-customLightGray'}`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;