import { motion } from 'framer-motion';
import Button from './Button';
import { containerVariants, fadeInUp } from '../Effects/variants';
import Link from 'next/link';

const TextContent = () => (
  <motion.div
    className="relative z-30 text-center px-4 space-y-6"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.h1
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
      initial={{opacity: 0, x: -1000}}
      animate={{opacity: 1, x: 0, transition: {duration: 1.5, ease: "easeInOut"}}}
      exit={{opacity: 0, x: 1000, transition: {duration: 1.5, ease: "easeInOut"}}}
    >
      إبداعاتي الرقمية
    </motion.h1>
    
    <motion.p
      variants={fadeInUp}
      className="text-xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed"
    >
      بناء تجارب ويب <span className="text-cyan-400 font-medium">فريدة</span> تجمع بين الجماليات 
      <span className="mx-2">✨</span>والتقنية المتطورة
    </motion.p>

    <motion.div variants={fadeInUp}>
      <Button 
        variant="primary"
        className="group relative overflow-hidden px-8 py-4 text-lg"
      >
        <Link href="/MyProjects" className="relative z-10">اكتشف أعمالي</Link>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </motion.div>
  </motion.div>
);

export default TextContent;