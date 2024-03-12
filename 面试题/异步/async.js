function foo(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2)
      }, 1000)
    })
  }
  
  async function fn() {
    let num1 = await foo(1)
    let num2 = await foo(num1)
    let num3 = await foo(num2)
  
    return num3
  } 
  fn().then((res) => {
    console.log(res);
  })