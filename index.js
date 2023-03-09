const inquirer = require("inquirer");
const fs = require("fs");
import { writeFile } from "./lib/functions.js";

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
      name: "text",
      message:
        "Please enter no more than three characters that you would like in the center of your logo:",
    },
    {
      type: "input",
      name: "text_color",
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
    const initials = data.text.slice(0, 3);

    const filename = `${initials.toLowerCase()}_logo.svg`;

    writeFile(filename);
  });
