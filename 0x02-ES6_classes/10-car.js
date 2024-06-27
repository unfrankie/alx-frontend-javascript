const CarSymbol = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor[CarSymbol]();
  }

  static [CarSymbol]() {
    return new this();
  }
}
