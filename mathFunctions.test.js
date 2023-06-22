const mathFunctions = require('./mathFunctions');


describe("add(a,b) returns two numbers added together", () => {
    test("add(1,2) => 3", () => {
        expect(mathFunctions.add(1,2)).toEqual(3);
    })
})  


describe("subtract(a,b) returns one number subtracted by another", () => {
    test("subtract(2,1) => 1", () => {
        expect(mathFunctions.subtract(2,1)).toEqual(1);
    })
})  
 
describe("multiply(a,b) returns the product of two numbers", () => {
    test("multiply(1,2) => 2", () => {
        expect(mathFunctions.multiply(1,2)).toEqual(2);
    })
}) 

describe("divide(a,b) returns the result of dividing the first number by the second", () => {
    test("divide(4,2) => 2", () => {
        expect(mathFunctions.divide(4,0)).toEqual(null);
    })
}) 