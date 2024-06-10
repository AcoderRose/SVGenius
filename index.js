const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/prompts.js");
const setShape = require("./lib/shapeOptions.js");

// Function to generate a new SVG file based on user input using Inquirer and the File System module.
function createLogo(title, response) {
  const svg = setShape(response);
  const fileName = `./logo-examples/${title}.svg`;
  fs.writeFile(fileName, svg, () => console.log(`Generated ${fileName}`));
}

// Initialize the application, prompt the user with questions, then generates a logo using the responses. Handles any errors that may occur.
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const { title } = response; // Retrieve the title from the user's response.
      createLogo(title, response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
