import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses =
    variant === 'primary'
      ? "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500"
      : "bg-gray-200 hover:bg-gray-300 text-gray-700 focus:ring-gray-400";

  const responsiveClasses = "text-base px-4 py-2 md:text-lg md:px-6 md:py-3 lg:text-xl lg:px-8 lg:py-4 xl:text-2xl xl:px-10 xl:py-5";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${responsiveClasses} ${className}`}
      {...props}
      style={{backgroundColor: 'var(--bg-secondary)',color: 'var(--text-secondary)' }}
    >
      {children}
    </button>
  );
};

export default Button;

