function mul(n){
// let res =1
// for(var i=1;i<=n;i++)
// {
//     res =res*i
// }
// return res
if(n===1)
{
    return 1
}
return n * mul(n-1)

}

console.log(mul(5));


// 找规律
// 找出口