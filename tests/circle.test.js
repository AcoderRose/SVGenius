const Circle = require("../lib/circle.js"); // This imports the Circle class from the circle.js file.

test("Circle render method with color blue", () => {
  const shape = new Circle(); // Instantiates a new Circle object
  shape.setColor("blue"); // Sets the color of the Circle to blue
  // Verifies if the rendered SVG corresponds to the expected output
  expect(shape.render().replace(/\s+/g, " ").trim()).toEqual(
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="blue"/> <text x="150" y="125" font-size="70" text-anchor="middle" fill=""></text> </svg>'
  );
});
