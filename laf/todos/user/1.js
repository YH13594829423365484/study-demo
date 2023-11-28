function sleep(t){
    const p = new Promise(reslove =>{
        setTimeout(()=>{
        reslove('promise返回的hello world')
        },t)
    })
    return p
}
// 异步通过promise的then变成了同步
sleep(1000)
    .then((msg) =>{
        console.log(msg,'hello');
    })
// 函数返回promise
// then 里面

// console.log('hello');

(async function(){
    // 耗时任务 promise的一个实例 
    const res=await fetch('https://qhabzb.laf.run/get-list')
    const data=await res.json()
    console.log(data);
})()