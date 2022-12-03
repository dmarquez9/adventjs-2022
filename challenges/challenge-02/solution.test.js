const countHours = require("./solution");

describe("Solution Challengue 02", () => {
  it("return type", () => {
    expect(typeof countHours(2022, [])).toBe("number");
  });

  it(`countHours(2023, ['01/06', '04/01', '12/25'])`, () => {
    expect(countHours(2023, ["01/06", "04/01", "12/25"])).toEqual(4);
  });

  it(`countHours(2022, ['01/06', '04/01', '12/25'])`, () => {
    expect(countHours(2022, ["01/06", "04/01", "12/25"])).toEqual(4);
  });

  it(`countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']`, () => {
    expect(
      countHours(1985, [
        "01/01",
        "01/06",
        "02/02",
        "02/17",
        "02/28",
        "06/03",
        "12/06",
        "12/25",
      ])
    ).toEqual(10);
  });

  it(`countHours(2000, ['01/01'])`, () => {
    expect(countHours(2000, ["01/01"])).toEqual(0);
  });
});
