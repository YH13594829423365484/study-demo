// 函数修饰符 函数内部有异步 es7
(async function(){
    // js 是单线程 放入event loop , 先执行后同的代码
    // thenable  异步任务中控制执行顺序
    // fetch('https://q9liut.laf.run/get-list')  //fetch 是异步代码
    // .then(res => res.json()) //从二进制变成json格式
    // .then(data => {
    //     console.log(data)
    //     console.log('end');
    //     console.log('ok');
    // }) //;

    // await 异步变同步，有利于流程控制
    const res = await fetch('https://q9liut.laf.run/get-list')
    const {data} = await res.json()
    
    console.log(data);
    console.log('OK');
})() //立即执行函数