export const getDateFromTimestamptz = (timestamptz: string) => {
  const [date, time] = timestamptz.split('T');

  const parsedDate = date.replaceAll('-', '/');

  return { date: parsedDate, time };
};
