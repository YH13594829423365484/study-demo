function add(a,b){
    // console.log([...arguments]);
    console.log(Array.prototype.join.call(arguments,'-'));
    // const arr = Array.from(arguments);
    // console.log(Object.prototype.toString.call(arr));   prototype原型链
    // // 参数数量？ this  arguments 
    // console.log(a,b,arguments[0],arguments[1]);
    // console.log(typeof arguments,Object.prototype.toString.call(arguments),'111');
    // console.log(arguments.join('---'));  // join() 数组变字符串
    // if(arguments.length !=2){
    //     throw new Error('必须传递两个参数');
    // }
    return a+b;
}
try{
    console.log(add(1,2));
}catch(e){
    console.log(e);
}
console.log('continue...');