const wrapping = (gifts) =>
  gifts.map((gift) => {
    const lid = "*".repeat(gift.length + 2);
    return [lid, `*${gift}*`, lid].join("\n");
  });

module.exports = wrapping;
