// Require the colorOptions array to validate if the user input matches one of the allowed colors
const colorOptions = require("./colorOptions.js");

const prompts = [
  // Title Name for SVG Logo
  {
    name: "title",
    message: "What would you like to title your SVG file?",
    type: "input",
    validate: (answer) => {
      if (!answer.trim()) {
        return console.log(
          "\n Please provide a valid title. The title cannot be empty."
        );
      }
      return true;
    },
  },

  // Type of Shape
  {
    name: "shape",
    message: "What shape would you like your logo to be?",
    type: "list",
    options: ["Square", "Circle", "Triangle"],
  },

  // Color type selection of Shape
  // The user can choose a color option or provide a hexadecimal value for shapeColor.
  {
    name: "shapeColorOption",
    message:
      "What color format would you like to choose for the shape: color option or hexadecimal?",
    type: "list",
    options: ["color option", "hexadecimal"],
  },
  // Validation of Color Options
  {
    type: "input",
    name: "shapeColor",
    message: "Please enter a color option for the shape:",
    when: (answers) => {
      if (answers.shapeColorOption === "color option") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0, len = colorOptions.length; i < len; ++i) {
        if (answerLowercase.indexOf(colorOptions[i]) != -1) {
          return true;
        }
      }
      return console.log("\n Please input a valid color option:");
    },
  },
  // Validation of Hexadecimal Selection using RegEx pattern for Shape
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape hexadecimal number (e.g., #CCCCCC):",
    when: (answers) => {
      if (answers.shapeColorOption === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log("\n Please enter a valid hexadecimal.");
      }
      return true;
    },
  },

  // Text Selection
  // With validation ensure that the user inputs a maximum of three characters.
  {
    name: "text",
    message: "Please provide some text, with a maximum of three characters:",
    type: "input",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log(
          "\n Oops! Text must be a maximum of three characters."
        );
      }
      return true;
    },
  },

  // Color type selection of Text
  // The user is prompted to choose between selecting a color option or entering a hexadecimal value for the textColor.
  {
    name: "textColorOption",
    message:
      "What color format would you like to choose for the text: color option or hexadecimal?",
    type: "list",
    options: ["color option", "hexadecimal"],
  },
  // Validation of Color Options for text
  {
    type: "input",
    name: "textColor",
    message: "Please provide your preferred text color option:",
    when: (answers) => {
      if (answers.textColorOption === "color option") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0, len = colorOptions.length; i < len; ++i) {
        if (answerLowercase.indexOf(colorOptions[i]) != -1) {
          return true;
        }
      }
      return console.log("\n Please input a valid color option:");
    },
  },
  // Validation of Hexadecimal Selection using RegEx pattern for text
  {
    type: "input",
    name: "textColor",
    message: "Enter the text hexadecimal number (e.g., #CCCCCC):",
    when: (answers) => {
      if (answers.textColorOption === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log("\n Please enter a valid hexadecimal.");
      }
      return true;
    },
  },
];

module.exports = prompts;
