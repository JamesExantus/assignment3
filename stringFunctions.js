    function reverseString(str) {
        let splitString = str.split("");     
        let reverseArray = splitString.reverse();     
        let joinArray = reverseArray.join("");        
        return joinArray;
    }

    function isPalindrome(str) {
        let re = /[\W_]/g; 
        
        let lowRegStr = str.toLowerCase().replace(re, '');
    
        let reverseStr = lowRegStr.split('').reverse().join(''); 
       
        return reverseStr === lowRegStr; 
      }
       

   module.exports = {
    reverseString : reverseString,
    isPalindrome : isPalindrome
}

