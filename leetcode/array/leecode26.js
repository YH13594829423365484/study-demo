var nums = [1, 1, 1, 3, 3, 4]
// 输出：2, nums = [1,2,_]

var removeDuplicates = function(nums) {
  var i = 0;
  for (var j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

// var removeDuplicates = function(nums) {
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       nums.splice(i+1, 1)
//       i--
//     }
//   }
//   return nums
// }

// var removeDuplicates = function(nums) {
//   var res = []
//   for (var i = 0; i < nums.length; i++) {
//     if (!res.includes(nums[i])) { // res 中不存在 nums[i]
//       res.push(nums[i])
//     }
//   }
//   return res
// };

console.log(removeDuplicates(nums));