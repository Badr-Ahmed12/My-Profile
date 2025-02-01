import { motion } from 'framer-motion';

const FloatingShapes = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="absolute top-1/4 left-1/4 w-32 opacity-30"
    aria-hidden="true"
    initial={{ rotateY: 0, rotateZ: 0 }}
    animate={{
      rotateY: [0, 180, 360],
      rotateZ: [0, 15, 0]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: [0.5, 0, 0.5, 1]
    }}
  >
    <polyhedron
      points="50,5 100,50 50,95 5,50"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="1"
    />
  </motion.svg>
);

export default FloatingShapes;
