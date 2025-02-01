"use client";

import { motion } from 'framer-motion';

export default function DynamicGrid() {
  return (
    <div className="absolute inset-0 opacity-10">
      <motion.svg
        className="w-full h-full"
        aria-hidden="true"
        initial={{ skewX: -10 }}
        animate={{ skewX: [10, -10] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <linearGradient id="grid-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="80%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-gradient)"
          rx="8"
          ry="8"
        />
      </motion.svg>
    </div>
  );
}

