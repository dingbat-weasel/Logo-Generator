const inquirer = require("inquirer");
const fs = require("fs");
const { SVG, Triangle, Circle, Square } = require("./lib/classes");

createSVG = function (data) {
  let shape;
  switch (data.shape) {
    case "circle":
      shape = new Circle(data.shape_color);
      break;
    case "triangle":
      shape = new Triangle(data.shape_color);
      break;
    case "square":
      shape = new Square(data.shape_color);
      break;
  }

  const svg = new SVG(shape, data.str.slice(0, 3), data.str_color);
  return svg.render();
};

inquirer
  .prompt([
    {
      type: "input",
      name: "intro",
      message:
        "Welcome to the SVG Logo Generator. The following prompts will determine the text, shape, and color of your logo. The result will be an svg file located in the 'output' directory. Press Return to begin.",
    },
    {
      type: "input",
      name: "str",
      message:
        "Please enter no more than three characters that you would like in the center of your logo:",
    },
    {
      type: "input",
      name: "str_color",
      message:
        "Please enter a text color. You can name a color or enter a hex value (#fffff):",
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose the shape of your logo:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shape_color",
      message:
        "Please enter a background color. You can name a color or enter a hex value (#fffff):",
    },
  ])
  .then((data) => {
    const filename = `${data.str.slice(0, 3).toLowerCase()}_logo.svg`;

    fs.writeFile(`./output/${filename}`, createSVG(data), (err) =>
      err ? console.log(err) : console.log(`Successful write of ${filename}`)
    );
  });
