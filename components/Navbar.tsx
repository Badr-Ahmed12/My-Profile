import React from 'react';
import NavItem from './ui/NavItem';
import ToggleTheme from './ui/ToggleTheame';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white rounded-b-xl p-4"
     style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link href="/">My Portfolio</Link>
        </h1>
        <div className="flex space-x-4">
          <div className="flex  justify-center space-x-4">
            <NavItem href="/">الرئيسية</NavItem>
            <NavItem href="/about">من أنا</NavItem>
            <NavItem href="/projects">مشاريعي</NavItem>
            <NavItem href="/contact">اتصل بي</NavItem>
            <NavItem href="/blog">المدونة</NavItem>
          </div>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
