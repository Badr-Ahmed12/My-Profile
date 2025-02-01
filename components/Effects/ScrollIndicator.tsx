"use client";

import { motion } from 'framer-motion';

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
    animate={{ y: [0, 15, 0], opacity: [1, 0.6, 1] }}
    transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
  >
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      className="text-white/80"
    >
      <path
        fill="currentColor"
        d="M12 17.414l-5.707-5.707 1.414-1.414L12 14.586l4.293-4.293 1.414 1.414L12 17.414zM12 6l-5.707 5.707 1.414 1.414L12 8.828l4.293 4.293 1.414-1.414L12 6z"
      />
    </svg>
  </motion.div>
);

export default ScrollIndicator;
