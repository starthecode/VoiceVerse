import Link from 'next/link';
import React from 'react';
import { Logo } from './Logo';

const navItems = [
  { name: 'Home', link: '#' },
  { name: 'Features', link: '#features' },
  { name: 'Use Cases', link: '#' },
  { name: 'Pricing', link: '#' },
  { name: 'Resources', link: '#' },
];

export const Header = () => {
  return (
    <header className="relative z-20 flex w-full h-fit justify-between px-28 py-7">
      <Logo />
      <nav className="flex gap-5 text-white items-center">
        {navItems.map((nav, index) => (
          <Link
            key={index}
            className="text-white font-semibold text-sm"
            href={nav.link}
          >
            {nav.name}
          </Link>
        ))}
      </nav>

      <div className="flex flex-row gap-4 h-fit text-sm">
        <Link
          href="#"
          className="flex items-center text-sm text-white rounded-full border border-white py-0 px-5 hover:bg-white hover:text-[#1F1F38] transition"
        >
          Login
        </Link>

        <Link
          href="#"
          className="bg-gradient-to-b from-[#af207a] to-[#470c31] text-white py-2 px-4 rounded-full transition hover:opacity-90"
        >
          Get for free <span>&rarr;</span>
        </Link>
      </div>
    </header>
  );
};
