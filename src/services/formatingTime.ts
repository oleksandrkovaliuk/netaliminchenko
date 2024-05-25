export const formatingTime = (date: string) => {
  const newDate: Date = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short", 
  };
  return newDate.toLocaleString("en-GB", options);
};
