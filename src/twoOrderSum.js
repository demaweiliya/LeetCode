//给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
//函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

let orderArr = [2,5,6,7,9,12,16,18,20]

let twoOrderSum = (arr, target) => {
    let i = 0,j = arr.length - 1;
    while(i < j){
        if(arr[i] + arr[j] > target){
            j--;
        }else if(arr[i] + arr[j] < target){
            i++;
        }else{
            return [i+1,j+1];
        }
    }
}

console.log(twoOrderSum(orderArr, 16));
