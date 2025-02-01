import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FloatingParticles = () => {
  const floatingShapes = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: `rgba(79,70,229,${Math.random() * 0.3 + 0.1})`,
      delay: Math.random() * 2
    })), []);

  return (
    <div className="absolute inset-0 z-0">
      {floatingShapes.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.25, 1],
            rotate: [0, 30, -30, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
