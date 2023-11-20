// var array=[1,1,'1','1']
// @funnc uniq 数组去重
// @param {Array} arr
// @return {Array} result
// @author len 2023/11/20
// function uniq(arr){
//     var res = [];
//     // 暴力破解法  两重for循环，外层循环arr，内层循环res,arr的当前项，
//     // 如果不在res中，则加入res,否则跳过
//     // arr.length 堆内存 读取属性 循环多少次就要读多少次
//     // 用一个变量缓存，性能优化
//     for(var i=0,arrLen=arr.length;i< arrLen;i++){
//     for(var j =0,resLen =res.length;j<resLen;j ++){
//         if(arr[i] === res[j]){  //恒等
//             break;
//         }
//     }
//     if(j===resLen){
//         res.push(arr[i])
//     }
// }
//     return res
// }

// function uniq(arr){
//     var res = [];
//     for (var i=0,len =arr.length;i<len;i++)
//     {
//         var current =arr[i];//变量名的意义
//         // 数组是连续的存储空间 arr[0] 起始位置，0+i*item= i的位置
//         if(res.indexOf(current)=== -1){ //下标 >= 0 存在
//             res.push(current);

//         }
//     }
//     return res;
// }

// function uniqie(arr){
//     var res = [];
//     // 先排序
//     var sortedArr =arr.concat().sort(); 
//     var seen; //前一项
//     for (var i=0,len =sortedArr.length;i<len;i++){
//         // 第一个元素或者
//         if(!i||seen !==sortedArr[i]){
//             res.push(sortedArr[i])

//         }
//         seen = sortedArr[i];
//     }
//     return res;
// }

// 适用于所有场景
function uniq(arr,isSorted){
    var res = [];
    var seen;
    for(var i=0,len =arr.length;i<len;i++){
        var val =arr[i]; //当前值
        if(!isSorted){
            if(!i||seen!==val){
                res.push(val);
            }
            seen = val;
        }else if(res.indexOf(val)===-1){
            res.push(val);
        }
    }
    return res;

}
// module 模块，当前是一个uniq模块
// exports向外输出 uniq
// 输出
module.exports = uniq;
