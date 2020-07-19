export const calcCareerTimestampToYear = (timestamp: number) => {
  if (!timestamp) {
    return '';
  }

  return Math.floor((Date.now() - timestamp) / (1000 * 60 * 60 * 24 * 365));
};
