function fn(arr,nums){
    let count=arr[0]+arr[1]+arr[2]
    for(let i=0;i<arr.length-2;i++){
        let left=i+1
        let right=arr.length-1
        while(left<right){
            let value=arr[i]+arr[left]+arr[right]
            if(Math.abs(nums-value)<Math.abs(nums-count)){
                count=value
            }
            if(value<nums){
                left++
            }else if(value>nums){
                right--
            }else{
                return value
            }
        }
    }
    return count
}
console.log(fn([1,2,3,4,5],7));
