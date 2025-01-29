import { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './button.module.css';
import { StyledButtonProps } from './types';

export const StyledButton: FC<StyledButtonProps> = ({ onClick, disabled }) => {
  return (
    <motion.button
      className={styles.StyledButton}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <span className={styles.StyledButtonSpan}>Расклад дня</span>
    </motion.button>
  );
};
