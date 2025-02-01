import React, { FC } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedComponentProps extends MotionProps {
  children: React.ReactNode;
}

const AnimatedComponent: FC<AnimatedComponentProps> = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
