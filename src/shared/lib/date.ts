import { format, isSameDay, parseISO } from 'date-fns';

export const getTodayFormattedDate = () => format(new Date(), 'yyyy-MM-dd');

export const isDataReceivedToday = (dataTimeStamp: string): boolean => {
  if (!dataTimeStamp) {
    return false; // Дата не найдена в сторе
  }

  try {
    const storedDate = parseISO(dataTimeStamp);
    const currentDate = new Date();

    return isSameDay(storedDate, currentDate);
  } catch (error) {
    console.error('Ошибка при разборе даты из store:', error);
    return false;
  }
};
