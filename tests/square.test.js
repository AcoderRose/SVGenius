const Square = require("../lib/square.js"); // This imports the Square class from the square.js file.

test("Square render method with color blue", () => {
  const shape = new Square(); // Instantiates a new Square object
  shape.setColor("blue"); // Sets the color of the Square to blue
  // Verifies if the rendered SVG corresponds to the expected output
  expect(shape.render().replace(/\s+/g, " ").trim()).toEqual(
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200" height="200" fill="blue"/> <text x="100" y="125" font-size="70" text-anchor="middle" fill=""></text> </svg>'
  );
});
