const wrapping = require("./solution");

describe("Solution Challengue 01", () => {
  it("return type", () => {
    const result = wrapping([]);
    expect(Array.isArray(result)).toBe(true);
  });

  it("wrapping(gifts)", () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ]);
  });

  it('wrapping(["midu"])', () => {
    expect(wrapping(["midu"])).toEqual(["******\n*midu*\n******"]);
  });

  it('wrapping(["a"])', () => {
    expect(wrapping(["a"])).toEqual(["***\n*a*\n***"]);
  });

  it("wrapping an empty array should return an empty array", () => {
    expect(wrapping([])).toEqual([]);
  });
});
