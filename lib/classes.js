class SVG {
  constructor(shape, str, strColor) {
    this.shape = shape.render();
    this.text = `<text x="100" y="50" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${strColor}">${str}</text>`;
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
    return `<polygon points="100,200 200,0 0,0" fill=${this.color} />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="100" fill=${this.color} />`;
  }
}

class Square extends Shape {
  render() {
    return `<polygon points="0,0 0,200 200,200 200,0" fill=${this.color} />`;
  }
}

module.exports = { SVG, Triangle, Circle, Square };
