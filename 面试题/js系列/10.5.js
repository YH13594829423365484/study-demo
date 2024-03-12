// let parent = {
//     name: 'Tom',
//     firends: ['foo', 'bar', 'baz'],
//     age() {
//       return 18
//     }
//   }
  
//   function clone(origin) {
//     let obj = Object.create(origin)
//     obj.like = function() {
//       return ['coding']
//     }
//     return obj
//   }
  
//   let child = clone(parent)
  


  let Car ={
    color : 'black',
    money : '80'
  }
  function cloneBMW(origin) {
    let BMW = Object.create(origin)//通过Object.create()方法创建一个新对象BMW，并将origin对象作为BMW的原型。
    BMW.number = function() {  //在BMW对象上添加了一个新的方法number，该方法返回1000。
      return 1000
    }
    return BMW
  }
  
  let BMWX5 = cloneBMW(Car)//调用cloneBMW函数，传入Car对象作为参数生成了一个新对象BMWX5。

  console.log(BMWX5.money);//输出80
  console.log(BMWX5.number());//输出1000
  