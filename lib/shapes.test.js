const { SVG, Triangle, Circle, Square } = require("./classes");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should render a triangle with fill of blue", () => {
      const triangle = new Triangle("blue");
      expect(triangle.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
      );
    });
  });
  describe("Circle", () => {
    it("should render a circle with fill of red", () => {
      const circle = new Circle("red");
      expect(circle.render()).toEqual(
        `<circle cx="150" cy="100" r="85" fill="red" />`
      );
    });
  });
  describe("Square", () => {
    it("should render a square with fill of green", () => {
      const square = new Square("green");
      expect(square.render()).toEqual(
        `<polygon points="56, 18, 244, 18, 244, 182 56, 182" fill="green" />`
      );
    });
  });
  describe("SVG", () => {
    it("should render an SVG object with red text string of 'abc' on a blue triangle background", () => {
      const triangle = new Triangle("blue");
      const svg = new SVG(triangle, "abc", "red");
      expect(svg.render()).toEqual(
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="red">abc</text></svg>`
      );
    });
  });
});
