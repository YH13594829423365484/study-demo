let quickSort = function (arr) {
    if(arr.length<=1){
        return arr
    }
    let middleIndex=Math.floor(arr.length/2)
    let privot=arr.splice(middleIndex,1)[0]
    const left=[]
    const right=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<privot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([privot],quickSort(right))
};
console.log(quickSort([1,2,7,4,2,5,8,3]));

