const{createArray, random} = require("../lab1.js");

// const createArray = (length) => Array.from(Array(length).keys());

// test cases:  
/*  
    1-test that the return value of type array
    2-test if we pass 2 it will return array of length 2 and test it includes 1
    3-test if we pass 3 it will return array of length 3 and test it doesn't include 3
    4- test if we pass len =  0 it will create empty array
    5- test if we pass negative it will throw error
*/

describe("Here i test createArray function",function(){
    // test case 1
    it("test that the return value is of type array",
        ()=>{
            expect(createArray(5)).toEqual(jasmine.any(Array))
        }
    )
    it("test if we pass 2 it will return array of length 2 and test it includes 1",
        ()=>{
            expect(createArray(2)).toContain(1);
            expect(createArray(2)).toHaveSize(2);
        }
    )
    it("test if we pass 3 it will return array of length 3 and test it doesn't include 3",
        ()=>{
            expect(createArray(3)).not.toContain(3);
            expect(createArray(3)).toHaveSize(3);
        }
    )
    it("test if we pass len =  0 it will create empty array",
        ()=>{
            expect(createArray(0)).not.toContain(0);
            expect(createArray(0)).toHaveSize(0);
        }
    )
    it("test if we pass negative it will throw error",
        ()=>{
            expect(function(){createArray(-5)}).toThrow();
        }
    )
    it("test a happy case",
        ()=>{
            expect(createArray(5)).toEqual([0,1,2,3,4])
        }
    )
})

// export const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// test cases:
/* 
    1-test that the return value is a number
    2-test if we pass 5,7 it will return a number >= 5 and <= 7
    3-test if we pass one parameter it will return NaN
    4- test if min = max it will return that exact number
    5- test if min > max it will throw error
*/
describe("Here I test  random function", function(){
    it("test that the return value is a number",
        ()=>{
            expect(random(5,10)).toEqual(jasmine.any(Number))
        }
    )
    it("test if we pass 5,7 it will return a number >= 5 and <= 7",
        ()=>{
            expect(random(5,7)).toBeGreaterThanOrEqual(5)
            expect(random(5,7)).toBeLessThanOrEqual(7)
        }
    )
    it("test if we pass one parameter it will return NaN",
        ()=>{
            expect(Number.isNaN(random(5))).toBeTrue()
        }
    )
    it("test if min = max it will return that exact number",
        ()=>{
            expect(random(5,5)).toBe(5)
        }
    )
    it("test if min > max it will throw error",
        ()=>{
            expect(function(){random(7,5)}).toThrow()
        }
    )

})