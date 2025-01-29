import { motion } from 'framer-motion';
import { ERROR_MESSAGE } from 'shared/constants';

export const ErrorMessage = () => (
  <motion.h1
    className="text-5xl text-white mb-6 font-mystical"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {ERROR_MESSAGE}
  </motion.h1>
);
