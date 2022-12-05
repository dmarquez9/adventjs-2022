const fitsInOneBox = require("./solution");

describe("Solution Challengue 04", () => {
  it("return type", () => {
    expect(typeof fitsInOneBox([{ l: 1, w: 1, h: 1 }])).toBe("boolean");
  });

  it(`
    fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ])
  `, () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 10 },
        { l: 3, w: 3, h: 12 },
        { l: 2, w: 2, h: 1 },
      ])
    ).toEqual(false);
  });

  it(`
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])
  `, () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toEqual(true);
  });

  it(`
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])
  `, () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 },
      ])
    ).toEqual(false);
  });

  it(`
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2}
    ])
  `, () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 2, w: 10, h: 2 },
      ])
    ).toEqual(false);
  });

  it(`
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])
  `, () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toEqual(true);
  });
});
