import { TarotReading } from 'shared/types';

export interface State {
  receivedPrediction: TarotReading | null;
  dataTimeStamp: string | null;
}
