function reduceArray(arr){
    const res=[]
    arr.forEach(element => {
        if(Array.isArray(element)){
            res.concat(reduceArray(element))
        }else{
            res.push(element)
        }
    });
    return res
}