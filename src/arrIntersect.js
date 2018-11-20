let girl = [2,3,5,6,7,8,6,8,8];
let boy = [3,4,7,8,3];

//题目:给定两个数组，编写一个函数来计算它们的交集。

//思维过程
// let intersect = (nums1, nums2) => {
//     let result = [];
//     for(let i = 0;i < nums1.length;i++){
//         for(let j = 0;j < nums2.length;j++){
//             console.log('print',nums1[i],nums2[j]);
            
//             if(nums1[i] === nums2[j]){
//                 result.push(nums1[i]);
//                 break;
//             }
//         }
//     }
//     return result;
// };

//我的解答
// let intersect = (nums1, nums2) => {
//     let res = []
//     let snums1 = nums1.sort((a,b) => {return a- b});
//     let snums2 = nums2.sort((a,b) => {return a -b});
//     let i = 0,j = 0;
//     while(i < snums1.length && j < snums2.length){
//         if(snums1[i] < snums2[j]){
//             i++;
//         }else if(snums1[i] > snums2[j]){
//             j++;
//         }else{
//             res.push(snums1[i]);
//             i++;
//             j++;
//         }
//     }
//     return res;
// }


let intersect = (nums1, nums2) => {
    let result = [],set = [];

    nums1.forEach(element => {
        set[element] = set[element] + 1 || 1;
    });

    nums2.forEach(element => {
        if(set[element]){
            result.push(element);
            set[element]--;
        }
    })
    return result;
}

console.log(intersect(girl,boy))