const fitsInOneBox = (boxes) => {
  return boxes
    .sort((boxA, boxB) => boxA.l - boxB.l)
    .every(({ l, w, h }, index, arr) => {
      if (index === 0) {
        return true;
      }

      const prevItem = arr[index - 1];
      return l > prevItem.l && w > prevItem.w && h > prevItem.h;
    });
};

module.exports = fitsInOneBox;
