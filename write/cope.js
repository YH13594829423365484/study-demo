function copy(obj1){
    let obj2={}
    for(let key in obj1){
        if(obj1.hasOwnProperty(key)){
            obj2[key]=obj1[key]
        }
    }
    return obj2
}