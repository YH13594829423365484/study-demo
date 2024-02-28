let obj={
    a:1,
    b:{
        n:2
    },
    c:[1,2,3,4]
}

let obj2 = deepCopy(obj);

function deepCopy(obj) {
    let obj2 = {};
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            obj2[key] = obj[key];
            if(typeof obj[key] !==Object||obj[key]===null) {
                obj2[key] = obj[key];
            }
            else
            {
                obj2[key] = deepCopy(obj[key]);
            }    
        }
    }
    return obj2;
}

obj2.b=100
console.log(obj);
console.log(obj2);
