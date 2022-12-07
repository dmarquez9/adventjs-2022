const getGiftsToRefill = require("./solution");

describe("Solution Challenge 07", () => {
  it("return type to be array", () => {
    const result = getGiftsToRefill([], [], []);
    expect(Array.isArray(result)).toBe(true);
  });

  it("getGiftsToRefill(a1, a2, a3)", () => {
    expect(
      getGiftsToRefill(
        ["bici", "coche", "bici", "bici"],
        ["coche", "bici", "muñeca", "coche"],
        ["bici", "pc", "pc"]
      )
    ).toEqual(["muñeca", "pc"]);
  });

  it("getGiftsToRefill([], [], [])", () => {
    expect(getGiftsToRefill([], [], [])).toEqual([]);
  });

  it("getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])", () => {
    expect(getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"])).toEqual([]);
  });

  it("getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])", () => {
    expect(getGiftsToRefill(["a", "a"], ["b", "b"], ["c", "c"])).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  it(" getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])", () => {
    expect(getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"])).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ]);
  });
});
