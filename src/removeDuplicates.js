let testArr = [0,0,2,6,6,8,8,9,9];
//数组去重后返回新数组的长度
let removeDuplicates = (nums) => {
    let number = 0;
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != nums[number]){
            number++;
            nums[number] = nums[i];
        }
    }
    return ++number;
}

console.log(removeDuplicates(testArr));
