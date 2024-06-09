const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// this function will be called in the createLogo function within index.js
// matches the user response to a shape class to create a new shape
function setShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = shapeOptions;
