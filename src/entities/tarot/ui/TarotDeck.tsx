import { motion } from 'framer-motion';

import backgroundImage from 'assets/card_background.jpeg';
import styles from './Taro.module.css';
import { StyledButton } from 'shared/ui';

interface TarotDeckProps {
  isShuffling: boolean;
  onReadingStart: () => void;
}

export const TarotDeck = ({ isShuffling, onReadingStart }: TarotDeckProps) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <motion.div
        className="relative w-64 h-96 cursor-pointer"
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute top-0 w-64 h-96 bg-black rounded-lg shadow-xl border-2 border-indigo-300"
            style={{
              backgroundImage: 'black',
              transform: `translateY(${index * 2}px)`,
            }}
            animate={
              isShuffling
                ? {
                    rotateY: [0, 180, 360],
                    x: [0, 20, -20, 0],
                  }
                : {}
            }
            transition={{
              duration: 1,
              repeat: isShuffling ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div>
                <img src={backgroundImage} alt="Tarot_cards" className={styles.image} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <StyledButton onClick={onReadingStart} disabled={isShuffling} />
    </div>
  );
};
