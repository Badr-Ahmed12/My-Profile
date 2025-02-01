import { motion } from 'framer-motion';
import Image from 'next/image';

const ProfileImage = () => (
  <motion.div
    className="relative z-20 group mr-20"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 100 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500">
      <Image 
        src="/images/profile.jpg"
        alt="صورة الملف الشخصي"
        className="rounded-full w-44 h-44 sm:w-52 sm:h-52 border-4 border-white/10 shadow-xl"
        width={200}
        height={200}
        priority
      />
      <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/20 transition-all duration-300" />
    </div>
  </motion.div>
);

export default ProfileImage;