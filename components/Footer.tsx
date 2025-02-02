import React from 'react';
import { Github, Mail, Phone, Twitter, Linkedin, Globe, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-900 rounded-t-xl text-white p-4 md:p-6 flex flex-col items-center z-50 justify-center space-y-4 fixed bottom-0 left-0 right-0"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)'
      }}
    >
      <p className="text-center md:text-lg font-bold">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <ul className="flex flex-wrap justify-center space-x-4 text-sm md:text-base">
        <li className="mb-2 md:mb-4 flex items-center">
          <Code className="mr-2" size={16} />
          Built with{' '}
          <a className="text-blue-500 hover:underline" href="https://nextjs.org">Next.js</a>,{' '}
          <a className="text-blue-500 hover:underline" href="https://tailwindcss.com">Tailwind CSS</a>,{' '}
          <a className="text-blue-500 hover:underline" href="https://typescriptlang.org">TypeScript</a>
        </li>
        <li className="mb-2 md:mb-4 flex items-center">
          <Globe className="mr-2" size={16} />
          Hosted on{' '}
          <a className="text-blue-500 hover:underline" href="https://vercel.com">Vercel</a>
        </li>
        <li className="mb-2 md:mb-4 flex items-center">
          <Github className="mr-2" size={16} />
          Source code available on{' '}
          <a className="text-blue-500 hover:underline" href="https://github.com/Badr-Ahmed12/My-Profile">Github</a>
        </li>
        <li className="mb-2 md:mb-4 flex items-center">
          <Mail className="mr-2" size={16} />
          Email: <a className="text-blue-500 hover:underline" href="mailto:badr.ahmed12@gmail.com">badr.ahmed12@gmail.com</a>
        </li>
        <li className="mb-2 md:mb-4 flex items-center">
          <Phone className="mr-2" size={16} />
          Phone: <a className="text-blue-500 hover:underline" href="tel:+201022221101">+201022221101</a>
        </li>
        <li className="mb-2 md:mb-4 flex items-center">
          <Linkedin className="mr-2" size={16} />
          Social media: <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/badr-ahmed-/">LinkedIn</a>, <Twitter className="ml-2 mr-2" size={16} /><a className="text-blue-500 hover:underline" href="https://twitter.com/BadrAhmed12">Twitter</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

