let arr = [1,2,3,4,5,6,7,8,9]

// let rotate = function(nums, k) {
//     for(let i = 0;i < k;i++){
//         let curPop = nums.pop();
//         nums.unshift(curPop);
//     }
//     return nums
// };


//另一种解答
let rotate = (nums,k) => {
    let result = nums.unshift(...nums.splice(nums.length - k));
    console.log('res',result);
    //unshift返回新数组的长度
    return nums;
}

console.log(rotate(arr,3));
