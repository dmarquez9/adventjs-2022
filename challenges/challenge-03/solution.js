const distributeGifts = (packOfGifts, reindeers) =>
  Math.floor((reindeers.join("").length * 2) / packOfGifts.join("").length);

module.exports = distributeGifts;
