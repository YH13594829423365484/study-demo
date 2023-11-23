function myInstance(L,R){
    let l =L._proto_
    let r =R._proto_
    while(let !==null){
        if(l===r){
            return true
        }
        l=l._proto_
    }
    return false
}
console.log(myInstance({},Array));
console.log(myInstance([],Object));
