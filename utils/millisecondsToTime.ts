export const millisecondsToTime = (duration: number) => {
  const seconds = Math.floor(duration / 1000);
  const minutes = Math.floor(seconds / 60);
  let remainder: string | number = seconds % 60;
  if (remainder < 10) {
    remainder = `0${remainder}`;
  }
  const time = `${minutes}:${remainder}`;
  return time;
};
