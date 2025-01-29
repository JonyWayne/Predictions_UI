import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { TarotReading } from 'shared/types/tarot';
import { createImageFromBlob } from 'shared/lib';

export const ReadingResult = ({ cards, prediction }: TarotReading) => {
  const [imagesFromBlob, setImagesFromBlob] = useState<
    { id: number; isLoading: boolean; img: HTMLImageElement | null }[]
  >([]);

  useEffect(() => {
    const promises = cards.map(({ id, imageData }) =>
      createImageFromBlob(imageData).then((result) => ({ id, ...result }))
    );

    Promise.all(promises).then((results) => {
      setImagesFromBlob(results);
    });
  }, [prediction]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      <div className="flex justify-center gap-8 mb-8">
        {imagesFromBlob.map(({ id, isLoading, img }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: index * 0.3 }}
            className="w-64 h-100 rounded-lg overflow-hidden shadow-xl"
          >
            {isLoading ? (
              <div className="h-full w-full flex items-center justify-center">Загрузка...</div>
            ) : img ? (
              <img src={img.src} alt={`Card ${id}`} />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-red-500">
                Ошибка загрузки
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        {prediction.split(' ').map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + index * 0.1 }}
            className="text-white text-lg inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};
