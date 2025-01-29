import { motion } from 'framer-motion';

import { useLazyGetPredictionQuery } from 'shared/api/tarot-query/service';
import { StarryBackground } from 'shared/ui';
import { TarotDeck } from 'entities/tarot/ui/TarotDeck';
import { ReadingResult } from 'entities/tarot/ui/ReadingResult';

export const HomePage = () => {
  const [fetchPrediction, { data, isLoading, isError }] = useLazyGetPredictionQuery();

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <StarryBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl text-white mb-6 font-mystical"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Добро пожаловать в мир Таро
          </motion.h1>
          <motion.p
            className="text-indigo-200 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Откройте тайны своего будущего с помощью древних карт
          </motion.p>
        </motion.div>

        <TarotDeck isShuffling={isLoading} onReadingStart={() => fetchPrediction()} />

        {data && <ReadingResult cards={data.cards} prediction={data.prediction} />}
      </div>
    </div>
  );
};
