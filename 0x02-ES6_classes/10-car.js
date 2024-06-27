const CarSymbol = Symbol('Car');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const NewCarClass = this.constructor[CarSymbol];
    return new NewCarClass();
  }
}

Car[CarSymbol] = Car;

export default Car;
