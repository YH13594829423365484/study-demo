function fn(str){
    const res=[]
    if (str.length === 1) {
        return [str];
    }
    for(let i=0;i<str.length;i++){
        let count=str[i]
        let arr=str.slice(0,i).concat(str.slice(i+1))
        let arrValue=fn(arr)
        for(let j=0;j<arrValue.length;j++){
            res.push(count+arrValue[j])
        }
    }
    return res
}
console.log(fn("abc"));
