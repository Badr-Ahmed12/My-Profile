"use client";

import React from 'react';
import ProfileImage from '@/components/ui/ProfileImage';
import TextContent from '@/components/ui/TextHeroContent';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center overflow-hidden isolate"
      aria-label="قسم البطل"
    >
      <ProfileImage />
      <TextContent />
    </section>
  );
};

export default Hero;
