export const formatNumberLess9 = (number: number) => {
  return number <= 9 ? `0${number}` : number;
};
