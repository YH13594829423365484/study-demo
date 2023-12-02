function xq(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('相亲');
            resolve();
            },2000)
    })
}
function marry(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('结婚');
            resolve();
            },1000)
    });
}
function baby(){
    console.log('万星星');
}

async function foo(){
    await xq();
    await marry();
    baby();
}
foo();