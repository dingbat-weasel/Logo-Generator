const inquirer = require("inquirer");
const fs = require("fs");

const writeFile = function (filename) {
  fs.writeFile(`./output/${filename}`, "utf-8", (err, contents) => {
    if (err) {
      console.alert(`Error writing file: ${err}`);
      return;
    } else {
      console.log(`Successful write.`);
    }
  });
};

export { writeFile };
