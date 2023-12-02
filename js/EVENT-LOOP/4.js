async function fn1() {
    await fn2()
    await fn3()
    console.log('fn1 end');//微任务1  //3
  }
  fn1()
  async function fn2() {
    console.log('fn2 end');//1
  }
  async function fn3() {
    console.log('fn3 end');//2
  }
  
  setTimeout(() => {    //宏任务1
    new Promise((resolve) => {
      console.log('setTimeout');//4
      resolve()
    })
    .then(() => {
      console.log('then');//微任务2//6
    })
    .then(() => {  //微任务3
      setTimeout(() => {
        console.log('then2 end');//7
      })
    })
    console.log('setTimeout end');//5
  }) 

  