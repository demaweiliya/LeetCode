//给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，后面跟 A 的所有奇数元素。


let arr = [3,1,2,4];
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    A.forEach(item => {
        if(item%2 === 0){
            even.push(item)
        }else{
            odd.push(item)
        }
    });

    let result = even.concat(odd);

    return result;

};

console.log(sortArrayByParity(arr));


//不错的解答
// let sortArrayByParity = function (A) {
//     let result = [];
//     for (let i = 0, len = A.length; i < len; i += 1) {
//         A[i] % 2 === 0 ? result.unshift(A[i]) : result.push(A[i]);
//     }
//     return result;
// };