const solve = (giftsCities, maxGifts, maxCities, i) => {
  if (i >= giftsCities.length || maxCities == 0) {
    return 0;
  }

  if (giftsCities[i] > maxGifts) {
    return solve(giftsCities, maxGifts, maxCities, i + 1);
  }

  return Math.max(
    giftsCities[i] +
      solve(giftsCities, maxGifts - giftsCities[i], maxCities - 1, i + 1),
    solve(giftsCities, maxGifts, maxCities, i + 1)
  );
};

const getMaxGifts = (giftsCities, maxGifts, maxCities) =>
  solve(giftsCities, maxGifts, maxCities, 0);

module.exports = getMaxGifts;
