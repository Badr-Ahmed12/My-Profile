// ui/NavItem.tsx
import React, { FC } from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href} className="relative top-2 hover:text-gray-300 transition duration-300 ease-in-out">
      {children}
    </Link>
  );
};

export default NavItem;

