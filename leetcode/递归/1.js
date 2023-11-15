var arr =[1,[2,[3,4]]]
// for(var i=0;i<arr.length;i++){
//     let res=[]
//     if(!Array.isArray(arr[i])){
//         res.push(arr[i])
//     }else{
//         let item=arr[i]
//         for(var j=0;j<item.length;j++)
//         {
//             if(!Array.isArray(item.length);j++){

//             }
//         }
//     }
// }

var newArr=arr.flat(Infinity)   //Infinity 无穷大
console.log(newArr);