let testArr = [0,5,0,2,6,7,0,8];


let moveZeroes = (arr) => {
    let index = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] != 0){
            arr[index] = arr[i];
            index++;
        }
    }
    console.log(index);
    
    while(index < arr.length){
        arr[index++] = 0;
    }
}
//tips: 通过把所有非零的元素都向前排，通过index来控制，
//index最后停留的位置，就是非零元素的末尾
//最后将空下来的，从非零元素末尾开始的位置，全部填为0
moveZeroes(testArr);
console.log(testArr);
