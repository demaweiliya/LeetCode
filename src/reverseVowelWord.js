let targetStr = "weidapao haro";
//我的解答
// let reverse = (str) => {
//     let strArr = str.split('');
//     let filterArr = ['a','e','i','o','u'],tempArr = [],tempIndex=[];
//     for(let i = 0;i < strArr.length-1;i++){
//         if(filterArr.includes(str[i].toLowerCase())){
//             tempArr.push(strArr[i]);
//             tempIndex.push(i);
//         }
//     }

    
    
//     let reverseArr = tempArr.reverse();
//     console.log('reverseArr',reverseArr);
    
//     for(let i = 0;i < reverseArr.length; i++){
//         strArr[tempIndex[i]] = reverseArr[i];
//         console.log('str',strArr);
        
//     } 
//     console.log('strArr',strArr.join(''));
//     return strArr.join('');
// }

// reverse(targetStr);


//最佳解答
let reverse = (str) => {
    let arr = str.split('');
    let filterArr = ['a','e','i','o','u'];
    for(let i = 0,j = arr.length - 1;i < j;){
        if(!filterArr.includes(arr[i].toLowerCase())){
            ++i;
        }else if(!filterArr.includes(arr[j].toLowerCase())){
            --j;
        }else{
            // [arr[i],arr[j]] = [arr[j],arr[i]];
            // i++;
            // j--;
            [arr[i++],arr[j--]] = [arr[j],arr[i]];
        }
    }
    console.log(arr.join(''));
    
    return arr.join('');
}

reverse(targetStr);


