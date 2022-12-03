const distributeGifts = require("./solution");

describe("Solution Challengue 02", () => {
  it("return type", () => {
    expect(typeof distributeGifts(["a"], ["a"])).toBe("number");
  });

  it(`distributeGifts(packOfGifts, reindeers)`, () => {
    expect(
      distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
    ).toEqual(2);
  });

  it(`distributeGifts(['a', 'b', 'c'], ['d', 'e'])`, () => {
    expect(distributeGifts(["a", "b", "c"], ["d", "e"])).toEqual(1);
  });

  it(`it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu'])`, () => {
    expect(distributeGifts(["videogames", "console"], ["midu"])).toEqual(0);
  });

  it(`distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])`, () => {
    expect(
      distributeGifts(
        ["game", "videoconsole", "computer"],
        [
          "midudev",
          "pheralb",
          "codingwithdani",
          "carlosble",
          "blasco",
          "facundocapua",
          "madeval",
          "memxd",
        ]
      )
    ).toEqual(5);
  });

  it(`distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])`, () => {
    expect(
      distributeGifts(
        ["music"],
        [
          "midudev",
          "pheralb",
          "codingwithdani",
          "carlosble",
          "blasco",
          "facundocapua",
          "madeval",
          "memxd",
        ]
      )
    ).toEqual(26);
  });
});
