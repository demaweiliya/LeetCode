let testArr = [0,5,0,2,6,7,0,8,3,2,4];

let removeElement = (arr,target) => {
    let index = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] != target){
            arr[index] = arr[i];
            index++;
        }
    }
    arr.length = index;
    return index;
}

removeElement(testArr,2);
console.log(testArr);
