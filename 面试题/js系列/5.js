let obj={
    a:1,
    b:{
        n:2
    },
    c:[1,2,3,4]
}

let obj2 = shallowCopy(obj);

function shallowCopy(obj) {
    let obj2 = {};
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            obj2[key] = obj[key];
        }
    } 
    return obj2;
}

obj2.b.n=100
console.log(obj);
console.log(obj2);
