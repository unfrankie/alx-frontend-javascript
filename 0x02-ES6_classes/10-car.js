export default class Car {
  constructor(brand = null, motor = null, color = null) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Basic implementation just for demonstration
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
