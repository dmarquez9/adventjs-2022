// First solution
// const createCube = (size) => {
//   const top = [];
//   const bottom = [];

//   for (let i = 0; i < size; i++) {
//     top.push(
//       " ".repeat(size - i - 1) + "/\\".repeat(i + 1) + "_\\".repeat(size)
//     );
//     bottom.push(" ".repeat(i) + "\\/".repeat(size - i) + "_/".repeat(size));
//   }

//   return [...top, ...bottom].join("\n");
// };

const createCube = (size) =>
  [
    ...Array.from(
      { length: size },
      (v, index) =>
        " ".repeat(size - index - 1) +
        "/\\".repeat(index + 1) +
        "_\\".repeat(size)
    ),
    ...Array.from(
      { length: size },
      (v, index) =>
        " ".repeat(index) + "\\/".repeat(size - index) + "_/".repeat(size)
    ),
  ].join("\n");

module.exports = createCube;
