import { motion } from "framer-motion";

const Header = () => (
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-5xl font-extrabold text-center mb-12"
  >
    المدونة
  </motion.h1>
);

export default Header;
