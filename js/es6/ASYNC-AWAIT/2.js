function xq(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('a');
            resolve();// 成功完成异步操作，将数据作为参数传递给 resolve 方法        
            },2000)
    })
}
function marry(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('b');
            resolve();
            },1000)
    });
}
function baby(){
    console.log('c');
}
xq().then(()=>{
   return marry()
})
.then(()=>{
    baby();
});

