class SVG {
  constructor(shape, str, strColor) {
    this.shape = shape.render();
    this.text = `<text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${strColor}">${str}</text>`;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="85" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<polygon points="56, 18, 244, 18, 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { SVG, Triangle, Circle, Square };
