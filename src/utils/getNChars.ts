export const getNChars = (val: string, n = 80): string => {
  const sortNChars = val.substring(0, n);
  if (val.length <= sortNChars.length) {
    return val;
  }

  return sortNChars + "...";
};
