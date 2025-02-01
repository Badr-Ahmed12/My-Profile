import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 rounded-t-xl text-white p-4 md:p-6 flex flex-col items-center z-50 justify-center space-y-4 fixed bottom-0 left-0 right-0"
    style={{
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-secondary)'
    }}
>
      <p className="text-center md:text-lg font-bold">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <ul className="flex flex-wrap justify-center space-x-4 text-sm md:text-base">
        <li className="mb-2 md:mb-4">
          Built with{' '}
          <a className="text-blue-500 hover:underline" href="https://nextjs.org">Next.js</a>,{' '}
          <a className="text-blue-500 hover:underline" href="https://tailwindcss.com">Tailwind CSS</a>,{' '}
          <a className="text-blue-500 hover:underline" href="https://typescriptlang.org">TypeScript</a>
        </li>
        <li className="mb-2 md:mb-4">
          Hosted on{' '}
          <a className="text-blue-500 hover:underline" href="https://vercel.com">Vercel</a>
        </li>
        <li className="mb-2 md:mb-4">
          Source code available on{' '}
          <a className="text-blue-500 hover:underline" href="https://github.com/abdullah-abuhamdan/my-next-portfolio">Github</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

