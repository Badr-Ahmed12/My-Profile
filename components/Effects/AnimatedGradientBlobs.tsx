import { motion } from 'framer-motion';

const AnimatedGradientBlobs = () => (
  <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
    <motion.div
      className="absolute w-[800px] h-[800px] -top-64 -left-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "anticipate"
      }}
    />
    <motion.div
      className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-gradient-to-r from-cyan-400 to-sky-600 rounded-full blur-3xl"
      animate={{
        scale: [0.8, 1, 0.8],
        x: [-30, 30, -30]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "anticipate"
      }}
    />
  </div>
);

export default AnimatedGradientBlobs;
