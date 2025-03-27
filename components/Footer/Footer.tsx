'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} Copyright © Hazrat Ali. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400">
                Terms
              </Link>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;