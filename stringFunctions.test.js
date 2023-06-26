const stringFunctions = require('./stringFunctions');

//expected pass
describe("reverseString(car) returns rac", () => {
    test("reverseString(car) => rac", () => {
        expect(stringFunctions.reverseString("car")).toEqual("rac");
    })
})  


//expected fail
describe("reverseString(dog) returns god", () => {
    test("reverseString(dog) => god", () => {
        expect(stringFunctions.reverseString("dog")).toEqual("cat");
    })
})  



//expected pass
describe("isPalindrome(racecar) returns racecar", () => {
    test("isPalindrome(racecar) => racecar", () => {
        expect(stringFunctions.isPalindrome("racecar")).toEqual(true);
    })
})  



//expected fail
describe("isPalindrome(noon) returns noon", () => {
    test("isPalindrome(noon) => noon", () => {
        expect(stringFunctions.isPalindrome("noon")).toEqual(day);
    })
})  

