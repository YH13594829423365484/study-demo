// function Car(color, speed) {
//     this.color = color
//     this.speed = speed
//     this.seat = [1, 2]
//   }
  
//   Truck.prototype = new Car('red', 200)
//   function Truck() {
//     this.container = true
//   }
  
  
//   let truck = new Truck()
//   let truck2 = new Truck()
  
//   truck.seat.push(3)
  
  
  
//   console.log(truck2.seat);

  function Car(color, money) {
    this.color = color
    this.money = money 
  }
  
  BMW.prototype = new Car('black',30)  //将子类的原型指向父类的实例
  function BMW() {
  }
  
  let BMW3 = new BMW()
  
  console.log(BMW3.color);
  console.log(BMW3.money);
  

  // function Car(color, speed)
  // {this.color = color
  //   this.speed = speed
  // }
  //   Truck.prototype = new Car()
  //   function Truck(){
  //     this.container =true
  //   }
  //   let truck = new Truck()
  //   console.log(truck);