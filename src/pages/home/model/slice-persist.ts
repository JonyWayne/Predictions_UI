import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './types';
import { TarotReading } from 'shared/types';

const initialState: State = {
  receivedPrediction: null,
  dataTimeStamp: null,
};

export const predictionSlice = createSlice({
  name: 'prediction',
  initialState,
  reducers: {
    setReceivedPrediction(state, action: PayloadAction<TarotReading | null>) {
      state.receivedPrediction = action.payload;
    },
    setDataTimeStamp(state, action: PayloadAction<string | null>) {
      state.dataTimeStamp = action.payload;
    },
    resetReceivedPrediction: () => initialState,
  },
});

export const predictionReducer = predictionSlice.reducer;
export const { setReceivedPrediction, resetReceivedPrediction, setDataTimeStamp } =
  predictionSlice.actions;
