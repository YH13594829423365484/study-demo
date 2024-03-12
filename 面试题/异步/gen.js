function a() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('a');
        resolve()
      }, 1000)
    })
  }
  
  function b() {
    console.log('b');
  }
  
  function* foo() {
    yield a()
    yield b()
  }
  let gen = foo()
  // console.log(gen.next());  // {}
  // console.log(gen.next());
  
  let next1 = gen.next()
  next1.value.then(() => {
    gen.next()
  })