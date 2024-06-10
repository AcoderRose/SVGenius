const Triangle = require("../lib/triangle.js"); // This imports the Triangle class from the triangle.js file.

test("Triangle render method with color blue", () => {
  const shape = new Triangle(); // Instantiates a new Triangle object
  shape.setColor("blue"); // Sets the color of the Triangle to blue
  // Verifies if the rendered SVG corresponds to the expected output
  expect(shape.render().replace(/\s+/g, " ").trim()).toEqual(
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="100, 15 200, 200 0, 200" fill="blue"/> <text x="100" y="165" font-size="60" text-anchor="middle" fill=""></text> </svg>'
  );
});
