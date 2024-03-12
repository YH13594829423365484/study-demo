function foo(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2)
      }, 1000)
    })
  }
  
  function* gen() {
    const num1 = yield foo(1)
    const num2 = yield foo(num1)
    const num3 = yield foo(num2)
    return num3
  }
  
  const g = gen()
  
  const next1 = g.next()
  next1.value.then((res1) => {
    console.log(res1);
  
    const next2 = g.next(res1) // 2
    next2.value.then((res2) => {
      console.log(res2);
  
      const next3 = g.next(res2)
      next3.value.then((res3) => {
  
        console.log(res3);
        const next4 = g.next(res3)
  
      })
  
    })
  
  })
  