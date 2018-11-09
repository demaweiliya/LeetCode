//我的解答
let str = "weidapao haha hello";

var lengthOfLastWord = function(s) {
    let matchArr = s.match(/\b\w+\b/g);
    if(matchArr){
        return matchArr[matchArr.length -1].length;
    }else{
        return 0;
    }
    //matchArr ? return matchArr[matchArr.length -1]
};

//其他解答
let lengthOfLastWord2 = (s) => s.trim().split(' ').pop().length;

console.log('length',lengthOfLastWord2(str));

