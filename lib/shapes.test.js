const { SVG, Triangle, Circle, Square } = require("./classes");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should return a triangle with a fill of blue"),
      () => {
        const triangle = new Triangle("blue");
        expect(triangle.render()).toEqual(
          `<polygon points="100,200 200,0 0,0" fill="blue" />`
        );
      };
  });
});
