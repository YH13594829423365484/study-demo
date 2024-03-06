// function Car(name) {
//   this.name = name
// }
// Car.prototype.run = function(){}
// Car.sell = function(){
//   console.log('sell');
// }
// let car = new Car('BMW')
// car.sell()


class Car {
    constructor(name) {
      this.name = name
    }
    run() {
      console.log('running');
    }
    static sell() {
      console.log('sell');
    }
  }
  let car = new Car('BMW')
  car.sell()
  // console.log(car);   Array.from()  Array.isArray([])  
  