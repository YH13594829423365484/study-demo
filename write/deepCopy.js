function deepCopy(obj1){
    let obj2={}
    for(let key in obj1){
        if(obj1.hasOwnProperty(key)){
            if(typeof obj1[key] ==="object"){
                obj2[key]=deepCopy(obj1[key])
            }else{
                obj2[key]=obj1[key]
            }
        }
    }
    return obj2
}