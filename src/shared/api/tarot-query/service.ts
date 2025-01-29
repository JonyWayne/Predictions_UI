import { createApi } from '@reduxjs/toolkit/query/react';
import { TarotReading } from '../../types/tarot';
import { baseQuery } from '../base-query';

export const tarotApi = createApi({
  reducerPath: 'tarotApi',
  baseQuery: baseQuery('/cards'),
  endpoints: (build) => ({
    getPrediction: build.query<TarotReading, void>({
      query: () => ({
        url: ``,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetPredictionQuery } = tarotApi;
