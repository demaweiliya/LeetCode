var str = "wei wei a a iewiewa";

var isPalindrome = function(s) {
    var sarr = s.split("");
    var i = 0,j = sarr.length -1;
    console.log(sarr);
    
    while(i < j){
       if(sarr[i] === " "){
           i++;
       }else if(sarr[j] === " "){
           j--;
       }else{
           if(sarr[i].toLowerCase() === sarr[j].toLowerCase()){
               i++;
               j--;
           }else{
               return false;
           }
       }
    }
    return true;
};

console.log(isPalindrome(str));
