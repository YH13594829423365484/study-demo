let Obj ={
    name:'tg',
    age:18,
    like:{
        n:'reading'
    }
}
let arr =[1,2,3,{a:1},underfined,null]
function shalldowCopy(obj) {
    if(!(obj instanceof object)) return 
    // 如果参数obj是数组，就创建数组，如果是对象，就创建对象
    let objCopy = obj instanceof Array ?[]:{}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            objCopy[key] = obj[key]
        }
    }
}
// let newObj = shalldowCopy(arr)
// arr[3].a=2
// let newObj = shalldowCopy(obj); 