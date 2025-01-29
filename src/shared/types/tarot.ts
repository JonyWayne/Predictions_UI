export interface TarotCard {
  id: number;
  imageName: string;
  imageData: string;
  uploadTime: string;
}

export interface TarotReading {
  cards: TarotCard[];
  prediction: string;
}
