"use client";

import React from 'react';
import AnimatedGradientBlobs from '@/components/Effects/AnimatedGradientBlobs';
import FloatingShapes from '@/components/Effects/FloatingShapes';
import DynamicGrid from '@/components/Effects/DynamicGrid';
import FloatingParticles from '@/components/Effects/FloatingParticles';
import ProfileImage from '@/components/ui/ProfileImage';
import TextContent from '@/components/ui/TextHeroContent';
import ScrollIndicator from '@/components/Effects/ScrollIndicator';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center overflow-hidden isolate"
      aria-label="قسم البطل"
    >
      <AnimatedGradientBlobs />
      <FloatingShapes />
      <DynamicGrid />
      <FloatingParticles />
      <ProfileImage />
      <TextContent />
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
