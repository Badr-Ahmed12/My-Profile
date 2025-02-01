"use client";

import { useState } from 'react';
import useThemeStore from '@/Store/themeStore';

function ToggleTheme() {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    toggleTheme();
    setTimeout(() => setAnimate(false), 200);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      style={{
        color: isDarkMode ? 'white' : 'black',
        backgroundColor: isDarkMode ? 'black' : 'white',
        animation: animate ? 'toggle-theme 0.2s ease-in-out' : 'none',

      }}
    >
      {isDarkMode ? ' Dark' : ' Light'}
    </button>
  );
}

export default ToggleTheme;

