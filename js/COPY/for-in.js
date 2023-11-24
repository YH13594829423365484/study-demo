let obj ={
    name:'tg',
    age:18,
    like:{
        n:'reading'
    }
}

let o=Object.create(obj);
o.sex ='boy'

// console.log(o);

for(let key in o){
    if(o.hasOwnProperty(key)){
    console.log(key,obj[key]);
    }
}

for(let key in o){
    
}