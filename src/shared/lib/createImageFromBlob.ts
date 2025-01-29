let isLoadingFlag: boolean = false;

const base64ToBlob = (base64: string, mimeType: string) => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
};

export const createImageFromBlob = (
  imageData: string
): Promise<{ isLoading: boolean; img: HTMLImageElement | null }> => {
  return new Promise((resolve) => {
    isLoadingFlag = true;
    const img = new Image();
    const blob = base64ToBlob(imageData, 'image/jpeg');
    if (!(blob instanceof Blob)) {
      console.error('Неверный тип данных. Ожидался Blob.');
      resolve({ isLoading: false, img: null });
      return;
    }
    img.src = URL.createObjectURL(blob);
    img.onload = () => {
      isLoadingFlag = false;
      resolve({ isLoading: false, img });
    };
    img.onerror = () => {
      isLoadingFlag = false;
      resolve({ isLoading: false, img: null });
    };
  });
};
