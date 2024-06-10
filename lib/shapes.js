// Parent class to be extended by child classes (Square, Circle, Triangle)
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

module.exports = Shape;
