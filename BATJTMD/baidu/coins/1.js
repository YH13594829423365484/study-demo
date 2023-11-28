const coinChange = function(coins,amout){
    const f =[];
    f[0]=0;
    for(let i=1;i<=amout;i++){
        f[i]=Infinity;//先设为最大值
        for(let j=0;j<coins.length;j++){
            if(i-coins[j]>=0){
                f[i]=Math.min(f[i],f[i-coins[j]]+1);
            }
        }
    }
   if(f[amout]==Infinity){
        return -1;
    }
    return f[amout];
}
console.log(coinChange([1,2,5],11))