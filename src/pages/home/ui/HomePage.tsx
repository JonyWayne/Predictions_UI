import { motion } from 'framer-motion';

import { useLazyGetPredictionQuery } from 'shared/api/tarot-query/service';
import { StarryBackground } from 'shared/ui';
import { TarotDeck } from 'entities/tarot/ui/TarotDeck';
import { ReadingResult } from 'entities/tarot/ui/ReadingResult';
import { INFO_TITLE_1, INFO_TITLE_2 } from '../constants';
import { TarotReading } from 'shared/types';
import { useEffect, useState } from 'react';
import { setDataTimeStamp, setReceivedPrediction, resetReceivedPrediction } from '../model';
import { useTypedDispatch, useTypedSelector } from 'shared/hooks';
import { getTodayFormattedDate, isDataReceivedToday } from 'shared/lib';
import { ErrorMessage } from 'entities/tarot';

export const HomePage = () => {
  const [fetchPrediction, { data, isLoading, isError }] = useLazyGetPredictionQuery();
  const { prediction } = (data as TarotReading) || {};
  const dispatch = useTypedDispatch();
  const { receivedPrediction, dataTimeStamp } = useTypedSelector((store) => store.prediction);
  const { cards: receivedCards, prediction: receivedPredictionText } =
    (receivedPrediction as TarotReading) || {};

  useEffect(() => {
    if (prediction) {
      dispatch(setReceivedPrediction(data as TarotReading));
      dispatch(setDataTimeStamp(getTodayFormattedDate()));
    }
  }, [prediction]);

  useEffect(() => {
    if (!isDataReceivedToday(dataTimeStamp)) dispatch(resetReceivedPrediction());
  }, [dataTimeStamp]);

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
            {INFO_TITLE_1}
          </motion.h1>
          <motion.p
            className="text-indigo-200 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {INFO_TITLE_2}
          </motion.p>
        </motion.div>
        {isError && !isLoading && <ErrorMessage />}
        {!receivedPrediction && !isError && (
          <TarotDeck isShuffling={isLoading} onReadingStart={() => fetchPrediction()} />
        )}
        {receivedPrediction && !isLoading && !isError && (
          <ReadingResult cards={receivedCards} prediction={receivedPredictionText} />
        )}
      </div>
    </div>
  );
};
