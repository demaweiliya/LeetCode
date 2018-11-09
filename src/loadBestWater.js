let water = [0,2];


let loadBestWater = (arr) => {
    if(arr.length < 2){
        return;
    }
    let top = null;
    let height = null;
    let width = null;
    let area = null;
    let bestArea = 0;
    for(let i = 0;i < arr.length -1;i++){
        for(let j = arr.length -1;j > 0;j--){
            
            if(arr[i] < arr[j]){
                top = arr[j];
                height= arr[i];
            }else{
                top = arr[i];
                height = arr[j];
            }
           width = j - i;
            console.log('width',width);
            area = width * height;
            if(area > bestArea){
                bestArea = area;
            }
        }
    }
    console.log('bestArea',bestArea);
    
    return bestArea;
}


// loadBestWater(water); 最佳解答
let height = [1,8,6,2,5,4,8,3,7]
let containerMostWater = (height) => {
    if(height.length < 2){
        return;
    }
    let maxValue = -Infinity,
        len = height.length,
        i = 0,
        j = len -1;
    while(i < j){
        len = j - i;
        maxValue = Math.max(maxValue,len * Math.min(height[i],height[j]));
        height[i] < height[j] ? i++ : j--;
    }
    console.log('maxValue',maxValue);
    
    return maxValue
}

containerMostWater(height);